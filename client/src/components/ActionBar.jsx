import React from "react";
import { IoMdCloudDownload } from "react-icons/io";
import { FaCloudflare } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function Navbar({ saveDocument, downloadDocument }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex justify-end p-3 pt-4 gap-2 font-work-sans">
        <Button color="primary" size="md" onPress={saveDocument}>
          <FaCloudflare /> Save
        </Button>
        <Button color="primary" size="md" onPress={downloadDocument}>
          <IoMdCloudDownload /> Download
        </Button>
        <Button color="primary" size="md" onPress={onOpen}>
          <FaRegShareSquare /> Share
        </Button>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="font-work-sans">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {" "}
                Share Document
              </ModalHeader>
              <ModalBody>
                <p className="mb-1">
                  <strong>For collaborative editing,</strong> share this link
                  with the other person and anyone with the link will be able to make changes and
                    save the document.

                </p>
                  <code>{window.location.href}</code>
                <p>
                  To share a <strong>docx file</strong>, simply click on the download button and
                  a Microsoft Word file will be exported to your machine.
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
