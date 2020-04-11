import React, { Component } from "react";
import { Checkbox } from "@chakra-ui/core";

// Represents a single task component
export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: props.taskName, // The name of this task
            isCompleted: false, // Whether the current task has been marked as completed
        };
    }
    render() {
        return (
            <Checkbox variantColor="blue" size="lg" borderColor="gray.300">
                {this.state.taskName}
            </Checkbox>
        );
    }
}
