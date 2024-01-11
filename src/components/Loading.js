import { Box, Flex } from '@chakra-ui/react';
import { RingLoader } from 'react-spinners';

export default function Loading() {
  const color = 'rgb(54, 215, 183)';

  return (
    <>
      <Box
        margin="auto"
        marginBottom="2rem"
        width="clamp(300px, 70vw, 1000px)"
        marginTop="10rem"
      >
        <Flex justifyContent="center">
          <RingLoader color={color} size={150} />;
        </Flex>
      </Box>
    </>
  );
}
