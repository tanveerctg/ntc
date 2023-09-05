import { Box, Text, Heading, Link, Center, useBreakpoint, VStack, Flex } from '@chakra-ui/react'
import DownArrow from '../components/DownArrow'


const ShowReel = ({ sectionRef, scrollToRef, cellLandscape }) => {


    const PITCH = `We have been casting projects for over 20 years in the UK, Europe and USA.

    Commercials. Feature Films. TV. Stills. Street Casting
    
    It\’s our passion. It\’s our thing! `

    const breakPoint = useBreakpoint();
    let offset = 0
    if (breakPoint == 'base' || breakPoint == 'xs') {
        offset = 0
    } else {
        offset = -150
    }
    console.log(`breakPoint = `, breakPoint)

    let wrapperH
    cellLandscape ? wrapperH = '100vh' : wrapperH = '100vh'



    return (
        <Flex
            ref={sectionRef}
            h='100vh'
            w='100 % '
            flexDirection={'column'}
            // pt={{ base: '80px', xl: '100px', '3xl': '500px' }}
            justifyContent={{ base: 'center', '3xl': 'center' }}
            alignItems='center'

            // pt={'80px'}
            scrollSnapAlign="start"
            position="relative"

        // borderColor='black'
        // borderStyle='solid'
        // borderWidth='2px'

        >
            <Flex
                // my='auto'
                mx='auto'
                id='showreel'
                flexDirection={{ base: 'column' }}

            >
                {/* <Box> */}
                <Box
                    as='iframe'

                    src='https://player.vimeo.com/video/369889988?h=b20a15d1e4&amp;app_id=122963'
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    controls={0}
                    title="Nicci Topping Commercials Showreel"
                    w={{ base: '90%', sm: '60%', md: '80%', xl: '70%', '2xl': '80%', '3xl': '90%' }}
                    h={{ base: '90%', sm: '60%', md: '80%', xl: '70%', '2xl': '80%', '3xl': '90%' }}
                    mx='auto'
                    // objectFit='cover'
                    sx={{
                        aspectRatio: '16/9',
                    }}
                    mb={'8'}

                />

                {/* </Box> */}
                <Center >
                    <Text
                        as="h3"
                        lineHeight={1}
                        fontSize={{ base: 'md', base: 'sm', md: 'xl' }}
                        whiteSpace='pre-line'
                        textAlign='center'
                        fontWeight={'600'}
                        px={'4'}
                    >
                        {PITCH}
                    </Text>
                </Center >
                {/* <DownArrow link='directors' offset={offset} /> */}

                <DownArrow onClick={scrollToRef} />
            </Flex>

        </Flex >
    )
};

export default ShowReel



