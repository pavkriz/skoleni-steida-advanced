// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
  onSubmit: () => void,
};

export default class Form extends React.PureComponent<Props> {
  handleFormSubmit = (event: Event) => {
    event.preventDefault();
    this.props.onSubmit();
  };
  render() {
    return <form onSubmit={this.handleFormSubmit}>{this.props.children}</form>;
  }
}

//export default index;
//export default () => <div>Welcome to next.js! testik</div>;
