import '@mantine/core/styles.css';
import { Button } from "@mantine/core";
import './App.css';

export default function App() {

    return (
        <div className={"to-do-wrapper"}>
            <div className={"to-do-title"}>
                New Item
            </div>
            <div className={"new-item-wrapper"}>
                <input type="text"></input>
                <Button>Add</Button>
            </div>
            <div className={"to-do-title"}>
                 Todo List
            </div>
            <div className={"to-do-item"}>
                <input type="checkbox"></input>
                <h3>Test1</h3>
                <Button>Delete</Button>
            </div>
            <div className={"to-do-item"}>
                <input type="checkbox"></input>
                <h3>test2</h3>
                <Button>Delete</Button>
            </div>
        </div>
    );
}
