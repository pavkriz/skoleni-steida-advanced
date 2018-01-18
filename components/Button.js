// @flow
import * as React from 'react';
import { fontFamily } from '../theme/index';

type Props = {
  children: React.Node,
  onPress?: () => void,
};

export default class Button extends React.PureComponent<Props> {
  handleButtonClick = () => {
    if (this.props.onPress) this.props.onPress();
  };
  render() {
    return (
      <button onClick={this.handleButtonClick}>
        {this.props.children}
        <style jsx>{`
          span {
            color: #333;
            ${this.props.bold === true ? 'font-weight: bold' : ''};
            font-family: ;
          }
        `}</style>
      </button>
    );
  }
}

//export default index;
//export default () => <div>Welcome to next.js! testik</div>;
