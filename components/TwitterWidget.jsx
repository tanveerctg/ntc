import { Box, Text, Heading, Link } from '@chakra-ui/react'
import { Timeline } from 'react-twitter-widgets'


export default function TwitterWidget() {
    return (
        <Box
            color="brand.purple.50"
            minWidth={{ base: '300' }}
            maxWidth={{ base: '33%' }}
            pt={{ base: '50px', sm: '0px' }}
        >
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'NicciTopping'
                }}
                options={{
                    height: '500'
                }}
            />
        </Box >
    )
};

