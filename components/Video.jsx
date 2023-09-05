import {
    Badge,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    // Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Image from 'next/image';

import { catsubcat } from "../sanity/schemas/youtube-schema";


export default function Video({ name, url, category, subcategory }) {
    const youTubeImage = `https://img.youtube.com/vi/${url.split('=')[1]}/mqdefault.jpg`
    const youTubeImageAlt = `${name} - Thumbnail - Nicci Topping Casting`


    // const SubCategory = catsubcat.filter(obj => {
    //     return obj.subcat === subcategory;
    // });

    console.log(`subcategory = `, subcategory)
    // console.log(`SubCategory = `, SubCategory)

    return (

        <Card
            // as="card"
            direction={'column'}
            overflow='hidden'
            variant='elevated'
            // width={{base:'100%',lg:'50%', xl:'25%'}}
            width='100%'
            borderRadius='xl'
            p={0}
        >
            <CardHeader bgColor='brand.purple.700' h={12} py={2}>
                <Heading
                    fontSize='xs'
                    maxHeight='40px'
                    py={2}
                    // pt= {0} 
                    color="white"
                    height='100%'
                    // noOfLines={1} 
                    isTruncated
                >
                    {name}
                </Heading>
            </CardHeader>
            <CardBody pt={0} pb={1} px={0}>
                {/* <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}
                    src={youTubeImage}
                    alt={youTubeImageAlt}
                    width='100%'
                /> */}
                <Image
                    src={youTubeImage}
                    alt={youTubeImageAlt}
                    width="750"
                    height="750"
                    placeholder="blur"
                    // blurDataURL='../assets/alchemy-icon.svg'
                    blurDataURL='./images/NTCLogo.svg'
                    sizes="(max-width: 768px) 100vw, 100vw)"
                />
            </CardBody>
            <CardFooter py={1} bgColor="brand.purple.50">
                <Text
                    py='2'
                    whiteSpace='pre-line'
                    fontSize={'xs'}
                    fontWeight='semibold'
                    casing='capitalize'
                    color='brand.purple.900'

                >
                    {/* {category == "short" ? "short Film" : category} */}
                    {subcategory}
                </Text>
            </CardFooter>
        </Card>

    );
}

