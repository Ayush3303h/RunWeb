import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { material } from '@uiw/codemirror-theme-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

export default function Editor(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props;

    const [open, setOpen] = useState(true);

    function handleChange(value) {
        onChange(value);
    }

    const extensions = {
        'javascript': [javascript()],
        'xml': [html()],
        'css': [css()]
    };

    return (
        <div className={`editor ${open ? '' : 'collapsed'}`}>
            <div className='Title'>
                {displayName}
                <div className='buttoned'>
                    <button className='code_expand' onClick={() => setOpen(prevOpen => !prevOpen)}>
                        <FontAwesomeIcon icon={open ? faExpandAlt : faCompressAlt} />
                    </button>
                </div>
            </div>
            <CodeMirror
                value={value}
                height={open ? "300px" : "50px"}
                theme={material}
                extensions={[extensions[language]]}
                onChange={handleChange}
                basicSetup={{
                    lineNumbers: true,
                    highlightActiveLineGutter: true,
                    highlightActiveLine: true,
                    foldGutter: true,
                    dropCursor: true,
                    allowMultipleSelections: true,
                    indentOnInput: true,
                }}
            />
        </div>
    );
} 