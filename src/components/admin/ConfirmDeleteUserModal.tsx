import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { deleteUserById } from "@/utils/helpers";
import { TfiTrash } from "react-icons/tfi";

const ConfirmDeleteUserModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Tooltip content="Delete User" color="danger">
        <Button
          isIconOnly
          className="text-lg text-danger cursor-pointer active:opacity-50"
          onPress={onOpen}
        >
          <TfiTrash />
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Confirm Delete User!</ModalHeader>
              <ModalBody>
                <p>
                  Are you sure you want to{" "}
                  <span className="text-red-700">Delete</span> this User?
                </p>
                <p>⚠ This action is irreversible ⚠ </p>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose} className="" >Cancel</Button>
                <Button color="danger">Confirm</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConfirmDeleteUserModal;
