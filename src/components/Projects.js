import {
  Text,
  Box,
  VStack,
  Flex,
  Heading,
  Button,
  Image,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ChevronDownIcon } from '@chakra-ui/icons';
import subletterImage from '../images/subletter.png';
import sorterImage from '../images/sorter.PNG';
import gradeairImage from '../images/gradeair.PNG';
import heartImage from '../images/heartImage.PNG';
import butterflies from '../images/butterflies.jpeg';
import { motion, useAnimation, useInView } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import { useRef, useEffect } from 'react';

export default function Projects({ setBkgColor }) {
  setBkgColor('#fff7f7');
  const subletter = {
    title: 'Subletter',
    image: subletterImage,
    description:
      'Subletter is a full-stack social media application utilizing React.js enhanced by the Chakra UI CSS framework. To support user CRUD operations, my team and I used Express.js to implement a RESTful API. To ensure safety in the database, we encypted sensitive user information with bcrypt while storing it into the database, and used JSON Web Tokens and Cookies to preserve the user state',
    link: 'https://github.com/andyh031/subletter',
    technologies:
      'JavaScript, MySQL, React.js, Express.js, Node.js, Chakra UI CSS',
  };

  const heart = {
    title: 'Heart Disease Classification',
    image: heartImage,
    description:
      'This was my first time diving into a machine learning, where my team and I deployed a heart disease classification model using a K-Nearest Neighbours algorithm. In this project, I learned about the importance of Exploratory Data Analysis, tradeoffs to model complexity, model optimization through cross-validation, and I overall had a really fun time!',
    link: 'https://github.com/andyh031/heart-disease-classification',
    technologies: 'R, Jupyter Notebooks',
  };

  const sorter = {
    title: 'Sorting Visualizer',
    image: sorterImage,
    description:
      'I deployed a dynamic web application with React.js that visually demonstrates complex sorting algorithms sorting in real time. This was done so that I could supplement my in class learning of data structures and algorithms with a project of my own. To achieve a greater user experience, I made the animation speed customizable and let the user generate random data for sorting. ',
    link: 'https://github.com/andyh031/sort-app',
    technologies: 'JavaScript, React.js, CSS',
  };

  const gradeAir = {
    title: 'GradeAir',
    image: gradeairImage,
    description:
      'GradeAir is a grade tracking application made using Java, where I utilized SOLID principles in Object Oriented Programming to create an efficient application for students to use. I applied test-driven development and wrote numerous unit test with JUnit to achieve 100% code coverage.',
    link: 'https://github.com/andyh031/grade-air',
    technologies: 'Java, JUnit, Java Swing',
  };

  const projects = [subletter, sorter, heart, gradeAir];

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
                Projects
              </Text>
              <Text color="#0f1b61" fontSize="1.5rem">
                An expression of creativity and innovation.
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
        <Box marginTop="100px">
          {projects.map((project) => (
            <Project {...project} />
          ))}
        </Box>
      </Box>
    </>
  );
}

function Project({ title, image, description, link, technologies }) {
  const ref = useRef(null);
  const boxControls = useAnimation();
  const isInView = useInView(ref, { once: true, threshold: 0.4 });

  useEffect(() => {
    if (isInView) {
      boxControls.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.5,
          duration: 1,
        },
      });
    } else {
      boxControls.start({
        y: 30,
        opacity: 0,
      });
    }
  }, [isInView]);
  return (
    <Box
      ref={ref}
      as={motion.div}
      animate={boxControls}
      p="5rem"
      borderTop="solid 1px"
      borderTopColor="gray.300"
    >
      <Flex
        gap="5rem"
        flexDirection={{
          base: 'column-reverse',
          md: 'column-reverse',
          lg: 'row',
        }}
        alignItems="center"
      >
        <Image
          boxShadow="lg"
          maxW="clamp(250px, 20vw, 400px)"
          height="clamp(250px, 20vw, 400px)"
          borderRadius="50%"
          objectFit="cover"
          src={image}
        />
        <VStack alignItems="flex-start">
          <Heading>
            {title + ' '}
            <Link size="sm" display="inline" isExternal="true" href={link}>
              <ExternalLinkIcon size="md" />
            </Link>
          </Heading>
          <Text>{description}</Text>
          <Text textAlign="left" as="i">
            Technologies: {technologies}
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}