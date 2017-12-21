import React from 'react';
import {
  connect,
} from 'dva';
import {
  Route,
} from 'dva/router';

import styles from './UserCenterLayout.less';

class UserCenterLayout extends React.Component {
  render() {
    const { getRouteData } = this.props;
    return (
      <div className={styles.main}>
        个人中心
        {
          // 生成路由
          getRouteData('UserCenterLayout').map((item) => {
              console.log(item.component);
              return (
                <Route
                  exact={item.exact}
                  key={item.path}
                  path={item.path}
                  component={item.component}
                />
              );
            }
          )
        }
      </div>
    );
  }
}

export default UserCenterLayout;

