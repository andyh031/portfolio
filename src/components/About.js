import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Box
      as={motion.div}
      whileInView={{ color: 'black' }}
      animate={{ y: [50, 0], duration: '2s', opacity: [0, 1] }}
      minH="70vh"
      marginBlock="3rem"
    >
      <Heading>About</Heading>

      <Text mt="1rem" fontSize="1.2rem">
        I am currently on my way to completing a Bachelor's degree specialized
        in Computer Science and Statistics at the University of British
        Columbia. Previously, I completed my high school degree at Dr. E. P.
        Scarlett High School in Calgary, Alberta, which is where I grew up in. I
        am proud to say that I achieved the honour of receiving the Governor
        General's Bronze Academic Medal, awarded to the top ranking graduating
        student in my high school.
      </Text>
      <Text mt="1rem" fontSize="1.2rem">
        I recall scrolling through the YouTube algorithms and somehow stumbling
        upon David Malan's CS50 Hardvard Introductory Course during the midst of
        the Covid-19 pandemic, which piqued my interest into programming and
        problem solving. The way that this course helped me finally start
        connecting the dots between how exactly my laptop worked, how I could
        talk with others over the network, and the general 'how' of programs and
        computer systems all came together. I was both excited and intrigued to
        learn more about computer science and software engineering, which has
        led me down the path I am walking down today.
      </Text>
      <Text mt="1rem" fontSize="1.2rem">
        While I'm not learning about the newest cutting edge technology and
        coding away in my own little world, I enjoy going out for walks near the
        waters, longboarding across campus and the downtown area, and
        snowboarding on double blacks in the winter.
      </Text>
      <Text mt="1rem" fontSize="1.2rem">
        I am always looking forward to new opportunities to immerse myself in
        learning and collaboration. Please don't hesitate to reach out to me for
        anything!
      </Text>
    </Box>
  );
}
