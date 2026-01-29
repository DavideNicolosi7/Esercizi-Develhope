import { useEffect, useRef } from "react";

import MountedComponent from "../useRef/MountedComponent";
import Counter from "./Counter";
import { Form } from "react-bootstrap";

export default function FocusableInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Form className="p-4 border  shadow-sm">
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          ref={inputRef}
          type="text"
          placeholder="Inserisci username"
        />
      </Form.Group>

      <MountedComponent />
      <Counter />
    </Form>
  );
}
