import { Box, VStack, Text, Heading } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function Experience() {
  return (
    <>
      <Box
        margin="auto"
        marginBottom="2rem"
        width="clamp(500px, 70vw, 1000px)"
        marginTop="6rem"
      >
        <Box minH="90vh">
          <VStack gap="1.5rem" alignItems="flex-start">
            <Text fontSize="4rem" fontWeight="bold">
              Experience
            </Text>
            <Text color="#0f1b61" fontSize="1.5rem">
              A place of new beginnings.
            </Text>
            <Box textAlign="right" mt="3rem" w="clamp(15px, 25vw, 130px)">
              Scroll <ChevronDownIcon />
            </Box>
            <Box
              alignSelf="flex-start"
              w="clamp(10px, 20vw, 100px)"
              h="clamp(100px, 40vh, 600px)"
              borderStyle="solid"
              borderColor="gray.600"
              borderRightWidth="1px"
            ></Box>
          </VStack>
        </Box>
        <Box>
          <Heading>Waiter/Server</Heading>
        </Box>
      </Box>
    </>
  );
}
