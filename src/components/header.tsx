import {
  Button,
  HStack,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaHamburger } from 'react-icons/fa';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      bgImage='images/desktop/image-header.jpg'
      w='100%'
      h='100vh'
      bgSize='cover'
      bgPosition='center'
      bgRepeat='no-repeat'
      spacing={24}
    >
      <HStack
        justify='space-between'
        align='center'
        px={{ base: 8, md: 14, lg: 16 }}
        py={14}
      >
        <Image src='images/logo.svg' w={{ base: '140px', lg: '200px' }} />
        <HStack spacing={20} display={{ base: 'none', lg: 'inherit' }}>
          <Button variant='unstyled'>About</Button>
          <Button variant='unstyled'>Services</Button>
          <Button variant='unstyled'>Projects</Button>
          <Button variant='contact'>Contact</Button>
        </HStack>

        <IconButton
          bg='blue.500'
          _hover={{ bg: 'inherit' }}
          _focus={{ border: 'none', bg: 'inherit' }}
          _active={{ border: 'none', bg: 'inherit' }}
          icon={<Image src='images/icon-hamburger.svg' />}
          display={{ base: 'inherit', lg: 'none' }}
          aria-label='hamburber'
          onClick={isOpen ? onClose : onOpen}
        />
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
          />
          <ModalContent mx={14}>
            <ModalBody my={8}>
              <VStack spacing='1rem'>
                <Button
                  variant='unstyled'
                  _focus={{ border: 'none', bg: 'inherit' }}
                  color='gray.500'
                >
                  About
                </Button>
                <Button
                  variant='unstyled'
                  _focus={{ border: 'none', bg: 'inherit' }}
                  color='gray.500'
                >
                  Services
                </Button>
                <Button
                  variant='unstyled'
                  _focus={{ border: 'none', bg: 'inherit' }}
                  color='gray.500'
                >
                  Projects
                </Button>
                <Button variant='contact' bg='yellow.400'>
                  Contact
                </Button>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
      <Stack align='center' spacing={{ base: 12, sm: 16, md: 20, lg: 24 }}>
        <Text textStyle='h1' align='center'>
          We are creatives
        </Text>
        <Image
          src='images/icon-arrow-down.svg'
          w={{ base: 8, md: 10, lg: 10 }}
        />
      </Stack>
    </Stack>
  );
};

export default Header;
