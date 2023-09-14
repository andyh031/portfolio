import { Box, Flex, Text, VStack, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Introduction() {
  const qualities = [
    'Web Developer',
    'Software Engineer',
    'Problem Solver',
    'Quick Learner',
    'University Student',
    'Computer Scientist',
  ];
  const period = 1500;

  const [qualityIdx, setQualityIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

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
      <Box p="3rem" h="100vh">
        <Flex>
          <VStack>
            <Text fontSize="4em" fontWeight="bold">
              Hey, I'm Andy Hu
            </Text>
            <Text left="1rem">People describe me as a {text}|</Text>
          </VStack>
          <Image src="../images/pfp.png" />
        </Flex>
      </Box>
    </>
  );
}
