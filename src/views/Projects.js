import {
  Text,
  Box,
  VStack,
  Flex,
  Heading,
  Image,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import subletterImage from "../images/subletter.png";
import sorterImage from "../images/sorter.PNG";
import gradeairImage from "../images/gradeair.PNG";
import heartImage from "../images/heartImage.PNG";
import butterflies from "../images/butterflies.jpeg";
import fooderImage from "../images/fooderImage.png";
import pinmasterImage from "../images/pinmasterImage.PNG";
import pantryPlannerImage from "../images/pantryPlanner.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import PageStart from "../components/page/PageStart";
import { PROJECT_LINKS, SECTION_BG_COLOUR } from "../util/constants";
import PageLoader from "../components/page/PageLoader";

export default function Projects({ setBkgColor }) {
  setBkgColor(SECTION_BG_COLOUR.PROJECTS);

  const pantryPlanner = {
    title: "Pantry Planner - nwHacks 2024 Sponsorship Prize Winner",
    image: pantryPlannerImage,
    description:
      "Not only is Pantry Planner just an inventory management system for you, but it is a user-friendly interface that helps you connect with your community to share your culinary creations and explore a diverse range of recipes shared by other users. By joining our community, it aids in maintaining a healthy lifestyle with its built-in calorie tracker and elevates your cooking experiences!",
    link: PROJECT_LINKS.PANTRYPLANNER,
    technologies: "React, Figma, Flask, JavaScript, MongoDB, Python",
  };

  const pinmaster = {
    title: "PinMaster3 - HackCamp 2023",
    image: pinmasterImage,
    description:
      "PinMaster3 is a chrome extension which lets you select text to open in a popup window to help with scrolling up-and-down to find information. It also lets you popup answer fields that you can type in that sync with the actual webpage, letting you answer multiple choice, written questions, and multi-select questions without the need for excessive scrolling.",
    link: PROJECT_LINKS.PINMASTER,
    technologies: "HTML, CSS, JavaScript",
  };

  const fooder = {
    title: "Fooder - Hack the Change 2023",
    image: fooderImage,
    description:
      "Fooder is a web app that allows users to upload a photo of an item, and classify what type of disposal category it belongs to through machine-learing image classification. It also utilizes the Google Maps API to find nearby disposal areas for the requested item.",
    link: PROJECT_LINKS.FOODER,
    technologies: "React Javascript, Flask, Chakra UI CSS",
  };

  const subletter = {
    title: "Subletter",
    image: subletterImage,
    description:
      "Subletter is a full-stack social media application utilizing React.js enhanced by the Chakra UI CSS framework. To support user CRUD operations, my team and I used Express.js to implement a RESTful API. To ensure safety in the database, we encypted sensitive user information with bcrypt while storing it into the database, and used JSON Web Tokens and Cookies to preserve the user state",
    link: PROJECT_LINKS.SUBLETTER,
    technologies:
      "JavaScript, MySQL, React.js, Express.js, Node.js, Chakra UI CSS",
  };

  const heart = {
    title: "Heart Disease Classification",
    image: heartImage,
    description:
      "This was my first time diving into a machine learning, where my team and I deployed a heart disease classification model using a K-Nearest Neighbours algorithm. In this project, I learned about the importance of Exploratory Data Analysis, tradeoffs to model complexity, model optimization through cross-validation, and I overall had a really fun time!",
    link: PROJECT_LINKS.HEART,
    technologies: "R, Jupyter Notebooks",
  };

  const sorter = {
    title: "Sorting Visualizer",
    image: sorterImage,
    description:
      "I deployed a dynamic web application with React.js that visually demonstrates complex sorting algorithms sorting in real time. This was done so that I could supplement my in class learning of data structures and algorithms with a project of my own. To achieve a greater user experience, I made the animation speed customizable and let the user generate random data for sorting. ",
    link: PROJECT_LINKS.SORTAPP,
    technologies: "JavaScript, React.js, CSS",
  };

  const gradeAir = {
    title: "GradeAir",
    image: gradeairImage,
    description:
      "GradeAir is a grade tracking application made using Java, where I utilized SOLID principles in Object Oriented Programming to create an efficient application for students to use. I applied test-driven development and wrote numerous unit test with JUnit to achieve 100% code coverage.",
    link: PROJECT_LINKS.GRADEAIR,
    technologies: "Java, JUnit, Java Swing",
  };

  const projects = [
    pantryPlanner,
    pinmaster,
    fooder,
    subletter,
    sorter,
    heart,
    gradeAir,
  ];

  return (
    <PageLoader
      images={[
        subletterImage,
        sorterImage,
        gradeairImage,
        heartImage,
        butterflies,
        fooderImage,
        pinmasterImage,
        pantryPlannerImage,
      ]}
      component={
        <Box
          margin="auto"
          marginBottom="2rem"
          width="clamp(300px, 70vw, 1000px)"
          marginTop="6rem"
        >
          <PageStart
            headerText="Projects"
            descriptionText="An expression of creativity and innovation."
            image={butterflies}
          />
          <Box marginTop="100px">
            {projects.map((project) => (
              <Project {...project} />
            ))}
          </Box>
        </Box>
      }
    />
  );
}

function Project({ title, image, description, link, technologies }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start({
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.5,
          duration: 1,
        },
      });
    } else {
      animation.start({
        y: 30,
      });
    }
  }, [isInView, animation]);
  return (
    <Box
      fontSize={{ base: "0.8rem", sm: "1rem" }}
      ref={ref}
      as={motion.div}
      animate={animation}
      paddingBlock="5rem"
      marginInline="1rem"
      borderTop="solid 1px"
      borderTopColor="gray.300"
    >
      <Flex
        gap="5rem"
        flexDirection={{
          base: "column-reverse",
          sm: "column-reverse",
          md: "row",
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
          loading="lazy"
        />
        <VStack alignItems="flex-start">
          <Heading>
            {title + " "}
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
