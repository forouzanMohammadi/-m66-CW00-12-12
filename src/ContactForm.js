import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddContact(this.state.name);
  }

  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)} className="my-5">
        <Form.Group controlId="fullNameInput">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            name="name"
            onChange={(e) => {
              this.handleChangeInput(e);
            }}
            type="text"
          />
        </Form.Group>
        <Button type="submit" className="my-3">
          Submit
        </Button>
      </Form>
    );
  }
}