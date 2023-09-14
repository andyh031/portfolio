import {
  Flex,
  Box,
  Button,
  Text,
  Stack,
  Menu,
  MenuButton,
  HStack,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box p="3rem">
      <Flex justifyContent="space-between">
        <Menu>
          <MenuButton
            _hover={{
              letterSpacing: '0.3rem',
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
          </MenuButton>
        </Menu>
        <Button>Contact Me</Button>
      </Flex>
      {isExpanded && <ExpandedHeader />}
    </Box>
  );
}

function ExpandedHeader() {
  return (
    <Stack mt="2rem">
      <Text padding="1rem" fontSize="2em">
        Home
      </Text>
      <Text padding="1rem" fontSize="2em">
        About
      </Text>
      <Text padding="1rem" fontSize="2em">
        Projects
      </Text>
      <Text padding="1rem" fontSize="2em">
        Experience
      </Text>
    </Stack>
  );
}
