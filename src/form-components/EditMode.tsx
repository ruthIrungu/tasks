import React, { useState } from "react";
import Form from "react-bootstrap/esm/Form";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [edit, setEdit] = useState<boolean>(false);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Edit Mode</h3>
            </div>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-check"
                    label="Edit?"
                    checked={edit}
                    onChange={updateEdit}
                />
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            </div>
            <div>
                <Form.Group controlId="formMovieName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={updateName}
                        disabled={edit === false}
                    />
                </Form.Group>
            </div>
            <div>
                {name} is {isStudent ? "a student" : "not a student"}
            </div>
        </div>
    );
}
