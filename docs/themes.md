## Термины
* _Тема_ - набор html-шаблонов не важно в каком виде.
* _Скин_ - комбинация темы, css, изображений и макросов.
* _Представление_ (View) - todo


### Точка входа
Получение HTML осуществляется посредством вызова статического метода `View::make(путь к шаблону, параметры)`, который возвращает либо строку с готовым кодом, либо экземпляр класса View, преобразующийся в такую строку по необходимости.

## Темы
### Структура
По сути, тема представляет собой класс, унаследованный от Skins\Themes\AbstractTheme, а то как он получает результирующий HTML - это исключительно его проблема. Так же не сильно важно и местоположение файла этого класса, лишь бы он был доступен для загрузки.

Однако, для простоты, решено что темы и их шаблоны находятся в директории app/themes, каждая в своей поддиректории. Имя поддиректории, как и имя класса должны полностью (с учётом регистра) совпадать с именем темы. php-файл с классом должен находится в корне темы.
```
app/
  themes/
    Theme1/
      Theme1.php
        class Theme1 extends AbstractTheme {...}
      ... - любое другое содержимое темы.
    Theme2/
      Theme2.php
        class Theme2 extends AbstractTheme {...}
      ...
```
### Генерация HTML
Для работы, класс темы обязан реализовать метод `getHtml($path, $vars)`, возвращающий готовый HTML исходя из переданных пути к шаблону и параметров. Если тема по каким-либо причинам не может этого сделать, она должна сгенерировать исключение MissingTemplateException для вывода ошибки или передачи запроса в родительскую тему (см. наследование)

### Наследование
В классе темы можно указать наименование родительской темы, к которой будут перенаправляться запросы, если они не смогли быть обработаны текущей темой. Для этого класс должен переопределить метод `getParentThemeName()` возвращающий строку с именем нужной темы.

## Скины
На данный момент данные скинов хранятся в файле app/data/skins.php в виде массива. Каждый элемент массива соответствует отдельному скину и также является именованным массивом со следующими ключами
* id - внутренний идентификатор скина
* name - отображаемое имя скина
* macro - идентификатор макросов подстановки
* css - имя scss-файла (с расширением, но без пути)
* images - имя директории с изображениями (только имя, без пути)
* theme - наименование темы.