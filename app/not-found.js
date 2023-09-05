"use client";
import Link from "next/link";
import { Box, Flex, Container, Heading } from "@chakra-ui/layout";

export default function NotFound({ children }) {
  return (
    <>
      View <Link href="/blog">all posts</Link>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}
        textTransform="uppercase"
        color="brand.purple.700"
        pb={4}
        // mx='10'
      >
        Not Found
      </Heading>
    </>
  );
}
