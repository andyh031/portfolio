import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepTitle,
  Stepper,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import gradImage from "../images/grad.jpeg";
import PageStart from "../components/page/PageStart";
import PageLoader from "../components/page/PageLoader";

export default function Experience({ setBkgColor }) {
  setBkgColor("#f6fcf4");

  const ta = {
    title: "Undergraduate Teaching Assistant",
    company: "UBC",
    location: "Vancouver, British Columbia",
    date: "September 2024 - Present",
    description:
      "Weekly labs and office hours for CPSC 213: Introduction to Computer Systems",
  };

  const cgi = {
    title: "Full-Stack Developer",
    company: "CGI",
    location: "Vancouver, British Columbia",
    date: "January 2024 - August 2024",
    description: "Education and Childcare Team",
  };

  const waiter = {
    title: "Waiter/Server",
    company: "Brother's Taste of Asia",
    location: "Calgary, Alberta",
    date: "Nov. 2020 - Aug. 2022",
    description: "Quality customer service in a fast-paced environment",
  };

  const experiences = [ta, cgi, waiter];

  return (
    <>
      <PageLoader
        images={[gradImage]}
        component={
          <Box
            margin="auto"
            marginBottom="2rem"
            width="clamp(300px, 70vw, 1000px)"
            marginTop="6rem"
          >
            <PageStart
              headerText="Experience"
              descriptionText="A place of new beginnings."
              image={gradImage}
            />
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
        }
      />
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
          type: "spring",
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
  }, [isInView, animation]);

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
    </>
  );
}
