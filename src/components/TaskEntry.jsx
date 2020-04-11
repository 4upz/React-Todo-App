import React, { Component } from "react";
import { FormControl, Input, FormHelperText } from "@chakra-ui/core";
import TaskList from "./TaskList";

const enterKey = 13;

export default class TaskEntry extends Component {
    // Constructor for Controlled Form
    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    // Keeps up with any value changes of the input so that it is reflected when the component is rendered via its state
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    // Handles the submission of the input based on the current value stored in its state
    handleSubmit(event) {
        alert(this.state.value);
        // Make the text form empty again :)
        this.setState({ value: "" });
        event.preventDefault();
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
                <Input
                    type="text"
                    value={this.state.value}
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
                <FormHelperText id="task-entry-help">
                    Type a new task and press 'enter'.
                </FormHelperText>
            </FormControl>
        );
    }
}
