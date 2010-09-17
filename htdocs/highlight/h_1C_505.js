window['h_1C']=[
 [
    /^([\d\.])+/,
    ['<span style=\'color:black\'>',3],
    ['</span>',0]
 ],
 [
    /^(Procedure|EndProcedure|Function|EndFunction|If|Then|EndIf|ElseIf|While|Do|EndDo|For|To|Try|Except|EndTry|GoTo|Continue|Break|Return|Raise|LoadFromFile|Forward|Var|Export|Round|Int|Min|Max|Log10|Ln|StrLen|IsBlankString|TrimL|TrimAll|TrimR|Left|Right|Mid|Find|StrReplace|StrCountOccur|StrLineCount|StrGetLine|Upper|Lower|OemToAnsi|AnsiToOem|Chr|Asc)\b/i,
    ['<span class=\'movedprefix\'>',3],
    ['</span>',0]
 ],
 [
    /^((���������|��������������|�������|������������|����|�����|�����|���������|���������|����|����|����������|���|��|�������|����������|������������|�������|����������|��������|�������|�����������������|����������������|�����|�����|�������|���|���|���|����|���10|���|��������|������������|������|�����|�����|���|����|����|�����|�����������|�����������������|������������������|�����������������|����|����|����|�������|�����������|�����������|�������������|���������|���������|�����������|�����������|�������|�������|���������|���������|�������|���������|���������|���������������|������������|��������������|���������|���������������������������|��������������������������|������������|����������������������������|�������������������������|����|������|�����|�������|������|������|����������|��������������|�����������|������������|����������|������������|������������������|������|��������������|��������|���������������������|���������|������|����|����������������|�������������|���������������|���������������������|������������������|������������|������������������|�������������������|���������|����������������|����������������������|����������������|������������|����������������|�����������������������|������������������|��������������������|���������������������|���������������|����������������|�������������|���������������|�����������������|��������������������|�������������|��������������|�����������|��������������|��������������|����������������������|������������|��������������������|����������������������|������������������������|��������������|�������������������|����������������������|�������������������������|��������������|�����������������|������������|��������������������|������������������|����������������|���������������|���������|������������|�����������|�����������|�������������������|������������������|����������|���������������|��������������|���������������������������|������������������������������|�������������|����������������|�����������������|����������������������|����������|��������������|���������������|������������������|�����������������|��������������|��������������|��������������������|��������������������)[^a-zA-Z�-��-�0-9_])/i,
    ['',0],
    ['<span class=\'movedprefix\'>',3],
    ['</span>',0]
 ],
 [
    /^([a-zA-Z�-��-�0-9_]+\b)/,
    ['',0],
    ['',2]
 ],
 [
    /^(=|<|>|-|\+|\*|%|\(|\)|,|;)/i,
    ['',0],
    ['<span class=\'movedprefix\'>',3],
    ['</span>',0]
 ],
 [
    /^('.+?')/i,
    ['',0],
    ['<span style=\'color:black\'>',3],
    ['</span>',0]
 ],
 [
    /^\/\/+(.)*?\n/,
    ['<span style=\'color:green\'>',3],
    ['</span>',0]
 ],
 [
    /^(\/)/i,
    ['',0],
    ['<span class=\'movedprefix\'>',3],
    ['</span>',0]
 ],
 [
    /^(("(.|\n)*?")|(\|.*?(\n|")))/,
    ['',0],
    ['<span style=\'color:black\'>',3],
    ['</span>',0]
 ]
];
