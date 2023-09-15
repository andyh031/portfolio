import {
  Flex,
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Menu,
  Image,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useContext, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const slideControls = useAnimation();

  useEffect(() => {
    if (isExpanded) {
    } else {
    }
  }, isExpanded);

  return (
    <Box
      zIndex="900"
      position="sticky"
      top="1rem"
      margin="auto"
      w={{ base: '90vw', md: '70vw', xl: '1200px' }}
      paddingInline="4rem"
      paddingTop="3rem"
    >
      <Flex justifyContent="space-between">
        <Menu>
          <Button
            _hover={{
              letterSpacing: '0.3rem',
              bgColor: 'gray.400',
            }}
            letterSpacing="0.1em"
            fontSize="xl"
            fontWeight="semibold"
            onClick={() => setIsExpanded((prev) => !prev)}
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
  return (
    <VStack alignItems="left" mt="2rem">
      <HStack>
        <Box
          as={motion.div}
          w="75px"
          variants={{
            hidden: { opacity: 0, x: 200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          borderBottom="2px solid black"
          transition="0.3s ease-out"
        />
        <HStack
          as={motion.div}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition="0.5s ease-in"
        >
          <Link href="https://github.com/andyh031" isExternal>
            <IconButton
              _hover={{ transform: 'scale(1.05)', bg: 'gray.400' }}
              icon={<AiFillGithub />}
            ></IconButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/andy-hu-a78304280/"
            isExternal
          >
            <IconButton
              _hover={{ transform: 'scale(1.05)', bg: 'gray.400' }}
              icon={<AiFillLinkedin />}
            ></IconButton>
          </Link>
          <Link href="mailto:andy45.hu@gmail.com" isExternal>
            <IconButton
              _hover={{ transform: 'scale(1.05)', bg: 'gray.400' }}
              icon={<EmailIcon />}
            ></IconButton>
          </Link>
        </HStack>
      </HStack>
      <Link href="/" padding="1rem" fontSize="2em">
        Home
      </Link>
      <Link href="/projects" padding="1rem" fontSize="2em">
        Projects
      </Link>
      <Link href="/experience" padding="1rem" fontSize="2em">
        Experience
      </Link>
    </VStack>
  );
}
