import { ChevronDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

export default function Scroller() {
  return (
    <>
      <Box
        color="gray.400"
        textAlign="right"
        mt="3rem"
        w="clamp(15px, 25vw, 130px)"
      >
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
        borderColor="gray.300"
        borderRightWidth="1px"
      ></Box>
    </>
  );
}
