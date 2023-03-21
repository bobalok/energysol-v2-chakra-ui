"use strict";
import {
  Box,
  Flex,
  Text,
  Container,
  Center,
  AbsoluteCenter,
} from "@chakra-ui/react";

import useEmblaCarousel from "embla-carousel-react";
export default function Hero() {
  return (
    <Box width='100%' minHeight='90vh' bg='red.200'>
      <Center height='full'>
        <Text as='h1'>The Hero Section</Text>
      </Center>
    </Box>
  );
}
