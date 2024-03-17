'use client'

import {
  Box,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Box>
      <Flex
        bg={'white'}
        color={'black'} 
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'gray.200'}
        align={'center'}
        justify={'space-between'} 
      >
        {/* Logo */}
        <Button as={"a"} href="/" variant={"link"}>
          MISS9
        </Button>

        {/* Tekst obok logo, wyśrodkowany i powiększony */}
        <Text
          fontSize={"lg"} // Powiększenie tekstu
          textAlign={"center"} // Wyśrodkowanie tekstu 
          flex={1} 
        >
          Butik Missnine.pl powstaje na potrzeby kobiet, które uwielbiają wyglądać wyjątkowo każdego dnia!
        </Text>

        {/* Dodatkowy element, aby zachować symetrię i pozycjonowanie tekstu na środku */}
        <Box width={"80px"} /> {/* Sztuczne wyrównanie - szerokość dostosuj do wymagań */}
      </Flex>
    </Box>
  );
}
