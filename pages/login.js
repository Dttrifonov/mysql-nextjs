import { useState } from "react";
import React from "react";
import { Modal, Input,useInput, Grid, Button, Spacer, Text } from "@nextui-org/react";


function Login() {
  const [us_nickname, setUsNickname] = useState('');
  const [us_password, setUsPassword] = useState('');
  const [message, setMessage] = useState('');
  const [visible, setVisible] = React.useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ us_nickname, us_password })
    });

    const roleadm = `admin`;
    const rolecommon = `commonuser`;
    const data = await res.json();
    setMessage(data.message);
    if (data.success && data.message === roleadm) {

      // Redirect to dashboard or home page for admin
      window.location.href = '/postuser/staffuser';
    } else if (data.success && data.message === rolecommon) {
      // Redirect to staff page for common user
      window.location.href = '/postdlvreq/deliveryreq';
    } else {
      setMessage(data.message);
    }
  }

  return (
    <>
    <div>
    <Modal
     preventClose
     blur
     aria-labelledby="modal-title"
     open={visible}
     >
      <form onSubmit={handleSubmit}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Spacer x={1}/>
            <Text b size={18}>
            Wing Express
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Въведи потребител"
            label="Потребителско име"
            name="us_nickname" 
            onChange={(e) => setUsNickname(e.target.value)} 
            value={us_nickname}
          />

          <Input.Password
            clearable
            bordered
            color="primary"
            fullWidth
            size="lg"
            type="password"
            label="Парола"
            placeholder="Въведи парола"
            name="us_password" 
            onChange={(e) => setUsPassword(e.target.value)}
            value={us_password}
          />
        </Modal.Body>
   
        <Modal.Footer>
           <Button type= "submit" bordered color="primary" auto >
            Login
           </Button>
        </Modal.Footer>
         {message && <p>{message}</p>}
      </form>
    </Modal>
    </div>
    </>
  );
}

export default Login;
