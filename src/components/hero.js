import React from "react"
import { Heading, Box, Flex, Button } from "@chakra-ui/core"
import tpHero from "../images/woman-in-mask-holding-toilet-paper-3962337.jpg"
const Hero = () => {
  return (
    <Box
      as="article"
      bgImage={`url(${tpHero})`}
      bgSize="cover"
      // bgPos="center"
      bgRepeat="no-repeat"
      h="90vh"
    >
      <Flex flexDirection="column">
        <Heading>TP Finder</Heading>
        <p>Search local inventory of hundreds of stores in your area</p>
        <Button>FIND TP NOW</Button>
      </Flex>
    </Box>
  )
}

export default Hero
