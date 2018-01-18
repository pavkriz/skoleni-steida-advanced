// @flow
import * as React from 'react';
import Text from '../components/Text';

type Props = { dt: number };
type Props2 = { +immutableAttr: number };

type Age = number;
type EnumA = 1 | 2;

type State = {|
  firstMsg: string,
  secondMsg: string,
|};

export default class index extends React.PureComponent<Props, State> {
  static getInitialProps(): Props {
    return {
      dt: Date.now(),
    };
  }
  state = {
    firstMsg: 'Welcome',
    secondMsg: 'Fuck you!',
  };
  componentDidMount() {
    //this.setState({ a: 1 });
  }
  render() {
    return (
      <Text bold={true}>Welcome to next.js! testik xx {this.props.dt}</Text>
    );
  }
}

//export default index;
//export default () => <div>Welcome to next.js! testik</div>;
