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
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Header({ setShowDocText }) {
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    isExpanded ? setShowDocText(false) : setShowDocText(true);
  }, [isExpanded]);

  return (
    <Box
      zIndex="900"
      position="sticky"
      top="1rem"
      margin="auto"
      width="clamp(300px, 70vw, 1000px)"
      paddingInline={{ base: '0.5rem', sm: '3rem' }}
      paddingTop="3rem"
    >
      <Flex justifyContent="space-between">
        <Menu>
          <Button
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

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <VStack alignItems="left">
      <HStack>
        <Box
          as={motion.div}
          w={{ base: '0', sm: '75px' }}
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
          <motion.li className="left" variants={item}>
            <Link href="https://github.com/andyh031" isExternal>
              <IconButton
                _hover={{ transform: 'scale(1.05)', bg: 'gray.400' }}
                icon={<AiFillGithub />}
              ></IconButton>
            </Link>
          </motion.li>
          <motion.li className="left" variants={item}>
            <Link
              href="https://www.linkedin.com/in/andy-hu-a78304280/"
              isExternal
            >
              <IconButton
                _hover={{ transform: 'scale(1.05)', bg: 'gray.400' }}
                icon={<AiFillLinkedin />}
              ></IconButton>
            </Link>
          </motion.li>
          <motion.li className="left" variants={item}>
            <Link href="mailto:andy45.hu@gmail.com" isExternal>
              <IconButton
                _hover={{ transform: 'scale(1.05)', bg: 'gray.400' }}
                icon={<EmailIcon />}
              ></IconButton>
            </Link>
          </motion.li>
        </motion.ul>
      </HStack>
      <Link href="/" fontSize={{ base: '1.2rem', sm: '2.1rem', md: '3rem' }}>
        <motion.div
          className="link"
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Home
        </motion.div>
      </Link>
      <Link
        href="/projects"
        fontSize={{ base: '1.2rem', sm: '2.1rem', md: '3rem' }}
      >
        <motion.div
          className="link"
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 1 }}
        >
          Projects
        </motion.div>
      </Link>
      <Link
        href="/experience"
        fontSize={{ base: '1.2rem', sm: '2.1rem', md: '3rem' }}
      >
        <motion.div
          className="link"
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Experience
        </motion.div>
      </Link>
    </VStack>
  );
}
