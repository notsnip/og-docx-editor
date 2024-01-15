import React from 'react';
import { useParams } from "react-router-dom";
import {Button} from "@nextui-org/react";
import { HiSave } from "react-icons/hi";

export default function Navbar() {
    
  const {id} = useParams()
  return (
    <>
    <div className='flex justify-end p-3 pt-7 gap-2 font-work-sans'>
    <Button color="primary" size='md'>
    <HiSave /> Save
    </Button>
    <Button color="primary" size='md'>
      Download
    </Button>
    <Button color="primary" size='md'>
      Share
    </Button>
    </div>
    </>
  )
}
