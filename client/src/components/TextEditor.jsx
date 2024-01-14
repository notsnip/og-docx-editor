import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../styles/Editor.style.css';

export default function TextEditor() {

  const formats = [
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'header','list', 'script',  'indent', 'direction','size','header','color','font','align'
  ]
 const modules = {
    toolbar:[ ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']       ]
  }
  return (
    <>
    <div id="editor" className='w-1'>
      <ReactQuill theme='snow' modules={modules}
        formats={formats}/></div>
    </>
  )
}
