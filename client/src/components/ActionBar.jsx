import React from "react";
import { IoMdCloudDownload } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import logo from '../assets/logo.png';

var width = window.matchMedia("(max-width:600px)");
export default function Navbar({ saveDocument, downloadDocument }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex justify-between p-3 pt-4 gap-2 font-work-sans items-center ">
        <div className="flex ">
          <Link>
            <Image
              src={logo}
              height={"100px"}
              width={"40px"}
              className="ml-2"
            />
          </Link>
        </div>
        <div className="flex gap-1">
        {
          width.matches ? <></>: <>
          <Button color="primary" size="md" onPress={onOpen}>
          <FaUsers /> Multi User
          </Button>
          <Button color="primary" size="md" onPress={downloadDocument}>
            <IoMdCloudDownload /> Download
          </Button>
          {/* <Button color="primary" size="md" onPress={onOpen}>
            <FaRegShareSquare /> Share
        </Button>*/ }
          </> 
        }
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
            >
              Open Menu
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" className="font-work-sans">
            <DropdownItem key="new" onPress={saveDocument}>Save to Cloud</DropdownItem>
            <DropdownItem key="copy" onPress={downloadDocument}>Download as Docx</DropdownItem>
            <DropdownItem key="edit" onPress={onOpen}>Share</DropdownItem>
            {/* <DropdownItem key="delete" className="text-danger" color="danger">
              Delete file
            </DropdownItem> */}
          </DropdownMenu>
        </Dropdown> 
       
       
          
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="font-work-sans">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {" "}
                Collaborative Editing
              </ModalHeader>
              <ModalBody>
                <p className="mb-1">
                  <strong>For collaborative editing,</strong> share this link
                  with the other person and anyone with the link will be able to
                  make changes and save the document.
                </p>
                <code>{window.location.href}</code>
                <p>
                  If you want to share a simple <strong>docx file</strong>, simply click on the
                  download button and a Microsoft Word file will be exported to
                  your machine.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" size="md" onPress={downloadDocument}>
                  <IoMdCloudDownload /> Download
                </Button>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
