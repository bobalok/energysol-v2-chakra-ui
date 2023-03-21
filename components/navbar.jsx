"use strict";
import {
  Heading,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  Image,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Spacer,
  HStack,
} from "@chakra-ui/react";

import NextLink from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Porfolio", href: "#!" },
  { name: "Contact", href: "#!" },
  { name: "Partners", href: "#!" },
  { name: "More", href: "#!" },
];

export default function Navbar() {
  //   const { isOpen, onToggle } = useDisclosure();

  const navlogo = {
    imageUrl: "/energysolution.svg",
    imageAlt: "logo",
  };

  return (
    <Flex as='nav' p='20px' px='56px' alignItems='center' bg='gray.200'>
      <Box w='384px' h='54px'>
        <Image src={navlogo.imageUrl} alt={navlogo.imageAlt} />
      </Box>
      <Spacer />
      <HStack spacing='20px'>
        {navLinks.map((navItems) => (
          <Link as={NextLink} key={navItems.name} href={navItems.href}>
            {navItems.name}
          </Link>
        ))}
        <Button colorScheme={"purple"}>Logout</Button>
      </HStack>
    </Flex>
  );
}
