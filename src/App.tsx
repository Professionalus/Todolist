import '@mantine/core/styles.css';
import { Button, Checkbox, Input } from "@mantine/core";
import './App.css';

export default function App() {

    return (
        <div className={"to-do-wrapper"}>
            <div className={"to-do-title"}>
                New Item
            </div>
            <div className={"new-item-wrapper"}>
                <Input size="md" placeholder="Irj"/>
                <Button>Add</Button>
            </div>
            <div className={"to-do-title"}>
                Todo List
            </div>
            <div className={"to-do-item"}>
                <Checkbox
                    defaultChecked
                    label="I agree to sell "
                />
                <Button>Delete</Button>
            </div>
            <div className={"to-do-item"}>
                <Checkbox
                    defaultChecked
                    label="I agree to sell "
                />
                <Button>Delete</Button>
            </div>
        </div>
    );
}
