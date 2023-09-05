import { Box, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid } from '@chakra-ui/react'


const TESTIMONIALS = [
    {
        person: `Pat Holden | Director`,
        testimonial: "After working with Nicci on two feature films and over a dozen ads, I wouldn't work with anyone else. She's the most hard-working, inspiring, knowledgeable and shrewd casting director out there -- and she does it all with a smile.",
    },
    {
        person:
            `Johanna Enäsuo | Producer
            Peacemaker TV Series`,
        testimonial: "Nicci played a crucial part in the realisation of our drama series. She found us multiple talented actors from several different countries. I can highly recommend Nicci to any film production.",
    },
    {
        person:
            `Dawn Laren | Producer
            Moxie Pictures`,
        testimonial: "Nicci found us some incredible cast across three short films we were shooting back-to-back.  The plethora of talent Nicci introduced us to was amazing.  One of the films has since earned her a well deserved CDA award.",
    },
    {
        person:
            `Eileen Garside | Producer`,
        testimonial: "Nicci is highly professional and hugely creative in her casting approach. She always pulls it out the bag with new faces and brilliant performers and she is a joy to work with.",
    },
    {
        person:
            `Michelle Stein | Producer
            Escape Films`,
        testimonial: "Nicci found us some incredible cast across three short films we were shooting back-to-back.  The plethora of talent Nicci introduced us to was amazing.  One of the films has since earned her a well deserved CDA award.",
    },
]


export default function Testimonials() {
    return (
        <Box
            id="testimonials"
            pb={10}
            pt={'20px'}
            scrollSnapAlign="start"

        >

            <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                textTransform='uppercase'
                color='brand.purple.700'
                pb={5}
            >
                Testimonials
            </Heading>

            <SimpleGrid
                minChildWidth={{ base: "275px", md: "400px" }}
                spacing="10"
            // minH="full"
            >
                {TESTIMONIALS.map((testimonial, index) => (
                    <Card
                        borderRadius='xl'
                        bg='brand.purple.100'
                        // height={{ base: '575px', md: '525px' }}
                        overflow={'hidden'}
                        key={index}
                    >
                        <CardHeader color='gray.600'>
                            <Box position={0} w='50px'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                            </Box>
                        </CardHeader>
                        <CardBody fontSize={{ base: 's', sm: 'lg' }} py={'1'}>
                            {testimonial.testimonial}
                        </CardBody>
                        <CardFooter color='brand.purple.900' fontWeight={800} whiteSpace='pre-line' >
                            {testimonial.person}
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </Box >
    )

}