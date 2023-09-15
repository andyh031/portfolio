import './App.css';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Header from './components/Header';
import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext(null);

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <HeaderContext.Provider value={{ isExpanded, setIsExpanded }}>
      <ChakraProvider>
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="-1"
          w={{ base: '100vw', md: '80vw', xl: '1200px' }}
          h="100%"
          bgColor="#f4f9fc"
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
        <Header />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </ChakraProvider>
    </HeaderContext.Provider>
  );
}

export default App;
