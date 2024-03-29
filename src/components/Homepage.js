import { Box, Flex, Text, VStack, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import pfp from '../images/pfp.png';
import Skills from './Skills';
import About from './About';
import { motion } from 'framer-motion';
import Scroller from './Scroller';
import Loading from './Loading';

export default function Homepage({ setBkgColor }) {
  setBkgColor('#f4f9fc');
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

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsImageLoaded(true);
    }, 1500);
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {!isImageLoaded ? (
        <Loading />
      ) : (
        <Box
          margin="auto"
          marginBottom="2rem"
          width="clamp(300px, 70vw, 1000px)"
          marginTop="6rem"
        >
          <Box minH="90vh" marginInline="3rem">
            <Flex
              gap="3rem"
              justifyContent="space-between"
              flexDirection={{
                base: 'column-reverse',
                sm: 'column-reverse',
                md: 'row',
              }}
              alignItems={{ base: 'center', sm: 'center', md: 'stretch' }}
            >
              <VStack gap="1.5rem" alignItems="flex-start">
                <Text
                  fontSize={{ base: '3rem', sm: '3rem', md: '4rem' }}
                  fontWeight="bold"
                >
                  Hey, I'm Andy!
                </Text>
                <Text
                  color="#0f1b61"
                  fontSize={{ base: '1.3rem', sm: '1.3rem', md: '1.5rem' }}
                >
                  Welcome to my world!
                </Text>
                <Text
                  minH="2.4rem"
                  color="#0f1b61"
                  fontSize={{ base: '1.1rem', sm: '1.1rem', md: '1.2rem' }}
                >
                  Others see me as a{' '}
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
                <Scroller />
              </VStack>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 50, y: 50 },
                  show: { opacity: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Image
                  boxShadow="xl"
                  position="sticky"
                  top="15rem"
                  maxW={{
                    base: 'clamp(200px, 70vw, 350px)',
                    sm: 'clamp(300px,30vw,400px)',
                  }}
                  h={{
                    base: 'clamp(200px, 70vw, 350px)',
                    sm: 'clamp(300px, 30vw, 400px)',
                  }}
                  borderRadius="50%"
                  objectFit="cover"
                  src={pfp}
                  loading="lazy"
                  onLoad={handleImageLoaded}
                />
              </motion.div>
            </Flex>
          </Box>
          <About />
          <Skills />
        </Box>
      )}
      ;
    </>
  );
}
