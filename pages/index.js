// @flow
import * as React from 'react';
import Text from '../components/Text';
import TextInput from '../components/TextInput';

type State = {|
  name: string,
  description: string,
|};

export default class index extends React.PureComponent<{}, State> {
  state = {
    name: 'aa',
    description: 'bbb',
  };
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

//export default index;
//export default () => <div>Welcome to next.js! testik</div>;
