import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

export default function Scroller() {
  return (
    <>
      <Box
        color="gray.400"
        textAlign="right"
        mt="3rem"
        w="clamp(15px, 25vw, 130px)"
      >
        Scroll <ChevronDownIcon />
      </Box>
      <Box
        alignSelf="flex-start"
        w="clamp(10px, 20vw, 100px)"
        h="clamp(100px, 50vh, 600px)"
        borderStyle="solid"
        borderColor="gray.300"
        borderRightWidth="1px"
      ></Box>
    </>
  );
}
