<?php

namespace Skins;

class DatasetSkin extends BaseSkin
{
    private $id;
    private $name;
    private $macro;
    private $css;
    private $imagesDir;
    private $viewsDir;

    function __construct(array $data)
    {
        //todo refactor?
        if (isset($data['name']) && isset($data['id']) && isset($data['macro']) && isset($data['css']) && isset($data['images']) && isset($data['views'])) {
            $this->name      = $data['name'];
            $this->macro     = $data['macro'];
            $this->css       = $data['css'];
            $this->imagesDir = $data['images'];
            $this->id        = $data['id'];
            $this->viewsDir  = $data['views'];
        } else {
            throw new \Exception('Data passed to constructor is wrong');
        }
        parent::__construct();
    }

    /**
     * @return string Наименование скина
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return int Id набора макросов в бд
     */
    public function getMacroId()
    {
        return $this->macro;
    }

    /**
     * @return string Путь к файлу css
     */
    public function getCSSFile()
    {
        return 'assets/stylesheets/skins/' . $this->css;
    }

    /**
     * @return string Путь к директории с изображениями
     */
    public function getImagesPath()
    {
        return 'style_images/' . $this->imagesDir;
    }

    /**
     * @return int Идентификатор скина
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Возвращает набор данных скинов из data.
     * return array|mixed
     */
    public static function getAllSkinsData()
    {
        return require \Config::get('path.data') . '/skins.php';
    }

    /**
     * Возвращает путь к директории шаблона
     * @return string
     */
    public function getViewsDirectory()
    {
        return \Config::get('path.templates') . DIRECTORY_SEPARATOR . $this->viewsDir;
    }
}
