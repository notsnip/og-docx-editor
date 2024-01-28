import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/Editor.style.css";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import ActionBar from "../components/ActionBar";
import API_URL  from "../utils/constants";
import postRequest from "../utils/postRequest";
import getRequest from "../utils/getRequest";

const webSocket = io(API_URL);

export default function TextEditor() {
  const { id } = useParams();
  const [editorData, setEditorData] = useState("");

  async function getDocumentData() {
    const req = await getRequest(`${API_URL}/docs/${id}`);
    setEditorData(req.data.content);
  }
  function handleChange(data) {
    webSocket.emit("send-editorData", data, id);
    setEditorData(data);
  }

  function saveDocumentToCloud() {
    const postData = {
      doc_id: id,
      content: editorData,
    };
    postRequest(`${API_URL}/docs`, postData);
    console.log("Saving Document...");
  }

  function downloadDoc(element, filename = "") {
    var preHtml =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml + editorData + postHtml;

    var blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });

    // Specify link url
    var url =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

    // Specify file name
    filename = filename ? filename + ".doc" : `${id}.doc`;

    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // Create a link to the file
      downloadLink.href = url;

      // Setting the file name
      downloadLink.download = filename;

      //triggering the function
      downloadLink.click();
    }

    document.body.removeChild(downloadLink);
  }
  useEffect(() => {
    webSocket.emit("join-document", id);
    webSocket.on("broadcast-editorData", (data) => {
      setEditorData(data);
    });

    getDocumentData();
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
      <ActionBar
        saveDocument={saveDocumentToCloud}
        downloadDocument={downloadDoc}
      />
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
