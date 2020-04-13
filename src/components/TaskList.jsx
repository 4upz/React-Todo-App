import React, { Component } from "react";
import { List } from "@chakra-ui/core";

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: props.tasks };
    }

    render() {
        return (
            <List spacing={3} px="0" width="80%" mx="auto" textAlign="left">
                {this.state.tasks}
            </List>
        );
    }
}
