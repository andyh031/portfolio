'use client';

import {
  Box,
  VStack,
  Text,
  Flex,
  Image,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepTitle,
  Stepper,
} from '@chakra-ui/react';
import Scroller from './Scroller';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gradImage from '../images/grad.jpeg';

export default function Experience({ setBkgColor }) {
  setBkgColor('#f6fcf4');

  const cgi = {
    title: 'Full-Stack Developer',
    company: 'CGI',
    location: 'Vancouver, British Columbia',
    date: 'January 2024 - Present',
    description: '',
  };

  const waiter = {
    title: 'Waiter/Server',
    company: "Brother's Taste of Asia",
    location: 'Calgary, Alberta',
    date: 'Nov. 2020 - Aug. 2022',
    description:
      'As a waiter, I delivered excellent customer service in a fast-paced environment, whether it be seating customers and answering menu questions, or taking calls and packing neat takeout dishes. As a more experienced employee, I successfully trained new employees on restaurant protocols, menu offerings, and service standards, resulting in quick integration with the waitstaff team.',
  };

  const experiences = [cgi, waiter];

  return (
    <>
      <Box
        margin="auto"
        marginBottom="2rem"
        width="clamp(300px, 70vw, 1000px)"
        marginTop="6rem"
      >
        <Box minH="70vh" marginInline={{ md: 'minmax(1rem, 3rem)' }}>
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
                fontSize={{ base: '2.5rem', sm: '3.5rem', md: '3.5rem' }}
                fontWeight="bold"
              >
                Experience
              </Text>
              <Text
                color="#0f1b61"
                fontSize={{ base: '1.1rem', sm: '1.5rem', md: '1.5rem' }}
              >
                A place of new beginnings.
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
                  sm: 'clamp(300px,30vw,400px)',
                }}
                borderRadius="50%"
                objectFit="cover"
                src={gradImage}
              />
            </motion.div>
          </Flex>
        </Box>

        <Stepper
          marginInline="3rem"
          marginTop="100px"
          height="fit-content"
          gap="0"
          size="lg"
          index="1"
          orientation="vertical"
        >
          {experiences.map((experience) => (
            <Moment {...experience} />
          ))}
        </Stepper>
      </Box>
    </>
  );
}

function Moment({ title, company, location, date, description }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.5,
          duration: 1,
        },
      });
    } else {
      animation.start({
        y: 30,
        opacity: 0,
      });
    }
  }, [isInView]);

  return (
    <>
      <Step mt="1rem" ref={ref} as={motion.div} animate={animation}>
        <StepIndicator></StepIndicator>
        <Box>
          <StepTitle>{title}</StepTitle>
          <StepDescription>{company}</StepDescription>
          <StepDescription>{location}</StepDescription>
          <StepDescription>{date}</StepDescription>
          <StepDescription mt="1rem">{description}</StepDescription>
        </Box>

        <StepSeparator />
      </Step>
      <StepSeparator />
    </>
  );
}
