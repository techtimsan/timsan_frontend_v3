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
import AddAttendeeForm from "./AddAttendeeForm";

const AddAtteendeeModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="cursor-pointer active:opacity-50"
        onPress={onOpen}
      >
        Add Attendee
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Add New Conference Attendee</ModalHeader>
              <ModalBody>
                <AddAttendeeForm />
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Cancel</Button>
                <Button>Confirm</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddAtteendeeModal;
