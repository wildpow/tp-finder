import React from "react"
import { Flex, Box, Avatar, Stack, Text, Heading } from "@chakra-ui/core"
import face1 from "../images/faces/IMG_2827-1024x683.jpg"
import face2 from "../images/faces/IMG_2820-1024x683.jpg"
import face3 from "../images/faces/women-s-white-and-black-button-up-collared-shirt-774909.jpg"

const reviewData = [
  {
    img: face1,
    name: "Susan",
    from: "Enumclaw, WA",
    quote: "Can't believe this service is free, thank you.",
  },
  {
    img: face2,
    name: "Mike",
    from: "Sunnydale, CA",
    quote: "We were starting to use kitchen towls before we found TP finder.",
  },
  {
    img: face3,
    name: "Elizabeth",
    from: "Hoboken, NJ",
    quote: "Tried five store before using TP finder. Now we are stocked up.",
  },
]
const Reviews = () => {
  return (
    <Flex
      maxH="100vh"
      justifyContent="space-evenly
    "
    >
      {reviewData.map(review => (
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" p={8}>
          <Stack spacing={2}>
            <Avatar name={review.name} src={review.img} size="2xl" />
            <Heading>{review.name}</Heading>
            <Text>{`"${review.quote}"`}</Text>
            <Text>{review.from}</Text>
          </Stack>
        </Box>
      ))}
    </Flex>
  )
}

export default Reviews
