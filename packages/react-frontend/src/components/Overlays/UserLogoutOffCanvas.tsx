import { useState } from 'react';
import {Button, Stack, Offcanvas} from 'react-bootstrap';

const UserLogoutOffCanvas: React.FC<{}> = (input) => {    
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                    user stuff
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