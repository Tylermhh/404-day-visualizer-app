import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {Button, Stack, Offcanvas} from 'react-bootstrap';
import { getUser } from "./../../api/UserHooks";
import { Category } from "./../../types/types"
import UserCategoryTable from "./../Table/UserCategoryTable";
import { useAuth } from './../../context/AuthContext';

const UserLogoutOffCanvas: React.FC<{}> = (input) => {    
    const [show, setShow] = useState(false);

    const [username, setUsername] = useState("");
    const [categories, setCategories] = useState<Category[]>([]);

    const { logout } = useAuth();
    const navigate = useNavigate();
    const logoutHandle = () => {
        logout();
        navigate('/');
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getUser((localStorage.getItem('userID') as string))
        .then(res => {
            res.json().then(data => {
                setUsername(data.username)
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
                            Username: {username}
                        </text>
                        <UserCategoryTable categories={categories}/>
                        <Button variant="primary" onClick={logoutHandle}>
                            Logout
                        </Button>
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas>
        </>
  );
}

export default UserLogoutOffCanvas;