import React from "react";
import TodoApp from "./components/TodoApp";
/* Styling */
import "./App.css";
import { ThemeProvider, Heading, Text, Box, CSSReset } from "@chakra-ui/core";
// import customTheme from "./theme";


/* Grabs the current year to display in the copyright footer */
const currentYear = () => {
    return new Date().getFullYear();
}

function App() {
    return (
        <ThemeProvider>
            <CSSReset />
            <Box className="App" rounded="lg" boxShadow="lg" bg="white">
                <Heading
                    className="App-Header"
                    color
                    boxShadow="md"
                    mt={3}
                    py={3}
                >
                    To-Do List
                </Heading>
                <TodoApp />
            </Box>
            <Box my="1rem" color="white" textAlign="center">
                <footer>
                    <Text>Copyright &copy; {currentYear()} Arik Smith</Text>
                </footer>
            </Box>
        </ThemeProvider>
    );
}

export default App;
