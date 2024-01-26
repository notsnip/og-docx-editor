import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/Editor.style.css";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import ActionBar from "../components/ActionBar";
import { API_URL } from "../utils/constants";
import postRequest from "../utils/postRequest";

const server = import.meta.env.VITE_SERVER || "http://localhost:5000";
const webSocket = io(API_URL);

export default function TextEditor() {
  const { id } = useParams();
  const [editorData, setEditorData] = useState("");

  function handleChange(data) {
    webSocket.emit("send-editorData", data, id);
    setEditorData(data)
  }

  function updateEditorData(data) {
    setEditorData(data);
  }

  function saveDocumentToCloud() {
    const postData = {
      content: editorData,
    };
    postRequest(`${API_URL}/docs`, postData);
    console.log("Saving Document...");
  }

  useEffect(() => {
    webSocket.emit("join-document", id);
    webSocket.on("broadcast-editorData", (data) => {
      setEditorData(data);
    });
  }, []);

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "image",
    "header",
    "list",
    "script",
    "indent",
    "direction",
    "size",
    "header",
    "color",
    "font",
    "align",
    "clean",
    "background",
  ];
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block", "image"],

      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],

      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }],
      [{ align: [] }],
    ],
  };
  return (
    <>
      <ActionBar saveDocument={saveDocumentToCloud} />
      <div id="editor" className="w-1">
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          onChange={handleChange}
          value={editorData}
          preserveWhitespace={true}
        />
      </div>
    </>
  );
}
