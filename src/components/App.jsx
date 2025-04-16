import React, { useState, useEffect } from "react";
import Editor from "./Editor.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faTrashCanArrowUp, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import {text_css, text_html, text_js} from "../tic-tak-toe/first";
import {Link} from 'react-router-dom';

function App() {
  const [html, setHtml] = useState('',text_html);
  const [css, setCss] = useState('',text_css)
  const [js, setJs] = useState('',text_js)
  const [Doc, setDoc] = useState('')

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setDoc (
      `<html>
        <body> ${html} </body>
        <style> ${css}  </style>
        <script> ${js} </script>
      </html>`)
    },250)
    return ()=> clearTimeout(timeout)
  },[html, css, js])

  const [expand, setExpand] = useState(true);

  const handleReset = () => {
    setHtml(text_html);
    setCss(text_css);
    setJs(text_js);
  };

  const clearTrash = () => {
    setHtml('');
    setCss('');
    setJs('');
  };

  return (
    <>
      <div class="navbar" fit>
        <Link to='/'> <h2><FontAwesomeIcon icon={faCodepen} className='logoo' />  RunWeb</h2> </Link>
        <div>
          <button className="reset"  id='Trash' onClick={clearTrash}><FontAwesomeIcon icon={faTrashCanArrowUp} />    Trash</button>
          <button className="reset" onClick={handleReset}><FontAwesomeIcon icon={faRetweet} />  Reset</button>
        </div>
      </div>
      <div className="editor-space">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>
        <Editor language="css" displayName="CSS" value={css} onChange={setCss}/>
        <Editor language="javascript" displayName="JavaScript" value={js} onChange={setJs}/>
      </div>
      <div className={`result ${expand ? '' : 'fullscreen'}`}>
        <button className="expand" onClick={()=> setExpand(prevExpand => !prevExpand)}><FontAwesomeIcon icon={expand ? faAngleUp : faAngleDown} /></button>
        <iframe 
        srcDoc={Doc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        />
      </div>
    </>
  );
}

export default App; 