import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Home.css";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Global from "./About"
import { useHistory } from 'react-router-dom';


export default function LoginOldVersion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
        return(
            <>
                <Router>
                    <Switch>
                        <Route exact path="/About" component={Global} />
                        <Redirect to="/About" />
                    </Switch>
                </Router>
            </>
        );
  }

  return (
    <div className="Login">
        <h1>Please Sign in to continue</h1>
        <br/>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()} onClick={()=>{history.push("/about");
        }}>
          Login
        </Button>
      </Form>
    </div>
  );
}