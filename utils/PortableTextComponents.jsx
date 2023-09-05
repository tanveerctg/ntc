import imageUrlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import { Heading, Box, Link } from '@chakra-ui/react'
import { UnorderedList, ListItem } from '@chakra-ui/layout'
// import Image from 'next/image';
// import config from '../sanity/config/client-config'


const builder = imageUrlBuilder({
    projectId: 'y9e6hyu0',
    dataset: 'production',

})

function urlFor(source) {
    return builder.image(source)
}

const SampleImageComponent = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value)
    return (
        <img
            src={urlFor()
                .image(value)
                .width(isInline ? 400 : 1200)
                .fit('max')
                .auto('format')
                .url()}
            alt={value.alt || ' '}
            loading="lazy"
            style={{
                // Display alongside text if image appears inside a block text span
                display: isInline ? 'inline-block' : 'block',

                // Avoid jumping around with aspect-ratio CSS property
                aspectRatio: width / height,

                paddingBottom: '30px'

            }}
        />
    )
}


const PortableTextComponents = {
    marks: {
        em: ({ children }) => <em >{children}</em>,
        strong: ({ children }) => <strong>{children}</strong>,
        link: ({ value, children }) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
                <Link
                    href={value?.href}
                    target={target}
                    _hover={{
                        bg: "brand.purple.600",
                        color: 'brand.purple.50'
                    }}
                    // bgGradient="linear(to bottom, transparent 62%, #fff87e 0)"
                    // bgColor='brand.purple.200'
                    bgPos="center"
                    // bgSize="100% 75%"
                    bgRepeat="no-repeat"

                >
                    {children}
                </Link >
            )
        },
    },
    list: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => {
            return (
                <UnorderedList
                    paddingLeft={{ base: '5px', md: "40px" }}
                    paddingBottom='20px'
                    fontSize={{
                        base: 'sm', md: 'md', lg: 'xl'
                    }}
                >
                    {children}
                </UnorderedList >

            )
        }
    },
    block: {
        h1: ({ children }) => {
            return (
                <Heading
                    as='h1'
                    fontSize={'3xl'}
                >
                    {children}
                </Heading>
            )
        },
        h2: ({ children }) => {
            return (
                <Heading
                    as='h2'
                    fontSize={'2xl'}
                >
                    {children}
                </Heading>
            )
        },
        normal: ({ children }) => {
            return (
                <Box
                    paddingBottom={'10px'}
                    fontSize={{
                        base: 'sm', md: 'md', lg: 'xl'
                    }}
                >
                    {children}
                </Box >
            )
        },
    },
    types: {
        image: SampleImageComponent
    }
}
export default PortableTextComponents