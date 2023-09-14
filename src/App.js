import './App.css';
import Introduction from './components/Introduction';
import Header from './components/Header';
import { ChakraProvider, Box } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box
        bgColor="#f4f9fc"
        minWidth="100vw"
        minHeight="100vh"
        borderStyle="solid"
        borderWidth="1.5rem"
        borderColor="white"
      >
        <Header />
        <Introduction />
      </Box>
    </ChakraProvider>
  );
}

export default App;
