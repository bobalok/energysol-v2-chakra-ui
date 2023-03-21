import {
  Box,
  SimpleGrid,
  Grid,
  GridItem,
  Container,
  Flex,
  Center,
  Text,
  Heading,
  VStack,
  HStack,
  Stack,
} from "@chakra-ui/react";

export default function Status() {
  return (
    <Box w='100%' p='64px'>
      <Center>
        <VStack w='4xl' color={"gray.600"}>
          <Heading fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
            Trusted by Businesses
          </Heading>
          <Text
            w={["xs", "lg", "3xl"]}
            align='center'
            fontSize={{ base: "sm", md: "lg", lg: "xl" }}
          >
            We are the most experienced and trusted company in Bangladesh. Our
            team consists of highly skilled professionals who have been working
            in the fields for many years. We have a good reputation in the
            industry.
          </Text>
        </VStack>
      </Center>
      <Center>
        <SimpleGrid
          columns={[1, 3, 3]}
          gap='4'
          align='center'
          pt='64px'
          w='6xl'
        >
          <Flex
            flexDirection='column'
            maxWidth='394px'
            borderRadius='lg'
            border='1px'
            borderColor={"gray.100"}
            py='2rem'
            px='1rem'
            bg='yellow.200'
          >
            <VStack>
              <Heading fontSize='3rem' fontWeight='extrabold'>
                08
              </Heading>
              <Text fontSize='1.25rem' fontWeight='medium'>
                Ongoing projects
              </Text>
            </VStack>
          </Flex>
          <Flex
            flexDirection='column'
            maxWidth='394px'
            borderRadius='lg'
            border='1px'
            borderColor={"gray.100"}
            py='2rem'
            px='1rem'
            bg='blue.100'
          >
            <VStack>
              <Heading fontSize='3rem' fontWeight='extrabold'>
                107
              </Heading>
              <Text fontSize='1.25rem' fontWeight='medium'>
                Completed projects
              </Text>
            </VStack>
          </Flex>
          <Flex
            flexDirection='column'
            maxWidth='394px'
            borderRadius='lg'
            border='1px'
            borderColor={"gray.100"}
            py='2rem'
            px='1rem'
            bg='pink.100'
          >
            <VStack>
              <Heading fontSize='3rem' fontWeight='extrabold'>
                90%
              </Heading>
              <Text fontSize='1.25rem' fontWeight='medium'>
                Satisfaction rate
              </Text>
            </VStack>
          </Flex>
        </SimpleGrid>
      </Center>
    </Box>
  );
}
