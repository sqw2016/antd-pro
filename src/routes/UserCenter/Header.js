import React, { Component } from 'react';
import {
  connect,
} from 'dva';

import styles from './Header.less';

@connect(state => state)

export default class Header extends Component {
  render() {
    return (
      <div>
        Header
      </div>
    );
  }
}
