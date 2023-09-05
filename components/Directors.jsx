import {
    Box,
    Heading,
    SimpleGrid,
    HStack,
    Text,
    List,
    ListItem,
    ListIcon,
    UnorderedList,
} from "@chakra-ui/layout"

import { ArrowForwardIcon } from '@chakra-ui/icons'


const DIRECTORS = ["Gus Van Sant",
    "Keith McCarthy",
    "Jacques Salmon",
    "Peter Lydon",
    "Lisa Gunning",
    "Shane Meadows",
    "Michael Cumming",
    "Rob Chiu",
    "Nick Wild",
    "Thomas James",
    "Odilon Rocha",
    "Kim Gehring",
    "Betsan Morris Evan",
    "Kavi Raz",
    "Paul Tanter",
    "Ryan Bonder",
    "Daniel Wolfe",
    "Tom King",
    "Peter Cattaneo",
    "Tony Kaye",
    "Paul Hunter",
    "Chris Morris",
    "Yousaf Ali Khan",
    "Matt Winn",
    "Julian Kronfli",
    "Phil Taylor",
    "Tony Durston",
    "Emma Farrell",
    "Mick Davies",
    "Martin Brieley",
    "Dahlan Masselle",
    "Ian Single",
    "Phil Kerr",
    "Bluey",
    "Steve Wright",
    "Richard Laxton",
    "Pat Holden",
    "Matt Carter",
    "Steve Bendelack",
    "Mark Brozel",
    "Michael Baldwin",
    "Michael Winterbottom",
    "Darren Bolton"
]

export default function Directors({ sectionRef }) {
    return (
        <Box
            ref={sectionRef}
            id='directors'
            pb={10}
            // pt={{ base: '120px', md: "40px" }}
            position="relative"
            scrollSnapAlign="start"

        // borderColor='black'
        // borderStyle='solid'
        // borderWidth='2px'
        >
            <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                textTransform='uppercase'
                color='brand.purple.700'
                pb={2}
            >
                Director List
            </Heading>
            <Text pb={1} fontSize={{ base: "sm", md: "lg" }}> We are proud to work with some of the finest directing talent in the industry from Oscar winners to cutting edge visionaries.</Text>
            <Text pb={1} fontSize={{ base: "sm", md: "lg" }}>But we are not just about working at the top end of our business we also pride ourselves on working with great talent on the rise.</Text>
            <Text pb={6} fontSize={{ base: "sm", md: "lg" }}>So wherever you are Steven Spielberg or fresh out of film school drop us a line to see if we can help you &ldquo; flesh out &rdquo; what&apos;s in your head for your feature film, TV series, game or commercial.</Text>
            <List>
                <ListItem >
                    <SimpleGrid minChildWidth={{ base: "250px" }} spacing="2" minH="full">
                        {DIRECTORS.map((director, index) => (
                            <HStack key={index}>
                                <ListIcon as={ArrowForwardIcon} color='green.500' mr='0px' />
                                <Text fontSize={{ base: 'sm', md: 'md' }} key={index}>
                                    {director}
                                </Text>
                            </HStack>
                        ))}
                    </SimpleGrid>
                </ListItem>
            </List>
        </Box >
    )
}