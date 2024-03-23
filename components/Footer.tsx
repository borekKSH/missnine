"use client"
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      // Dodanie półprzezroczystości
      style={{ backdropFilter: 'blur(10px)', backgroundColor: useColorModeValue('rgba(248, 250, 252, 0.8)', 'rgba(26, 32, 44, 0.8)')}}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2024 butik missnine. Wszelkie prawa zastrzeżone</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Facebook'} href={'https://www.facebook.com/profile.php?id=61557365371917'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'TikTok'} href={'https://www.tiktok.com/@missnine.pl'}>
            <FaTiktok />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/missninepl/'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
