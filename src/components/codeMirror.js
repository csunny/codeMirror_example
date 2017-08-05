import React from 'react';
import { connect } from 'dva';
import CodeMirror from 'react-codemirror';


import 'codemirror/lib/codemirror.css';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/python/python';

import 'codemirror/addon/edit/matchbrackets'

import 'codemirror/theme/seti.css';

function IndexPage({}){

    const options = {
    lineNumbers: true,
    readOnly: false,
    mode: 'python',
    theme: "seti",
    extraKeys: {"Tab": "autocomplete"},
    matchBrackets: true,
  };
  const code = "//test",
  
  return (<CodeMirror value={code} options={options} autoFocus={true}/>)
  
}


IndexPage.prototype = {

}
export default connect()(IndexPage)
