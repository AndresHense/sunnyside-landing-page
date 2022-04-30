import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Review from './Review';

type Review = {
  avatar: string;
  text: string;
  name: string;
  position: string;
};

const reviews: Review[] = [
  {
    avatar: 'images/image-emily.jpg',
    text: `We put our trust in Sunnyside and they delivered, making sure our
    needs were met and deadlines were always hit.`,
    name: 'Emily R.',
    position: 'Marketing Director',
  },
  {
    avatar: 'images/image-thomas.jpg',
    text: `Sunnyside’s enthusiasm coupled with their keen interest in our
    brand’s success made it a satisfying and enjoyable experience.`,
    name: 'Thomas S.',
    position: 'Chief Operating Officer',
  },
  {
    avatar: 'images/image-jennie.jpg',
    text: `Incredible end result! Our sales increased over 400% when we worked
    with Sunnyside. Highly recommended!`,
    name: 'Jennie F.',
    position: 'Business Owner',
  },
];

const Reviews = () => {
  return (
    <Stack
      px={{ base: 2, md: 14, lg: 20 }}
      spacing={20}
      h={{ base: 'auto', lg: '100vh' }}
      justify='center'
      align='center'
      bgColor='#fffbf8'
    >
      <Text
        textStyle='h3'
        textTransform='uppercase'
        color='gray.500'
        pt={{ base: 14, lg: 'inherit' }}
        pb={{ base: 4, lg: 8 }}
        align='center'
      >
        Client testimonials
      </Text>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: 4, sm: 14, md: 24, lg: 'inherit' }}
      >
        {reviews.map((review) => (
          <Review
            avatar={review.avatar}
            name={review.name}
            text={review.text}
            position={review.position}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Reviews;
