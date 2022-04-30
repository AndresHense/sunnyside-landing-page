import { Box, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Review = ({ avatar, text, name, position }) => {
  return (
    <Stack align='center' spacing={{ base: 10, md: 16, lg: 20 }}>
      <Image src={avatar} w={20} rounded='full' />
      <Text textStyle='h4' px={{ base: 2, sm: 8, md: 12 }} align='center'>
        {text}
      </Text>
      <Box>
        <Text textStyle='h4' fontWeight='bold' color='black' align='center'>
          {name}
        </Text>
        <Text textStyle='p' align='center'>
          {position}
        </Text>
      </Box>
    </Stack>
  );
};

export default Review;
