import React, { useState, useEffect } from "react";
import {Button, Stack, Offcanvas} from 'react-bootstrap';
import { getUser } from "./../../api/UserHooks";
import { userID } from "./../User";
import { Category } from "./../../types/types"

const UserLogoutOffCanvas: React.FC<{}> = (input) => {    
    const [show, setShow] = useState(false);

    const [categories, setCategories] = useState<Category[]>([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getUser(userID)
        .then(res => {
            res.json().then(data => {
                setCategories(data.categories)
            });
        })
        .catch(err => {
            console.error(err);
        });
    });

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                User
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        User Profile
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack gap={2}>
                        <text>
                            User Categories
                        </text>
                        <text>
                            {JSON.stringify(categories)}
                        </text>
                        <Button variant="primary">
                            Logout
                        </Button>
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas>
        </>
  );
}

export default UserLogoutOffCanvas;