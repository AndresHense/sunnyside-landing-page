import { Button, HStack, IconButton, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <Stack
      align='center'
      justify='center'
      py={{ base: 14, md: 24, lg: 28 }}
      bgColor='#90d4c5'
      spacing={{ base: 10, lg: 14 }}
    >
      <Image
        src='images/logo.svg'
        w={{ base: '160px', lg: '220px' }}
        filter='invert(67%) sepia(66%) saturate(319%) hue-rotate(116deg) brightness(96%) contrast(96%);'
      />
      <HStack spacing={{ base: 5, md: 15, lg: 20 }}>
        <Button
          variant='unstyled'
          _hover={{ color: 'white' }}
          fontSize={{ base: 'lg', lg: 'xl' }}
          color='gray.600'
          textStyle='h4'
        >
          About
        </Button>
        <Button
          variant='unstyled'
          _hover={{ color: 'white' }}
          fontSize={{ base: 'lg', lg: 'xl' }}
          color='gray.600'
          textStyle='h4'
        >
          Services
        </Button>
        <Button
          variant='unstyled'
          _hover={{ color: 'white' }}
          fontSize={{ base: 'lg', lg: 'xl' }}
          color='gray.600'
          textStyle='h4'
        >
          Projects
        </Button>
        <Button
          variant='unstyled'
          _hover={{ color: 'white' }}
          fontSize={{ base: 'lg', lg: 'xl' }}
          color='gray.600'
          textStyle='h4'
        >
          Contact
        </Button>
      </HStack>
      <HStack
        spacing={{ base: 4, md: 8, lg: 12 }}
        pt={{ base: 4, md: 6, lg: 8 }}
      >
        <IconButton
          _hover={{ color: 'white' }}
          variant='unstyled'
          color='green.800'
          icon={<FaFacebook />}
          size='lg'
          fontSize='3xl'
          aria-label='facebook'
        />
        <IconButton
          variant='unstyled'
          color='green.800'
          _hover={{ color: 'white' }}
          icon={<FaInstagram />}
          size='lg'
          fontSize='3xl'
          aria-label='instagram'
        />
        <IconButton
          variant='unstyled'
          color='green.800'
          _hover={{ color: 'white' }}
          icon={<FaTwitter />}
          size='lg'
          fontSize='3xl'
          aria-label='twirter'
        />
        <IconButton
          variant='unstyled'
          color='green.800'
          _hover={{ color: 'white' }}
          icon={<FaPinterest />}
          size='lg'
          fontSize='3xl'
          aria-label='pintereest'
        />
      </HStack>
    </Stack>
  );
};

export default Footer;
