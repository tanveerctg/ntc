import { ButtonGroup, Box, Container, IconButton, Stack, Text, Heading, Link } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import Obfuscate from 'react-obfuscate'
import Image from 'next/image'

import { NTCLogo } from './NTCLogo'
import TwitterWidget from './TwitterWidget'

const NorthernAddress = `Huddersfield Media Centre, 
  7 Northumberland St,
  Huddersfield,
  HD1 1RL
  `
const NorthernPhone = <strong>Phone: 01484 511988</strong>

const LondonAddress = `49 Carnaby Street,
2nd Floor,
London
W1F 9PY
`
const LondonPhone = <strong>Phone: 0207 112 8156</strong>

const NTCDeets = `Nicci Topping. 
All rights reserved.`

export default function Footer() {
  return (

    <Box as="footer" bg={'gray.800'} bottom={0}>
      <Container
        scrollSnapAlign="start"
        maxW='8xl'
        pt={{ base: '10' }}
        px={{ base: "8", sm: "12", md: "10", lg: "12" }}
      // px={{ base: '10', md: '24' }}
      >
        {/* <Stack > */}
        <Box
          pb={'8'}
          width={{ base: '16', sm: '20', md: '24' }}
        >
          <Image
            src='./NTCLogo.svg'
            height='120'
            width='120'
            alt='Nicci Topping Casting Logo'
          />
        </Box>
        <Stack justify="space-between" direction={{ base: "column", md: "row" }} >
          <Stack direction="column" as="office" >
            <Heading as="h3" fontSize={'sm'} color='gold' pb='0' >
              Main Office
            </Heading>
            <Text color='white' whiteSpace='pre-line' fontSize={'sm'} pb='4'>
              {NorthernAddress}
              {NorthernPhone}
            </Text>
            <Heading as="h3" fontSize={'sm'} color='gold' pb='0' >
              London Office
            </Heading>
            <Text color='white' whiteSpace='pre-line' fontSize={'sm'} pb='4' >
              {LondonAddress}
              {LondonPhone}
            </Text>
            <Heading as="h3" fontSize={'sm'} color='gold' pb='0' >
              Contact Us
            </Heading>
            <Text color='white' whiteSpace='pre-line' fontSize={'sm'} >
              {/* <Obfuscate
                email="nicci@niccitoppingcasting.com"
                headers={{
                  cc: 'nicci@niccitoppingcasting.com',
                  subject: 'Hello From The Web',
                }}
              /> */}
            </Text>
            <Stack direction="column" >
              <Stack direction="row" >
                <ButtonGroup color="brand.purple.700" >
                  <IconButton
                    as="a"
                    // href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#110;&#105;&#99;&#99;&#105;&#64;&#110;&#105;&#99;&#99;&#105;&#116;&#111;&#112;&#112;&#105;&#110;&#103;&#99;&#97;&#115;&#116;&#105;&#110;&#103;&#46;&#99;&#111;&#109;">&#69;&#109;&#97;&#105;&#108;"
                    aria-label="Email"
                    bgColor="brand.purple.50"
                    icon={<FaEnvelope fontSize="1.25rem" />}
                  />
                  <IconButton
                    as="a"
                    href="#"
                    aria-label="LinkedIn"
                    bgColor="brand.purple.50"
                    icon={<FaLinkedin fontSize="1.25rem" />}
                  />
                  <IconButton
                    as="a"
                    href="#"
                    aria-label="Twitter"
                    bgColor="brand.purple.50"
                    icon={<FaTwitter fontSize="1.25rem" />}
                  />
                </ButtonGroup>
              </Stack>
            </Stack>
          </Stack>
          <TwitterWidget />
        </Stack>
        <Text fontSize="xs" color="brand.purple.200" pb={10} pt={5} alignSelf={'center'} whiteSpace='pre-line'>
          &copy; {new Date().getFullYear()} {NTCDeets}
        </Text>
        {/* </Stack> */}
      </Container >
    </Box >
  )
}