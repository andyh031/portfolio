import {
  Heading,
  SimpleGrid,
  VStack,
  CircularProgress,
  Text,
} from '@chakra-ui/react';

export default function Skills() {
  const skills = [
    ['JavaScript', '100'],
    ['Python', '100'],
    ['Java', '100'],
    ['SQL', '100'],
    ['HTML', '100'],
    ['CSS', '100'],
    ['R', '100'],
    ['C/C++', '90'],
    ['TypeScript', '60'],
  ];

  return (
    <>
      <Heading marginBottom="1rem">Technical Skills</Heading>
      <SimpleGrid
        margin="auto"
        maxWidth="300px"
        minChildWidth="30px"
        spacing="100px"
      >
        {skills.map((skill) => {
          return (
            <>
              <VStack>
                <Text>{skill[0]}</Text>
                <CircularProgress value={skill[1]} />
              </VStack>
            </>
          );
        })}
      </SimpleGrid>
    </>
  );
}
