import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  FaFacebook,
  FaHamburger,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';
import Footer from './components/footer';
import Header from './components/header';
import Reviews from './components/Reviews';

function App() {
  return (
    <>
      <Header />
      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        templateRows={{ base: 'repeat(6, 1fr)', lg: 'repeat(3, 1fr)' }}
      >
        <GridItem
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          bgColor='#fffbf8'
          pl={{ base: 0, lg: '15%' }}
        >
          <Stack
            align={{ base: 'inherit', lg: 'start' }}
            spacing={{ base: 4, md: 12, lg: 12, xl: 14 }}
          >
            <Text align={{ base: 'center', lg: 'start' }} textStyle='h2'>
              Transform your <br />
              brand
            </Text>
            <Text
              align={{ base: 'center', lg: 'start' }}
              textStyle='h4'
              w={{ base: '75%', md: '65%', lg: '75%' }}
            >
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </Text>

            <Button
              variant='link'
              fontFamily='Fraunces'
              fontSize='xl'
              textTransform='uppercase'
            >
              Learn more
            </Button>
          </Stack>
        </GridItem>
        <GridItem rowStart={{ base: 1, lg: 'auto' }}>
          <Image src='images/desktop/image-transform.jpg' w='full' />
        </GridItem>
        <GridItem>
          <Image src='images/desktop/image-stand-out.jpg' w='full' />
        </GridItem>
        <GridItem
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          pl={{ base: 0, lg: '15%' }}
          bgColor='#fffbf8'
        >
          <Stack
            align={{ base: 'inherit', lg: 'start' }}
            spacing={{ base: 4, md: 12, lg: 12, xl: 14 }}
          >
            <Text align={{ base: 'center', lg: 'start' }} textStyle='h2'>
              Stand out to the right <br />
              audience
            </Text>
            <Text
              align={{ base: 'center', lg: 'start' }}
              textStyle='h4'
              w={{ base: '75%', md: '65%', lg: '75%' }}
            >
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.{' '}
            </Text>
            <Button
              variant='link'
              fontFamily='Fraunces'
              fontSize='xl'
              textTransform='uppercase'
            >
              Learn more
            </Button>
          </Stack>
        </GridItem>
        <GridItem
          bgImage='images/desktop/image-graphic-design.jpg'
          bgSize='cover'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Stack align='center' spacing={10} pt='50%'>
            <Text textStyle='h3' color='green.800'>
              Graphic design
            </Text>
            <Text
              textStyle='h5'
              px={{ base: '5%', md: '10%', lg: '20%' }}
              align='center'
              color='green.800'
            >
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </Text>
          </Stack>
        </GridItem>
        <GridItem
          bgImage='images/desktop/image-photography.jpg'
          bgSize='cover'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Stack align='center' spacing={10} pt='50%'>
            <Text textStyle='h3' color='blue.800'>
              Photography
            </Text>
            <Text
              textStyle='h5'
              px={{ base: '5%', md: '10%', lg: '20%' }}
              align='center'
              color='blue.800'
            >
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </Text>
          </Stack>
        </GridItem>
      </Grid>
      <Reviews />
      <Grid
        templateColumns={{ base: '1fr 1fr', lg: 'repeat(4, 1fr)' }}
        pt={{ base: 20, lg: 'inherit' }}
      >
        <GridItem>
          <Image src='images/desktop/image-gallery-milkbottles.jpg' />
        </GridItem>
        <GridItem>
          <Image src='images/desktop/image-gallery-orange.jpg' />
        </GridItem>
        <GridItem>
          <Image src='images/desktop/image-gallery-cone.jpg' />
        </GridItem>
        <GridItem>
          <Image src='images/desktop/image-gallery-sugarcubes.jpg' />
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
}

export default App;
