// REFACTOR TO USE SANITY 3

"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Box, chakra, Flex, Center, SimpleGrid, Spinner, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, HStack, Skeleton } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import sanityClient from '@sanity/client';

import clientConfig from "../sanity/config/client-config"
import Video from "./Video"


const client = sanityClient({
    projectId: 'y9e6hyu0',
    dataset: 'production',
    apiVersion: "2023-04-25",
    useCdn: true, // Use the Sanity CDN to reduce latency
});

function NewVideos({ category, subcategory }) {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const filteredCategory = category == "commercials" ? "commercial" : category
    const [isLoading, setIsLoading] = useState(true);
    const [isYouTubeReady, setIsYouTubeReady] = useState(false); // YouTube video readiness state




    useEffect(() => {
        async function fetchData() {
            try {
                const response = await client.fetch(`*[_type == "youtube" && category ==$filteredCategory 
            ]{
                    _id,
                    _createdAt,
                    videoName,
                    videoURL,
                    category,
                    subCategory,
                }`, { filteredCategory });
                // }`, { filteredCategory, subcategory });
                setData(response);
                setIsLoading(false); // Set loading state to false after data is fetched
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [filteredCategory, subcategory]);

    const filteredData = subcategory === 'all' ? data : data.filter((video) => video.subCategory === subcategory);


    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleModalClose = () => {
        setSelectedItem(null);
    };


    useEffect(() => {
        setIsLoading(true); // Set loading state to true when a new video is selected
        setIsYouTubeReady(false); // Set YouTube readiness state to false

        const timeoutId = setTimeout(() => {
            setIsYouTubeReady(true); // Set YouTube readiness state to true after a delay
        }, 2000); // Adjust the delay time as needed

        return () => clearTimeout(timeoutId); // Clear the timeout when the component unmounts
    }, [selectedItem]);



    return (
        <Box px='0' py='5'>
            <SimpleGrid minChildWidth={{ base: "300px", base: "250px", md: "300px" }} spacing="10" minH="full" px={0}>

                {/* {isLoading ? */}
                {filteredData.length ?

                    // USE LINKBOX AND LINK OVERLAY
                    (filteredData.map((video) => (
                        <AnimatePresence key={video._id}>
                            <Box
                                as={motion.div}
                                key={video._id}
                                onClick={() => handleItemClick(video)}
                                boxShadow='lg'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.75 }}
                            >
                                <Video
                                    name={video.videoName}
                                    url={video.videoURL}
                                    category={video.category}
                                    subcategory={video.subCategory}
                                />
                            </Box>
                        </AnimatePresence>

                    ))
                    ) : (
                        <>
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />
                            <Skeleton h={300} my={4} borderRadius='xl' />

                            {/* {Array(8).fill(null).map((_, i) => (
                                <Skeleton key={i} h={300} my={4} borderRadius='xl' />
                            ))} */}

                        </>
                    )

                }
                {selectedItem && (
                    <Modal
                        isOpen={true}
                        onClose={handleModalClose}
                    >
                        <ModalOverlay />
                        <ModalContent borderRadius='xl'>
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
                                    aspectRatio: '16/9', backgroundColor: 'brand.purple.600'
                                }}
                                p={0}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen; modestbranding;"
                                onLoad={() => setIsYouTubeReady(true)} // Set YouTube readiness state to true when the video is loaded
                            >

                                {/* Show loading image while YouTube video is not ready */}
                                {!isYouTubeReady &&
                                    <Center bgColor={'black'} width='100%' sx={{
                                        aspectRatio: '16/9'
                                    }}
                                        p={0} m={0}>
                                        <Spinner color='white' size={'xl'} />
                                    </Center>}
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

export default NewVideos;

