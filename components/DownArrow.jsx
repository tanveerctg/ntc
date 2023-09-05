import { Image, } from '@chakra-ui/react'



const DownArrow = ({ link, offset, onClick }) => {



    return (
        <Image
            onClick={onClick}
            src='./images/hero/downarrow.svg'
            alt="Down Arrow"
            width={{ base: '30px', lg: '40px', xl: '40px' }}
            mx='auto'
            mt={{ base: '8', sm: '4', md: '4' }}
        // sizes={{ base: 'sm', md: 'xs' }}
        />
    )

}
export default DownArrow
