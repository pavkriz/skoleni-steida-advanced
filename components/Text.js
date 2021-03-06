// @flow
import * as React from 'react';
import { fontFamily } from '../theme/index';

type Props = {
  children: React.Node,
  bold?: boolean,
};

export default class Text extends React.PureComponent<Props> {
  render() {
    return (
      <span>
        {this.props.children}
        <style jsx>{`
          span {
            color: #333;
            ${this.props.bold === true ? 'font-weight: bold' : ''};
            font-family: ${fontFamily};
          }
        `}</style>
      </span>
    );
  }
}

//export default index;
//export default () => <div>Welcome to next.js! testik</div>;
