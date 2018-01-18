// @flow
import * as React from 'react';

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
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
          }
        `}</style>
      </span>
    );
  }
}

//export default index;
//export default () => <div>Welcome to next.js! testik</div>;
