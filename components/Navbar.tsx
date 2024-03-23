"use client"
import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Button, useBreakpointValue } from '@chakra-ui/react';

export default function Navbar() {
  const text = "Już 24.03.2024 (niedziela) Pierwszy drop!!";
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    for (let i = 0; i < text.length; i++) {
      let timeout = setTimeout(() => {
        setAnimatedText((prev) => prev + text.charAt(i));
      }, 100 * i);
      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [text]);

  // Ustawienie wartości responsywnych za pomocą hooka useBreakpointValue
  const navHeight = useBreakpointValue({ base: '50px', md: '60px' });
  const fontSize = useBreakpointValue({ base: 'sm', md: 'lg' });
  const paddingX = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Box position="fixed" w="100%" zIndex="10">
      <Flex
        bg={'whiteAlpha.500'} // Przejrzyste tło
        color={'black'}
        minH={navHeight} // Dynamically adjusted
        py={{ base: 2 }}
        px={{ base: paddingX }} // Dynamically adjusted
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'gray.200'}
        align={'center'}
        justify={'space-between'}
      >
        {/* Logo */}
        <Button as={'a'} href="/" variant={'link'} size="sm">
          MISS9
        </Button>

        {/* Tekst z animacją */}
        <Text fontSize={fontSize} textAlign={'center'} flex={1}>
          {animatedText}
        </Text>

        {/* Dodatkowy element dla symetrii - ukryty na małych ekranach */}
        <Box display={{ base: 'none', md: 'block' }} width={'80px'} />
      </Flex>
    </Box>
  );
}
