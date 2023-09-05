"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import { Box, Flex, Container, Heading } from "@chakra-ui/layout";
import { useBreakpoint } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import Image from "next/image";
import { SanityImage } from "sanity-image";
import { PortableText } from "@portabletext/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import { PageWrapper } from "../../page-wrapper.jsx";
import { getPage } from "../../../sanity/sanity-utils.js";
import NewVideos from "../../../components/NewVideos.jsx";
import AllVideos from "../../../components/AllVideos.jsx";
import PortableTextComponents from "../../../utils/PortableTextComponents.jsx";
import TeamMembers from "../../../components/TeamMembers.jsx";
import { catsubcat } from "../../../sanity/schemas/youtube-schema.js";
import { notFound } from "next/navigation";

function Page({ params }) {
  const router = useRouter();
  const [selectedSubCategory, setSubCategory] = useState("all");
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(false);

  const slug = params.slug;
  console.log({ slug });
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const pageData = await getPage(slug);
      console.log({ pageData, slug });
      if (!pageData) {
        //this is a random route which doiesnt exist
        return router.replace(`/${slug}/not-found`);
      }
      setPage(pageData);
      setLoading(false);
    }
    fetchData();
  }, [slug]);

  const results = catsubcat.filter((obj) => {
    return obj.catID === slug;
  });

  //logic for whether to render videos  and show subcat dropdowns
  let hasVideos = "";
  let hasSubCatSelector = "";

  if (page) {
    if (slug == "about") {
      hasVideos = <TeamMembers />;
      hasSubCatSelector = false;
    } else if (slug == "projects") {
      hasVideos = <AllVideos />;
      hasSubCatSelector = false;
    } else {
      hasVideos = (
        <NewVideos category={slug} subcategory={selectedSubCategory} />
      );
      hasSubCatSelector = true;
    }
  }

  const handleSubCategoryChange = (event) => {
    const selectedSubCategory = event.target.value;
    setSubCategory(selectedSubCategory === "all" ? "all" : selectedSubCategory);
  };

  const breakPoint = useBreakpoint();

  let offset = 0;
  if (breakPoint == "base" || breakPoint == "xs") {
    offset = 0;
  } else {
    offset = -150;
  }

  console.log(`breakPoint = `, breakPoint);
  if (loading) {
    return (
      <PageWrapper>
        <Box
          minHeight={"100vh"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Loading...
        </Box>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Box minHeight={"100vh"}>
        <Box
          h={{ base: "175px", md: "375px" }}
          position="relative"
          top={{ base: "8", md: "0" }}
        >
          {page && (
            <Image
              src={page.headerImageURL}
              alt={`${slug} Header Image Nicci Topping Casting`}
              priority
              // width={1920}
              // height={250}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          )}
        </Box>
        <Container maxW="8xl" px={{ base: "2", md: "10", lg: "12" }} py={8}>
          {page && (
            <Box mx={{ base: "5", sm: "10" }} mt={15}>
              <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "3xl" }}
                textTransform="uppercase"
                color="brand.purple.700"
                pb={4}
                // mx='10'
              >
                {page.pageName}
              </Heading>
              <Box
                pb={"30px"}
                // _first={{ marginTop: 100 }}
              >
                <PortableText
                  value={page.content}
                  components={PortableTextComponents}
                />
              </Box>
              <Box width={{ base: "30%", md: "15%", lg: "10%" }}>
                {hasSubCatSelector && (
                  <Select
                    value={selectedSubCategory}
                    onChange={handleSubCategoryChange}
                  >
                    {results.map((dropdown) => (
                      <option key={dropdown.id} value={dropdown.subcat}>
                        {dropdown.title}
                      </option>
                    ))}
                  </Select>
                )}
              </Box>
              <Box
                id="vid"
                pb={"60px"}
                pt={"20px"}
                style={{ textWrap: "wrap" }}
              >
                {hasVideos}
              </Box>
            </Box>
          )}
        </Container>
      </Box>
    </PageWrapper>
  );
}

export default Page;
