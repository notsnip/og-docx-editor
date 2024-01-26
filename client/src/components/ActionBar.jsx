import React from 'react';
import { useParams } from "react-router-dom";
import {Button} from "@nextui-org/react";
import { IoMdCloudDownload } from "react-icons/io";
import { FaCloudflare } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

export default function Navbar(editorData) {
    function saveDocumentToCloud(){
      
    }
  return (
    <>
    <div className='flex justify-end p-3 pt-7 gap-2 font-work-sans'>
    <Button color="primary" size='md'>
    <FaCloudflare /> Save
    </Button>
    <Button color="primary" size='md'>
    <IoMdCloudDownload /> Download
    </Button>
    <Button color="primary" size='md'>
    <FaRegShareSquare /> Share
    </Button>
    </div>
    </>
  )
}


