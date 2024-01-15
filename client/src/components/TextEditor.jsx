import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../styles/Editor.style.css';
import {io} from 'socket.io-client'


const server= import.meta.env.VITE_SERVER || 'http://localhost:3001'
const webSocket= io(server);
export default function TextEditor() {


  const [editorData,setEditorData]= useState('');

  function handleChange(data){
    webSocket.emit('send-editorData',data);
  };

  function updateEditorData(data){
    setEditorData(data);
  }

  useEffect(()=>{
    webSocket.on('broadcast-editorData',data=>{
      setEditorData(data);
    });
  },[])






  const formats = [
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'header','list', 'script',  'indent', 'direction','size','header','color','font','align','clean','background'
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
    [{ 'align': [] }],      ]
  }
  return (

    <>
    <div id="editor" className='w-1'>
      <ReactQuill theme='snow' modules={modules}
        formats={formats} onChange={handleChange} value={editorData}  preserveWhitespace={true}/></div>
    </> 
  )
}
