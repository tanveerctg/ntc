import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from "@chakra-ui/react";


export default function ModalVideo(props) {
    const { isOpen, onClose } = props;

    console.log(onOpen)
    const handleSubmit = () => {
        formRef.current.triggerSubmit();
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Header</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Video in here
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" variant="ghost" mr={3} onClick={onClose}>
                        Button
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}