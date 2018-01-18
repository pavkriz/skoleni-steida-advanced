// @flow
import * as React from 'react';
import Text from './Text';

type Value = string;

type Props = {
  value: string,
  label: string,
  onChange: (value: Value) => void,
};

export default class TextInput extends React.PureComponent<Props> {
  handleInputChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.props.onChange(event.currentTarget.value);
  };
  render() {
    return (
      <React.Fragment>
        <Text>{this.props.label}: </Text>
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleInputChange}
        />
        <style jsx>{`
          input {
            color: #333;
            ${this.props.bold === true ? 'font-weight: bold' : ''};
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
          }
        `}</style>
      </React.Fragment>
    );
  }
}
