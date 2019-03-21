import React, { Component, Fragment } from "react";
import { Input, Button, Checkbox, Form, Segment } from "semantic-ui-react";

class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  onChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div>
      <div style={{position: "absolute",
          top: "calc(50% - 250px)",
          left: "calc(50% - 210px)",}}><h1>React Chat-Room</h1></div>
      <div
        style={{
          position: "absolute",
          top: "calc(50% - 210px)",
          left: "calc(50% - 210px)",
          borderRadius: "8px",
          opacity: "0.6",
          width: "420px",
          height: "auto",
          zIndex: "100",
          overflow: "hidden",
          border: "1px solid #ddd",
          backgroundColor: "rgb(255, 255, 255, 0.6)"
        }}
      >
       
        <Segment raised>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input
                type="text"
                placeholder="username"
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit" onClick={this.onSubmit}>
              Submit
            </Button>
          </Form>
        </Segment>
      </div>
      </div>
    );
  }
}
export default UsernameForm;
