// REFACTOR TO USE SANITY 3

"use client"

import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, HStack, Skeleton } from '@chakra-ui/react';
import sanityClient from '@sanity/client';
// import { createClient, groq } from "next-sanity"

import clientConfig from "../sanity/config/client-config"
import Video from "./Video"


const client = sanityClient({
    projectId: 'y9e6hyu0',
    dataset: 'production',
    apiVersion: "2023-04-25",
    useCdn: true, // Use the Sanity CDN to reduce latency
});

function AllVideos({ category, subcategory }) {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const filteredCategory = category == "commercials" ? "commercial" : category

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await client.fetch(`*[_type == "youtube"]
            {
                    _id,
                    _createdAt,
                    videoName,
                    videoURL,
                    category,
                    subCategory,
                }`);
                setData(response);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);



    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleModalClose = () => {
        setSelectedItem(null);
    };


    return (

        <Box px='5' py='5'>
            <SimpleGrid minChildWidth={{ base: "300px", base: "250px", md: "300px" }} spacing="10" minH="full" px={5}>

                {data.length ?

                    // USE LINKBOX AND LINK OVERLAY
                    (data.map((video) => (
                        <Box
                            key={video._id}
                            onClick={() => handleItemClick(video)}>
                            <Video
                                name={video.videoName}
                                url={video.videoURL}
                                category={video.category}
                                subcategory={video.subCategory}

                            />
                        </Box>

                    ))
                    ) : (
                        <>
                            {/* DO A LOOP HERE */}
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />
                        </>
                    )

                }
                {selectedItem && (
                    <Modal isOpen={true} onClose={handleModalClose}>
                        <ModalOverlay />
                        <ModalContent borderRadius='xl'
                        >
                            <ModalHeader
                                bgColor='brand.purple.700'
                                borderTopRadius='xl'
                                fontSize='lg'
                                color="white"
                            >
                                {selectedItem.videoName.length < 40 ? selectedItem.videoName : `${selectedItem.videoName.substring(0, 40)}...`}
                            </ModalHeader>
                            <ModalCloseButton color='brand.purple.100' bgColor={'brand.purple.900'} size='sm' />
                            <ModalBody
                                as='iframe'
                                src={`https://www.youtube.com/embed/${selectedItem.videoURL.split('=')[1]}?controls=0`}
                                width='100%'
                                controls='0'
                                sx={{
                                    aspectRatio: '16/9', backgroundColor: 'gray.700'
                                }}
                                p={0}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen; modestbranding;"
                            >
                            </ModalBody>
                            <ModalFooter>
                                <HStack justify={"space-evenly"}>
                                    <Text color='brand.purple.900'>
                                        {selectedItem.category == "short" ? "Short Film" : selectedItem.category}
                                    </Text>
                                    <Button
                                        mr={3}
                                        size='xs'
                                        onClick={handleModalClose}
                                        bgColor='brand.purple.900'
                                        color="white"
                                    >
                                        Close
                                    </Button>
                                </HStack>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                )}

            </SimpleGrid>
        </Box >

    );
}

export default AllVideos;

