'use client'

import Head from 'next/head'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  keyframes,
} from '@chakra-ui/react'

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export default function HeroSection() {
  return (
    <>
      <Container
        maxW={'full'}
        height="85vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgGradient="linear(to-br, pink.300, white)"
      >
        <Box textAlign={'center'}>
          <Heading
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            color="black"
            animation={`${pulseAnimation} infinite 2s ease-in-out`}
          >
            Rozwijamy się dla CIEBIE!
          </Heading>
        </Box>
      </Container>
    </>
  );
}