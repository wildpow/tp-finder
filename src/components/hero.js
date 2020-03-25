import React from "react"
import { Heading, Box, Flex, Button, Text } from "@chakra-ui/core"
import tpHero from "../images/woman-in-pink-long-sleeve-hoodie-carrying-tissue-rolls-3962433.jpg"
const Hero = () => {
  return (
    <Box
      as="article"
      // bgImage={`url(${tpHero})`}
      // bgPos="center"
      bgRepeat="no-repeat"
      h="90vh"
      background={`linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${tpHero})`}
      bgSize="cover"
    >
      <Box
        maxW="32rem"
        // flexDirection="column"
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        {/* <Heading as="h1" size="2xl">
          Toilet Paper Finder
        </Heading>
        <p>
          Stop using kleenex on your bum! Search the inventory of hundreds of
          local stores in your area
        </p>
        <Button>FIND TP NOW</Button> */}
        <Heading mb={4} as="h1" size="2xl">
          Toilet Paper Finder
        </Heading>
        <Text fontSize="xl">
          Using kleenex on your bum? Top living like a savege and search the
          inventory of hundreds of local stores in your area to find toilet
          paper today.
        </Text>
        <Button size="lg" variantColor="green" mt="24px">
          Search Now
        </Button>
      </Box>
    </Box>
  )
}

export default Hero
