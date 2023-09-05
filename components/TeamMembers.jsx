import { Box, SimpleGrid, Heading } from "@chakra-ui/react"
import { teamdata } from "../assets/data.js"

import TeamMember from "./TeamMember"
import { signatureFont } from '../utils/fonts';


export default function TeamMembers() {
    console.log(`teamdata = `, teamdata)

    return (
        <>
            <Heading
                as='h2'
                fontSize={{ base: '3xl', md: '3xl' }}
                // px={6}
                pt={10}
                textTransform='uppercase'
                color='brand.purple.700'
            // style={signatureFont.style}
            // color='#D63C55'
            >
                Casting Team
            </Heading>
            <Box id='team' pt='5'>
                <SimpleGrid
                    minChildWidth={{ base: "300px", }}
                    spacing="10"
                    minW="full"
                    pb={5}
                // px={1}
                >
                    {teamdata.map((teamdata) =>
                        <Box key={teamdata.id}>
                            <TeamMember
                                name={teamdata.name}
                                role={teamdata.role}
                                description={teamdata.description}
                                image={teamdata.image}
                                pronoun={teamdata.pronoun} />
                        </Box>
                    )}
                </SimpleGrid>
            </Box>
        </>
    )
}




{/* <Heading
as="h1"
fontSize='3xl'
textTransform='uppercase'
color='brand.purple.700'
pb={4}
mx='10'
>
{page.pageName}
</Heading> */}