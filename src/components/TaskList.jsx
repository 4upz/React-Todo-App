import React, { Component } from "react";
import Task from "./Task";
import { Flex } from "@chakra-ui/core";

// Represents a list component containing task components
export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [<Task key="Dishes" taskName="Dishes" />] };
    }

    // Adds a new Task to this component
    addNewTask(task) {
        // Adds task to the beginning of the list (Because we will display the newest tasks at the top of the list)
        let currentList = this.state.tasks;
        currentList.push(<Task key={task} taskName={task} />);
        this.setState({ tasks: currentList });
    }

    render() {
        return (
            <Flex justifyContent="center" alignItems="flex-start">
                {this.state.tasks}
            </Flex>
        );
    }
}
