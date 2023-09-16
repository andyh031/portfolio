import './App.css';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Header from './components/Header';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { extendTheme } from '@chakra-ui/react';

function App() {
  const [bkgColor, setBkgColor] = useState('white');
  const [showDocText, setShowDocText] = useState(true);
  const breakpoints = {
    base: '0px',
    sm: '320px',
    md: '875px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  };

  const theme = extendTheme({ breakpoints });

  return (
    <ChakraProvider theme={theme}>
      <Box
        as={motion.div}
        variants={{
          initial: { height: 0, opacity: 0 },
          animate: { height: '100%', opacity: 1 },
        }}
        initial="initial"
        animate="animate"
        transition="1s ease-in-out"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="-1"
        w={{ base: '100vw', md: '80vw', xl: '1200px' }}
        bgColor={bkgColor}
      />
      <Box
        pointerEvents="none"
        w="100%"
        h="100%"
        borderStyle="solid"
        borderColor="white"
        position="fixed"
        zIndex="1000"
        borderWidth="1.5rem"
      ></Box>
      <Header setShowDocText={setShowDocText} />
      {showDocText && (
        <Routes>
          <Route
            path="/"
            exact
            element={<Homepage setBkgColor={setBkgColor} />}
          />
          <Route
            path="/projects"
            element={<Projects setBkgColor={setBkgColor} />}
          />
          <Route
            path="/experience"
            element={<Experience setBkgColor={setBkgColor} />}
          />
        </Routes>
      )}
    </ChakraProvider>
  );
}

export default App;
