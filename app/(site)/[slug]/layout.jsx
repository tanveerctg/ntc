"use client";

import { ChakraProvider, Container, Box, color } from "@chakra-ui/react";

// import theme from "../(site)/theme";
// import NavBar from "../../components/Navbar.js";
// import Footer from "../../components/Footer";

// import { NextSeo } from "next-seo";

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <head>
    //     <title>Nicci Topping - Casting Director CDA | CSA</title>
    //     <meta
    //       name="description"
    //       content="Nicci Topping is an award-winning casting director based in the UK, known for her work on TV, film, games and theatre productions. Contact her for your next casting project."
    //     />
    //     <meta
    //       name="keywords"
    //       content="casting, casting director, Nicci Topping, UK, TV, film, theatre, games"
    //     />
    //     <meta property="og:title" content="Nicci Topping - Casting Director" />
    //     <link
    //       rel="icon"
    //       type="image/png"
    //       href="https://example.com/images/favicon.png"
    //     />
    //     {/* <link rel="stylesheet" href="https://example.com/css/styles.css" /> */}

    //     {/* <-- OpenGraph tags --> */}
    //     <meta
    //       property="og:description"
    //       content="Nicci Topping is an award-winning casting director based in the UK, known for her work on TV, film, and theatre productions. Contact her for your next casting project."
    //     />
    //     <meta property="og:type" content="website" />
    //     <meta property="og:url" content="https://www.niccitopping.com/" />
    //     <meta
    //       property="og:image"
    //       content="https://www.niccitopping.com/images/niccitopping.jpg"
    //     />
    //     <meta property="og:url" content="https://www.niccitopping.com/" />

    //     {/* <-- Twitter Card tags --> */}
    //     <meta name="twitter:card" content="summary_large_image" />
    //     <meta name="twitter:title" content="Nicci Topping - Casting Director" />
    //     <meta
    //       name="twitter:description"
    //       content="Nicci Topping is an award-winning casting director based in the UK, known for her work on TV, film, and theatre productions. Contact her for your next casting project."
    //     />
    //     <meta
    //       name="twitter:image"
    //       content="https://www.niccitopping.com/images/niccitopping.jpg"
    //     />

    //     {/* <-- Other tags --> */}
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <meta charSet="UTF-8" />
    //   </head>
    //   <body>
    //     <ChakraProvider theme={theme}>
    //       <NavBar />
    //       {/* <Container maxW='8xl' px={{ base: "8", sm: "20", md: "10", lg: "12" }} > */}
    //       <Box
    //       // px={{ base: "8", sm: "20", md: "10", lg: "12" }}
    //       >
    //         {children}
    //       </Box>
    //       {/* </Container> */}
    //       <Footer />
    //     </ChakraProvider>
    //   </body>
    // </html>
    <Box
    // px={{ base: "8", sm: "20", md: "10", lg: "12" }}
    >
      {children}
    </Box>
  );
}
