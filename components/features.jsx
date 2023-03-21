"use strict";
import {
  Box,
  Center,
  Square,
  Text,
  Heading,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Button,
  VStack,
} from "@chakra-ui/react";

import { FaHandshake } from "react-icons/fa";

export default function Features() {
  return (
    <>
      <Box w='100%' p='64px' bg='gray.900' color='whiteAlpha.900'>
        <Center>
          <VStack>
            <Heading fontSize='4xl'>The fields we are best at</Heading>
            <Text w='xl' align='center' fontSize='xl'>
              Partnering with us will benefit your business in numerous ways,
              including increased efficiency, higher customer satisfaction, and
              improved profitability. Let’s grow together!
            </Text>
          </VStack>
        </Center>
        <Center>
          <SimpleGrid columns={[1, 2, 3]} gap='6' pt='1.25rem' w='6xl'>
            <Flex
              flexDirection='column'
              maxWidth='384px'
              borderRadius='lg'
              border='1px'
              borderColor={"gray.100"}
              py='2rem'
              px='1rem'
            >
              <FaHandshake size='40px' />
              <Heading as='h3' fontSize='large' fontWeight='bold'>
                Consultancy
              </Heading>
              <Text as='p' color='gray.300'>
                We excel at consultancy. Our team of experts offers customized
                solutions to complex business problems. We empower our clients
                with data-driven insights and proven strategies, enabling them
                to make informed decisions and achieve long-term success
              </Text>
            </Flex>
            <Flex
              flexDirection='column'
              maxWidth='384px'
              borderRadius='lg'
              border='1px'
              borderColor={"gray.100"}
              py='2rem'
              px='1rem'
            >
              <FaHandshake size='40px' />
              <Heading as='h3' fontSize='large' fontWeight='bold'>
                Consultancy
              </Heading>
              <Text as='p' color='gray.300'>
                We excel at consultancy. Our team of experts offers customized
                solutions to complex business problems. We empower our clients
                with data-driven insights and proven strategies, enabling them
                to make informed decisions and achieve long-term success
              </Text>
            </Flex>
            <Flex
              flexDirection='column'
              maxWidth='384px'
              borderRadius='lg'
              border='1px'
              borderColor={"gray.100"}
              py='2rem'
              px='1rem'
            >
              <FaHandshake size='40px' />
              <Heading as='h3' fontSize='large' fontWeight='bold'>
                Consultancy
              </Heading>
              <Text as='p' color='gray.300'>
                We excel at consultancy. Our team of experts offers customized
                solutions to complex business problems. We empower our clients
                with data-driven insights and proven strategies, enabling them
                to make informed decisions and achieve long-term success
              </Text>
            </Flex>
            <Flex
              flexDirection='column'
              maxWidth='384px'
              borderRadius='lg'
              border='1px'
              borderColor={"gray.100"}
              py='2rem'
              px='1rem'
            >
              <FaHandshake size='40px' />
              <Heading as='h3' fontSize='large' fontWeight='bold'>
                Consultancy
              </Heading>
              <Text as='p' color='gray.300'>
                We excel at consultancy. Our team of experts offers customized
                solutions to complex business problems. We empower our clients
                with data-driven insights and proven strategies, enabling them
                to make informed decisions and achieve long-term success
              </Text>
            </Flex>
            <Flex
              flexDirection='column'
              maxWidth='384px'
              borderRadius='lg'
              border='1px'
              borderColor={"gray.100"}
              py='2rem'
              px='1rem'
            >
              <FaHandshake size='40px' />
              <Heading as='h3' fontSize='large' fontWeight='bold'>
                Consultancy
              </Heading>
              <Text as='p' color='gray.300'>
                We excel at consultancy. Our team of experts offers customized
                solutions to complex business problems. We empower our clients
                with data-driven insights and proven strategies, enabling them
                to make informed decisions and achieve long-term success
              </Text>
            </Flex>
            <Flex
              flexDirection='column'
              maxWidth='384px'
              borderRadius='lg'
              border='1px'
              borderColor={"gray.100"}
              py='2rem'
              px='1rem'
            >
              <FaHandshake size='40px' />
              <Heading as='h3' fontSize='large' fontWeight='bold'>
                Consultancy
              </Heading>
              <Text as='p' color='gray.300'>
                We excel at consultancy. Our team of experts offers customized
                solutions to complex business problems. We empower our clients
                with data-driven insights and proven strategies, enabling them
                to make informed decisions and achieve long-term success
              </Text>
            </Flex>
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
}
