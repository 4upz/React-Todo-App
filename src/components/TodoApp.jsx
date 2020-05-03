import React, { Component } from "react";
import { Flex } from "@chakra-ui/core";
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
        // Now adds a dropdown menu element to the added task for editing and deleting it from the list
        currentList.push(<Task taskName={task} />);
        this.setState({ tasks: currentList });
    }

    // Removes a task from this component by its assigned index
    deleteTask(taskIndex) {
        let currentList = this.state.tasks;
        currentList.splice(taskIndex, 1);
        console.log(currentList);
        this.setState({ tasks: currentList });
    }

    render() {
        return (
            <Flex className="App-Content" h="85%" flexDir="column">
                <TaskList 
                tasks={this.state.tasks}
                deleteTask={this.deleteTask.bind(this)} 
                />
                <TaskEntry
                    newTask={this.state.newTask}
                    addNewTask={this.addNewTask.bind(this)}
                />
            </Flex>
        );
    }
}
