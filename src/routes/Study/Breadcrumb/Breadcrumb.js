import React from 'react';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Icon, Alert } from 'antd';
import styles from './Breadcrumb.less';


export default class BreadcrumbStudy extends React.Component {
  render() {
    const breadcrumbNameMap = {
      '/apps': 'Application List',
      '/apps/1': 'Application1',
      '/apps/2': 'Application2',
      '/apps/1/detail': 'Detail',
      '/apps/2/detail': 'Detail',
    };
    const Apps = () => (
      <ul>
        <li>
          <Link to="/apps/1">Option1</Link>: <Link to="/apps/1/detail">detail</Link>
        </li>
        <li>
          <Link to="/apps/2">Option2</Link>: <Link to="/apps/2/detail">detail</Link>
        </li>
      </ul>
    );
    const Home = withRouter((props) => {
      const { location } = props;
      const pathSnippets = location.pathname.split('/').filter(i => i);
      const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
          <Breadcrumb.Item key={url}>
            <Link to={url}>
              {breadcrumbNameMap[url]}
            </Link>
          </Breadcrumb.Item>
        );
      });
      const breadcrumbItems = [(
        <Breadcrumb.Item key="home">
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
      )].concat(extraBreadcrumbItems);
      return (
        <div className="demo">
          <div className="demo-nav">
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/apps">Application List</Link>
          </div>
          <Switch>
            <Route path="/apps" component={Apps} />
            <Route render={() => <span>Home Page</span>} />
          </Switch>
          <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
          <Breadcrumb>
            {breadcrumbItems}
          </Breadcrumb>
        </div>
      );
    });


    return (
      <div>
        <div className={styles.title}>Breadcrumb Study</div>
        <div className={styles.container}>
          {/* 面包屑基本用法 */}
          <div className={styles.title}>面包屑基本用法</div>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>School</Breadcrumb.Item>
            <Breadcrumb.Item>Market</Breadcrumb.Item>
            <Breadcrumb.Item>Street</Breadcrumb.Item>
          </Breadcrumb>
          {/* 带图标的面包屑 */}
          <div className={styles.title}>带图标的面包屑</div>
          <Breadcrumb>
            <Breadcrumb.Item href=""><Icon type="shop" />Market</Breadcrumb.Item>
            <Breadcrumb.Item href=""><Icon type="user" /><span>user</span></Breadcrumb.Item>
            <Breadcrumb.Item>Street</Breadcrumb.Item>
          </Breadcrumb>
          {/* 和route结合使用 */}
          <div className={styles.title}>面包屑和route结合使用</div>
          <Router>
            <Home />
          </Router>
          {/* 面包屑改变分隔符 */}
          <div className={styles.title}>面包屑改变分隔符</div>
          <Breadcrumb separator=">">
            <Breadcrumb.Item href=""><Icon type="shop" />Market</Breadcrumb.Item>
            <Breadcrumb.Item href=""><Icon type="user" /><span>user</span></Breadcrumb.Item>
            <Breadcrumb.Item>Street</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    );
  }
}
