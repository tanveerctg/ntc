"use client";

import { ReactNode, useContext } from "react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useMediaQuery,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { getPages } from "../sanity/sanity-utils";

const NavLink = ({ children, to = "/", onClose, ...rest }) => (
  <Link
    // as={motion.div}
    px={2}
    py={1}
    rounded={"md"}
    href={to}
    onClick={onClose} // Call the onClose function when the link is clicked
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menuItems, setMenuItems] = useState([]);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const fetchMenuItems = async () => {
      const items = await getPages();
      console.log({ items });
      setMenuItems(items);
    };
    fetchMenuItems();
  }, []);

  // console.log(`value = `, value)

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width, height } = windowDimensions;

  let cellLandscapeNav = null;
  width > height && width < 960
    ? (cellLandscapeNav = true)
    : (cellLandscapeNav = false);

  const imageWrapperWidth = cellLandscapeNav
    ? { base: "12", sm: "8", md: "8" }
    : { base: "12", sm: "8", md: "20" };

  const mobileMenu = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const mobilelMenuListItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <Box
        bg={{ base: "brand.purple.600", md: "brand.purpleAlpha" }}
        as={motion.div}
        backdropFilter="auto"
        backdropBlur="3px"
        layout
        color="white"
        px={8}
        py={4}
        width="100%"
        position="fixed"
        zIndex={100}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          as={motion.flex}
          layout
        >
          <HStack spacing={8} width="100%" id="menu-wrapper">
            <a href="/">
              <Box
                width={imageWrapperWidth}
                // width={{ base: '12', sm: '8', md: '20' }}
              >
                <Image
                  src="./NTCLogo.svg"
                  height="100"
                  width="100"
                  priority
                  alt="Nicci Topping Casting Logo"
                />
              </Box>
            </a>
            <Flex
              justifyContent="flex-end"
              id="nav-wrapper"
              width="100%"
              px={20}
            >
              <HStack
                as={"nav"}
                spacing={8}
                display={{ base: "none", lg: "flex" }}
                justifyContent="flex-end"
                fontWeight="semibold"
                letterSpacing="0.5px"
              >
                {menuItems.map((link) => (
                  <motion.div
                    key={link._id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.75 }}
                  >
                    <NavLink
                      to={`/${link.slug}`}
                      // key={link._id}
                    >
                      {link.pageName}
                    </NavLink>
                  </motion.div>
                ))}
              </HStack>
            </Flex>
          </HStack>
          <IconButton
            size={"md"}
            icon={
              isOpen ? (
                <CloseIcon color="brand.purple.800" />
              ) : (
                <HamburgerIcon color="brand.purple.800" />
              )
            }
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box as={motion.div} layout pb={4} display={{ lg: "none" }}>
            <Stack
              as={motion.nav}
              spacing={4}
              textAlign={"end"}
              pt={6}
              fontWeight="semibold"
              letterSpacing="0.5px"
            >
              {menuItems.map((link) => (
                <NavLink
                  to={link.slug}
                  key={link._id}
                  fontWeight="bold"
                  letterSpacing="0.5px"
                  onClose={onClose} // Pass the onClose function to the NavLink component
                >
                  {link.pageName}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
