import React, { Component } from "react";
import { Flex, ListItem } from "@chakra-ui/core";
import Task from "./Task";
import TaskList from "./TaskList";
import TaskEntry from "./TaskEntry";

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
