import {
  Flex,
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Menu,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EXTERNAL_LINKS, WEBSITE_PATHS } from "../util/constants";

export default function Header({ setShowDocText }) {
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    isExpanded ? setShowDocText(false) : setShowDocText(true);
  }, [isExpanded, setShowDocText]);

  return (
    <Box
      zIndex="900"
      position="sticky"
      margin="auto"
      width="clamp(300px, 70vw, 1000px)"
      paddingInline={{ base: "0.5rem", sm: "3rem" }}
      paddingTop="3rem"
    >
      <Flex justifyContent="space-between">
        <Menu>
          <Button
            _hover={{ transform: "scale(1.1)", bg: "gray.400" }}
            letterSpacing="0.1em"
            fontSize="xl"
            fontWeight="semibold"
            onClick={() => {
              setIsExpanded((prev) => !prev);
            }}
          >
            {isExpanded ? (
              <HStack>
                <Text>CLOSE</Text>
                <ChevronUpIcon />
              </HStack>
            ) : (
              <HStack>
                <Text>MENU</Text>
                <ChevronDownIcon />
              </HStack>
            )}
          </Button>
        </Menu>
      </Flex>
      {isExpanded && <ExpandedHeader />}
    </Box>
  );
}

function ExpandedHeader() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <VStack alignItems="left">
        <HStack>
          <Box
            as={motion.div}
            w={{ base: "0", sm: "75px" }}
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            borderBottom="2px solid black"
            transition="0.3s ease-out"
          />
          <motion.ul variants={container} initial="hidden" animate="show">
            <Icon link={EXTERNAL_LINKS.GITHUB} icon={<AiFillGithub />} />
            <Icon link={EXTERNAL_LINKS.LINKEDIN} icon={<AiFillLinkedin />} />
            <Icon
              link={"mailto:" + EXTERNAL_LINKS.EMAIL}
              icon={<EmailIcon />}
            />
          </motion.ul>
        </HStack>

        <LinkTile
          path={WEBSITE_PATHS.HOME}
          transition={{ duration: 0.6, delay: 0.8 }}
          name="Home"
        />
        <LinkTile
          path={WEBSITE_PATHS.PROJECTS}
          transition={{ duration: 0.6, delay: 1 }}
          name="Projects"
        />
        <LinkTile
          path={WEBSITE_PATHS.EXPERIENCE}
          transition={{ duration: 0.6, delay: 1.2 }}
          name="Experience"
        />
      </VStack>
    </>
  );

  function Icon({ link, icon }) {
    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    };

    return (
      <motion.li className="left" variants={item}>
        <Link href={link}>
          <IconButton
            _hover={{ transform: "scale(1.1)", bg: "gray.400" }}
            icon={icon}
          ></IconButton>
        </Link>
      </motion.li>
    );
  }

  function LinkTile({ path, transition, name }) {
    return (
      <Link href={path} fontSize={{ base: "1.2rem", sm: "2.1rem", md: "3rem" }}>
        <motion.div
          className="link"
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={transition}
        >
          {name}
        </motion.div>
      </Link>
    );
  }
}
