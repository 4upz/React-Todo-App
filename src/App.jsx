import React from "react";
import TaskList from "./components/TaskList";
/* Styling */
import "./App.css";
import { ThemeProvider, Heading, Text, Box, Flex } from "@chakra-ui/core";
import TaskEntry from "./components/TaskEntry";
// import customTheme from "./theme";

function App() {
    return (
        <ThemeProvider>
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
                <Flex className="App-Content" h="80%" flexDir="column">
                    <TaskList />
                    <TaskEntry />
                </Flex>
            </Box>
            <Flex className="Footer">
                <footer>
                    <Text>Copyright &copy; {currentYear()} Arik Smith</Text>
                </footer>
            </Flex>
        </ThemeProvider>
    );
}

export default App;

/* Grabs the current year to display in the copyright footer */
function currentYear() {
    return new Date().getFullYear();
}
