import {
  Box,
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
    <Box w='100%'>
      <Center>
        <VStack w='2xl' p='64px' color={"gray.600"}>
          <Heading fontSize='5xl'>Trusted by Businesses</Heading>
          <Text align='center' fontSize='lg'>
            We are the most experienced and trusted company in Bangladesh. Our
            team consists of highly skilled professionals who have been working
            in the fields for many years. We have a good reputation in the
            industry.
          </Text>
        </VStack>
        <Stack direction={["column", "row"]} spacing='24px'>
          <Box w='40px' h='40px' bg='yellow.200'>
            1
          </Box>
          <Box w='40px' h='40px' bg='tomato'>
            2
          </Box>
          <Box w='40px' h='40px' bg='pink.100'>
            3
          </Box>
        </Stack>
      </Center>
    </Box>
  );
}
