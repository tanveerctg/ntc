import { signatureFont } from '../utils/fonts';
import {Container, Heading, Text, Box, Show} from '@chakra-ui/react'

export default function Main() {
  
  return (
     <>
     <Show breakpoint='(max-width: 768px)'>
          <Container backgroundColor={'#D63C55'} pt={6} color="white" px={0} mx={0} maxWidth={'4xl'}>
                <Text fontSize={'sm'}pb={8} px={4} align='center'>
                 Inspired by Oscar Wilde&lsquo;s <strong>The Picture of Dorian Grey </strong> INFLUENCED is a black comedy that explores the world of social media influencers and their obsession to be insta-famous and show the world they lead the perfect life...
                 ...whatever the cost!
                </Text>
            </Container>
    </Show>

    
     <Container as="main"  maxW={'8xl'} p={[6]} pt={6} id="main" zIndex={"1"}>
        
        <Heading 
          as="h1" 
          style={signatureFont.style}
          size={{base:'lg',lg:'xl'}}
          color='#D63C55'
        >
          Hello
        </Heading>
        <Box fontSize={{base:'xs',lg:'xl'}}>
        <Text pb={4} >
          Donec et lectus sapien. Proin sit amet pellentesque urna, vitae maximus turpis. Vivamus at quam sit amet lacus hendrerit lacinia eget ac tellus. Aliquam nibh lacus, dictum et pellentesque quis, posuere et ex. Aliquam vel enim id arcu ultrices imperdiet sit amet eu dui. Fusce dictum felis nec leo eleifend lobortis. Aliquam vitae sapien non orci pulvinar ullamcorper vitae at ante. Suspendisse in sapien vitae orci volutpat malesuada vel sit amet dui. Donec mollis lectus sit amet sodales condimentum. Maecenas vitae odio risus. In sed cursus leo. 
        </Text>
        <Text pb={4}>Pellentesque gravida, enim congue consectetur sollicitudin, sapien nisi iaculis metus, quis sodales justo ex sit amet velit. Sed eros sapien, accumsan et porta vel, dignissim eget mi. Etiam pretium convallis libero non hendrerit. Praesent ut mollis diam.</Text>
        <Text pb={4}>Pellentesque gravida, enim congue consectetur sollicitudin, sapien nisi iaculis metus, quis sodales justo ex sit amet velit. Sed eros sapien, accumsan et porta vel, dignissim eget mi. Etiam pretium convallis libero non hendrerit. Praesent ut mollis diam.</Text>
        <Text pb={4}>Pellentesque gravida, enim congue consectetur sollicitudin, sapien nisi iaculis metus, quis sodales justo ex sit amet velit. Sed eros sapien, accumsan et porta vel, dignissim eget mi. Etiam pretium convallis libero non hendrerit. Praesent ut mollis diam.</Text>
        <Text pb={4}>Pellentesque gravida, enim congue consectetur sollicitudin, sapien nisi iaculis metus, quis sodales justo ex sit amet velit. Sed eros sapien, accumsan et porta vel, dignissim eget mi. Etiam pretium convallis libero non hendrerit. Praesent ut mollis diam.</Text>
        <Text pb={4}>Pellentesque gravida, enim congue consectetur sollicitudin, sapien nisi iaculis metus, quis sodales justo ex sit amet velit. Sed eros sapien, accumsan et porta vel, dignissim eget mi. Etiam pretium convallis libero non hendrerit. Praesent ut mollis diam.</Text>
        </Box>
     </Container>
     </>
    )
  }