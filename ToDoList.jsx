import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';

const ToDoList = (props) => {
    const [Item, setItem] = useState("");
    const [newItems, setNewItem] = useState([]);
    const ItemEvent = (event) => {
        setItem(event.target.value);
    };
    const listOfItems = () => {
        setNewItem((prevValue) => {
            return [...prevValue, Item];
        });
        setItem(" ");

    }
    return ( < >
        <
        div className = "main_div" >
        <
        div className = "center_div" >
        <
        br / >
        <
        h1 > To Do List < /h1>  <
        br / >
        <
        input type = "text"
        value = { Item }
        placeholder = "Add To Items"
        onChange = { ItemEvent }
        / > <
        Button className = "newBtn"
        onClick = { listOfItems } > < AddIcon / > < /Button > <
        br / >
        <
        ol >

        {
            newItems.map((val, index) => {
                return <ListCom key = { index }
                text = {
                    val
                }
                />;

            })
        }

        <
        /ol> < br/ >
        <
        / div > < /
        div > <
        /> 
    );
};
export default ToDoList;