import React, {Component} from "react";
import {List} from "@chakra-ui/core";

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: props.tasks };
    }

    render() {
        return (
            <List spacing={3} px="0">
                {this.state.tasks}
            </List>
        );
    }
}