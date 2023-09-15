import { Box, Flex, Text, VStack, Image, Heading } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import pfp from '../images/pfp.png';
import Skills from './Skills';
import About from './About';
import { motion } from 'framer-motion';

export default function Introduction() {
  const qualities = [
    'Web Developer',
    'Software Engineer',
    'Problem Solver',
    'Quick Learner',
    'University Student',
    'Computer Scientist',
  ];
  const period = 1000;

  const [qualityIdx, setQualityIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = qualityIdx % qualities.length;
    let fullText = qualities[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setQualityIdx(qualityIdx + 1);
      setDelta(300);
    }
  };

  return (
    <>
      <Box
        margin="auto"
        marginBottom="2rem"
        width="clamp(500px, 70vw, 1000px)"
        marginTop="6rem"
      >
        <Box minH="90vh">
          <Flex gap="3rem" justifyContent="space-between">
            <VStack gap="1.5rem" alignItems="flex-start">
              <Text fontSize="4rem" fontWeight="bold">
                Hey, I'm Andy!
              </Text>
              <Text color="#0f1b61" fontSize="1.5rem">
                Welcome to my website!
              </Text>
              <Text minH="2.4rem" color="#0f1b61" fontSize="1.2rem">
                People describe me as a{' '}
                <Text
                  display="inline"
                  color="#0f1b61"
                  fontWeight="semibold"
                  fontSize="1.3rem"
                >
                  {text}
                </Text>
                |
              </Text>
              <Box textAlign="right" mt="3rem" w="clamp(15px, 25vw, 130px)">
                <motion.div
                  animate={{
                    y: [-10, 0, -10],
                    opacity: [1, 0, 1],
                    transition: {
                      delay: 3,
                      duration: 2,
                      repeat: Infinity,
                    },
                  }}
                >
                  Scroll <ChevronDownIcon />
                </motion.div>
              </Box>
              <Box
                as={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 200 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition="1s ease-out"
                transitionDelay="1s"
                alignSelf="flex-start"
                w="clamp(10px, 20vw, 100px)"
                h="clamp(100px, 50vh, 600px)"
                borderStyle="solid"
                borderColor="gray.600"
                borderRightWidth="1px"
              ></Box>
            </VStack>
            <Image
              position="sticky"
              top="15rem"
              maxW="clamp(300px,30vw,400px)"
              h="clamp(300px, 30vw, 400px)"
              borderRadius="50%"
              objectFit="cover"
              src={pfp}
            />
          </Flex>
        </Box>
        <About />
        <Skills />
      </Box>
    </>
  );
}
