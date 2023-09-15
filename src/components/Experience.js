import { Box, VStack, Text, Heading, Flex, Image } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { motion, useAnimate, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import butterflies from '../images/butterflies.jpeg';

export default function Experience({ setBkgColor }) {
  setBkgColor('#f6fcf4');
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
                Experience
              </Text>
              <Text color="#0f1b61" fontSize="1.5rem">
                A place of new beginnings.
              </Text>
              <Box textAlign="right" mt="3rem" w="clamp(15px, 25vw, 160px)">
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
                w="clamp(15px, 25vw, 130px)"
                h="clamp(100px, 40vh, 500px)"
                borderStyle="solid"
                borderColor="gray.600"
                borderRightWidth="1px"
              ></Box>
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
                position="sticky"
                top="15rem"
                maxW="clamp(300px,30vw,400px)"
                h="clamp(300px, 30vw, 400px)"
                borderRadius="50%"
                objectFit="cover"
                src={butterflies}
              />
            </motion.div>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
