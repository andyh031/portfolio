import "./App.css";
import Homepage from "./views/Homepage";
import Projects from "./views/Projects";
import Experience from "./views/Experience";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import { useState } from "react";
import { motion } from "framer-motion";
import { extendTheme } from "@chakra-ui/react";
import { WEBSITE_PATHS } from "./util/constants";

function App() {
  const [bkgColor, setBkgColor] = useState("white");
  const [showDocText, setShowDocText] = useState(true);
  const breakpoints = {
    base: "0px",
    sm: "400px",
    md: "875px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };

  const theme = extendTheme({ breakpoints });

  return (
    <ChakraProvider theme={theme}>
      <Box
        as={motion.div}
        variants={{
          initial: { height: 0, opacity: 0 },
          animate: { height: "100%", opacity: 1 },
        }}
        initial="initial"
        animate="animate"
        transition="1s ease-in-out"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="-1"
        w={{ base: "100%", sm: "80vw", xl: "1200px" }}
        bgColor={bkgColor}
      />
      <Box
        pointerEvents="none"
        w="100%"
        h="100%"
        borderStyle={{ base: "none", sm: "solid" }}
        borderColor="white"
        position="fixed"
        zIndex="1000"
        borderWidth={{ base: "0", sm: "1.5rem" }}
      ></Box>
      <Header setShowDocText={setShowDocText} />
      {showDocText && (
        <Routes>
          <Route
            path={WEBSITE_PATHS.HOME}
            exact
            element={<Homepage setBkgColor={setBkgColor} />}
          />
          <Route
            path={WEBSITE_PATHS.PROJECTS}
            element={<Projects setBkgColor={setBkgColor} />}
          />
          <Route
            path={WEBSITE_PATHS.EXPERIENCE}
            element={<Experience setBkgColor={setBkgColor} />}
          />
        </Routes>
      )}
    </ChakraProvider>
  );
}

export default App;
