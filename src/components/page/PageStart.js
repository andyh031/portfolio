import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Scroller from "../Scroller";
import PageImage from "./PageImage";

export default function PageStart({ headerText, descriptionText, image }) {
  return (
    <>
      <Box minH="70vh" marginInline={{ md: "minmax(1rem, 3rem)" }}>
        <Flex
          gap="3rem"
          justifyContent="space-between"
          flexDirection={{
            base: "column-reverse",
            sm: "column-reverse",
            md: "row",
          }}
          alignItems={{ base: "center", sm: "center", md: "stretch" }}
        >
          <VStack gap="1.5rem" alignItems="flex-start">
            <Text
              fontSize={{ base: "2.5rem", sm: "3.5rem", md: "3.5rem" }}
              fontWeight="bold"
            >
              {headerText}
            </Text>
            <Text
              color="#0f1b61"
              fontSize={{ base: "1.1rem", sm: "1.5rem", md: "1.5rem" }}
            >
              {descriptionText}
            </Text>
            <Scroller />
          </VStack>
          <PageImage image={image} />
        </Flex>
      </Box>
    </>
  );
}
