import React, { Component } from "react";
import {
    List,
    ListItem,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from "@chakra-ui/core";

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: props.tasks };
    }

    render() {
        // Build a list of interactive tasks from the current list of task objects
        const currentList = this.state.tasks.map((task, index) => {
            return (
                <ListItem key={index}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon="chevron-down"
                            variant="ghost"
                        >
                            {task}
                        </MenuButton>
                        <MenuList>
                            {/* <MenuItem>Edit</MenuItem> */}
                            <MenuItem
                                onClick={() => this.props.deleteTask(index)}
                            >
                                Delete
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </ListItem>
            );
        });
        return (
            <List
                spacing={3}
                px="0"
                my="10px"
                width="80%"
                mx="auto"
                textAlign="left"
            >
                {currentList}
            </List>
        );
    }
}
