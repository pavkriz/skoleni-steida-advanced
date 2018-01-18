// @flow
import * as React from 'react';
import Text from '../components/Text';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Form from '../components/Form';

type ValidationError =
  | { type: 'isRequired' }
  | { type: 'minLength', minLength: number }
  | { type: 'maxLength', maxLength: number }
  | { type: 'range', minLength: number, maxLength: number };

type ValidationErrors<T> = {
  [key: $Keys<T>]: ?ValidationError,
};

type Fields = {
  name: string,
  description: string,
};

type State = {
  // name: string,
  // description: string,
  // validationErrors: {
  //   name?: ValidationError,
  //   description?: ValidationError,
  // },
  validationErrors: ValidationErrors<Fields>,
} & Fields;

const initialState = {
  name: 'aa',
  description: 'bbb',
  validationErrors: {},
};

export default class index extends React.PureComponent<{}, State> {
  state = initialState;

  handleFormSubmit = () => {
    const variables = {
      name: this.state.name.trim(),
      description: this.state.description.trim(),
    };

    const validate = variables => {
      if (variables.name.length === 0) {
        return { name: { type: 'isRequired' } };
      }
    };

    const validationErrors = validate(variables);

    if (validationErrors) {
      this.setState({ validationErrors });
      return;
    }

    this.setState(initialState); // reset form
  };
  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Text bold={true}>Welcome to next.js!</Text>
        <br />
        <TextInput
          label="Name"
          value={this.state.name}
          onChange={name => this.setState({ name })}
        />
        <br />
        <TextInput
          label="Description"
          value={this.state.description}
          onChange={description => this.setState({ description })}
        />
        <br />
        <Button>submit</Button>
      </Form>
    );
  }
}

//export default index;
//export default () => <div>Welcome to next.js! testik</div>;
