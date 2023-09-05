"use client"
import {
    Box, SimpleGrid, Button, Heading, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react"
import { getPages } from "../sanity/sanity-utils"



export default async function WebPages() {
    const returnedPages = await getPages()
    return (
        <Box>
            <Box px='5' py='5'>
                <SimpleGrid minChildWidth={{ base: "300px" }} spacing="10" minH="full" px={5}>
                    {returnedPages.map((page) => (
                        <Box key={page._id} >
                            {page.pageName}
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
            <BasicUsage2 />

        </Box>
    )

}


function BasicUsage2() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose} zIndex={100}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Stuff
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
