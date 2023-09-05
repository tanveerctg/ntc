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

import Image from 'next/image'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


export default function TeamMember(props) {
    const { name, role, description, image, pronoun } = props
    const altAttribute = `${name} | Nicci Topping Casting Team`
    return (

        <Card
            // as="flex"
            direction={{ base: 'column' }}
            overflow='hidden'
            variant='outline'
            // width={{base:'100%',lg:'50%', xl:'25%'}}
            width='100%'
            minH='full'
            p={0}
            boxShadow='lg'
            borderRadius='xl'
        >
            <Image
                style={{
                    objectFit: 'cover',
                    // maxHeight: '300px',
                    minWidth: '300px',
                    // maxWidth: { base: '100%', sm: '100%', md: '150px', lg: '100%' }
                }}
                src={image}
                alt={altAttribute}
                // width='100%'
                height={600}
                width={400}
            />
            <Stack>
                <CardBody>
                    <Heading textTransform='uppercase' size='md'>{name}</Heading>
                    <Heading size='sm' color={'gray'}>{role}</Heading>
                    <Text>{pronoun}</Text>
                    {/* <Text py='2' whiteSpace='pre-line' fontSize={'xs'} >
                        {description}
                    </Text> */}
                </CardBody>
            </Stack>
        </Card>

    );
}