import React, { Component } from "react";
import {
    Flex,
    FormControl,
    Input,
    FormLabel,
    List,
    ListItem,
} from "@chakra-ui/core";
import Task from "./Task";

const enterKey = 13;

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: "",
        };
    }

    // Adds a new Task to this component
    addNewTask(task) {
        // Adds task to the beginning of the list (Because we will display the newest tasks at the top of the list)
        let currentList = this.state.tasks;
        currentList.push(
            <ListItem key={currentList.length}>
                <Task taskName={task} />
            </ListItem>
        );
        this.setState({ tasks: currentList });
    }

    render() {
        return (
            <Flex className="App-Content" h="80%" flexDir="column">
                <TaskList tasks={this.state.tasks} />
                <TaskEntry
                    newTask={this.state.newTask}
                    addNewTask={this.addNewTask.bind(this)}
                />
            </Flex>
        );
    }
}

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: props.tasks };
    }

    render() {
        return (
            <List justifyContent="center" alignItems="flex-start" spacing={3}>
                {this.state.tasks}
            </List>
        );
    }
}

class TaskEntry extends Component {
    // Constructor for Controlled Form
    constructor(props) {
        super(props);
        this.state = { newTask: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    // Keeps up with any value changes of the input so that it is reflected when the component is rendered via its state
    handleChange(event) {
        this.setState({ newTask: event.target.value });
    }

    // Handles the submission of the input based on the current value stored in its state
    handleSubmit(event) {
        event.preventDefault();
        this.props.addNewTask(this.state.newTask);
        // Make the text form empty again
        this.setState({ newTask: "" });
    }

    // Check for when the 'enter' key is pressed
    handleKeyUp(event) {
        if (event.keyCode === enterKey) {
            this.handleSubmit(event);
        }
    }

    render() {
        return (
            <FormControl marginTop="auto" onKeyUp={this.handleKeyUp}>
                {/* Text Box for New Task Submission */}
                <FormLabel htmlFor="task-entry">
                    Type a new task below and press 'enter'.
                </FormLabel>
                <Input
                    type="text"
                    value={this.state.newTask}
                    onChange={this.handleChange}
                    px="0"
                    w="90%"
                    mx="5%"
                    textAlign="center"
                    id="task-entry"
                    borderColor="gray.300"
                    placeholder="What's do you need to do?"
                    aria-describedby="task-entry-help"
                />
            </FormControl>
        );
    }
}
