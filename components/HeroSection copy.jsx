import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flex, Box, VStack, Image, } from '@chakra-ui/react'
// import { Link } from 'react-scroll'

import DownArrow from '../components/DownArrow'

const slides = [
  {
    id: 0,
    image: <Image src='/images/hero/casting.svg' alt="Casting Is Our Thing" />
  },
  {
    id: 1,
    image: <Image src='/images/hero/commercials.svg' alt="Commercials Casting Is Our Thing" />
  },
  {
    id: 2,
    image: <Image src='/images/hero/film.svg' alt="Film Casting Is Our Thing" />
  },
  {
    id: 3,
    image: <Image src='/images/hero/televison.svg' alt="TV Casting Is Our Thing" />
  },
  {
    id: 4,
    image: <Image src='/images/hero/games.svg' alt="Games Casting Is Our Thing" />
  },
];

const variants = {
  hidden: {
    opacity: 0,
    // x: -90,
    rotateX: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateX: 360,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    x: -90,
    rotateX: 0,
  },
};


const HeroSection = ({ scrollToRef, cellLandscape }) => {
  const [index, set] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => set(state => (state + 1) % 5), 3200);
    return () => clearInterval(interval);
  }, []);

  const heroSectionWidth = cellLandscape ? { base: '100%', sm: '80%', md: '70%' } : { base: '100%', sm: '80%', md: '100%' }
  const heroSectionPT = cellLandscape ? { sm: '100' } : { base: '0' }



  return (
    <div>
      <Flex
        id='hero-section'
        w={heroSectionWidth}
        height={'100vh'}
        mx='auto'
        px={{ base: '0px', lg: '60px', xl: '180px' }}
        pt={heroSectionPT}

        flexDirection={'column'}
        justifyContent='center'
        alignItems='center'

        scrollSnapAlign="center"
        position="relative"

      // borderColor='black'
      // borderStyle='solid'
      // borderWidth='2px'
      >

        <Box
          mb={7}
          width='100%'
        // borderColor='black'
        // borderStyle='solid'
        // borderWidth='2px'
        >
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={slides[index].id}

          >
            {slides[index].image}
          </motion.div>
        </Box>
        <Image
          src='./images/hero/IsOurThing.svg'
          alt="Casting Is Our Thing"
          position='relative'
          mx='auto'
        />

        <DownArrow onClick={scrollToRef} />

      </Flex >
    </div >
  );
};


export default HeroSection;
