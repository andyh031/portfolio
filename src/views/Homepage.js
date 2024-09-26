import { Box } from "@chakra-ui/react";
import pfp from "../images/pfp.png";
import About from "../components/homepage/About";
import PageStart from "../components/page/PageStart";
import PageLoader from "../components/page/PageLoader";
import { SECTION_BG_COLOUR } from "../util/constants";

export default function Homepage({ setBkgColor }) {
  setBkgColor(SECTION_BG_COLOUR.HOME);

  return (
    <PageLoader
      images={[pfp]}
      component={
        <Box
          margin="auto"
          marginBottom="2rem"
          width="clamp(300px, 70vw, 1000px)"
          marginTop="6rem"
        >
          <PageStart
            headerText="Hey, I'm Andy!"
            descriptionText="Welcome to my world!"
            image={pfp}
          />
          <About />
        </Box>
      }
    />
  );
}
