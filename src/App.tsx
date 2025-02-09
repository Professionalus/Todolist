import '@mantine/core/styles.css';
import { Button, Checkbox, Input } from "@mantine/core";
import './App.css';
import { ChangeEvent, FormEvent, useState } from "react";

export default function App() {

    interface toDoItem {
        id: string,
        name: string,
        checked: boolean
    }

    const [newItem, setNewItem] = useState("");
    const [toDoItems, setToDoItems] = useState<toDoItem[]>([]);

    function handleNewItemSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setToDoItems((currentToDoItems) => {
            return [...currentToDoItems, {id: crypto.randomUUID(), name: newItem, checked: false}]
        });
        setNewItem("");
    }

    function handleNewItemInputChange(event: ChangeEvent<HTMLInputElement>) {
        setNewItem(event.target.value);
    }

    function handleToDoItemCheckboxChange(id: string, event: ChangeEvent<HTMLInputElement>) {
        setToDoItems((currentToDoItems) => {
            return currentToDoItems.map(item =>
                item.id === id ? {...item, checked: event.target.checked} : item)
        });
    }

    return (
        <div className={"to-do-wrapper"}>
            <div className={"to-do-title"}>
                New Item
            </div>
            <form onSubmit={(event) => {handleNewItemSubmit(event)}} className={"new-item-wrapper"}>
                <Input onChange={(event) => {handleNewItemInputChange(event)}}
                       value={newItem}
                       size="md"
                       placeholder="Irj"/>
                <Button type="submit">Add</Button>
            </form>
            <div className={"to-do-title"}>
                Todo List
            </div>
            {toDoItems.length === 0 ? <div className={"to-do-item-is-empty"}>The list is empty!</div> : null}
            <div className={"to-do-item-wrapper"}>
                {toDoItems.map(item =>
                    toDoItem(item)
                )}
            </div>
        </div>
    );

    function toDoItem(item: toDoItem) {
        return (
            <div className={"to-do-item"} key={item.id}>
                <Checkbox onChange={(event) => handleToDoItemCheckboxChange(item.id, event)}
                          color="green"
                          variant="outline"
                          label={item.name}
                          checked={item.checked}
                          classNames={{
                              label: item.checked ? "item-completed" : ""
                          }}
                />
                <Button variant="outline" color="red">Delete</Button>
            </div>
        );
    }
}