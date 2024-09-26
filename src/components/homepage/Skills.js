import {
  Heading,
  SimpleGrid,
  VStack,
  CircularProgress,
  Text,
  Box,
} from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Skills() {
  const skills = [
    ["JavaScript", "100"],
    ["Python", "100"],
    ["Java", "100"],
    ["SQL", "100"],
    ["HTML", "100"],
    ["CSS", "100"],
    ["R", "100"],
    ["C/C++", "90"],
    ["TypeScript", "60"],
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  return (
    <Box marginInline="3rem">
      <Heading marginBottom="1rem">Technical Skills</Heading>
      <SimpleGrid
        margin="auto"
        maxWidth="250px"
        minWidth="150px"
        minChildWidth="30px"
        spacing="3rem"
      >
        {skills.map((skill) => {
          return (
            <>
              <VStack
                as={motion.div}
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                initial="hidden"
                animate={animation}
                transition="500ms"
                ref={ref}
              >
                <CircularProgress value={skill[1]} />
                <Text>{skill[0]}</Text>
              </VStack>
            </>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
