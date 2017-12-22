import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Affix, Button } from 'antd';
import styles from './Layout.less';

const { Header, Sider, Footer, Content } = Layout;
const { SubMenu } = Menu;
export default class LayoutStudy extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div>
        {/* 固定元素 */}
        <Affix onChange={() => { alert('change'); }}>
          <div className={styles.title}>Affix 固定显示内容</div>
          <Button type="primary">固定显示</Button>
        </Affix>
        <div className={styles.title}>Layout Study</div>
        <div className={styles.container}>
          {/* 基础布局 */}
          <div className={styles.title}>基础布局</div>
          <Layout>
            <Header className={styles.layout_header}>Header</Header>
            <Content className={styles.layout_content}>Content</Content>
            <Footer className={styles.layout_footer}>Footer</Footer>
          </Layout>
          {/* 带有侧边栏的布局 */}
          <div className={styles.title}>带有侧边栏的布局，侧边栏和Content平齐,侧边栏在左侧</div>
          <Layout>
            <Header className={styles.layout_header}>Header</Header>
            <Layout>
              <Sider className={styles.layout_sider}>Sider</Sider>
              <Content className={styles.layout_content}>Content</Content>
            </Layout>
            <Footer className={styles.layout_footer}>Footer</Footer>
          </Layout>
          <div className={styles.title}>带有侧边栏的布局，侧边栏和Content平齐,侧边栏在右侧</div>
          <Layout>
            <Header className={styles.layout_header}>Header</Header>
            <Layout>
              <Content className={styles.layout_content}>Content</Content>
              <Sider className={styles.layout_sider}>Sider</Sider>
            </Layout>
            <Footer className={styles.layout_footer}>Footer</Footer>
          </Layout>
          <div className={styles.title}>带有侧边栏的布局，侧边栏高度100%,侧边栏在左侧</div>
          <Layout>
            <Sider className={styles.layout_sider}>Sider</Sider>
            <Layout>
              <Header className={styles.layout_header}>Header</Header>
              <Content className={styles.layout_content}>Content</Content>
              <Footer className={styles.layout_footer}>Footer</Footer>
            </Layout>
          </Layout>
          <div className={styles.title}>带有侧边栏的布局，侧边栏高度100%,侧边栏在右侧</div>
          <Layout>
            <Layout>
              <Header className={styles.layout_header}>Header</Header>
              <Content className={styles.layout_content}>Content</Content>
              <Footer className={styles.layout_footer}>Footer</Footer>
            </Layout>
            <Sider className={styles.layout_sider}>Sider</Sider>
          </Layout>
          <div className={styles.title}>带导航和辅助菜单的经典布局</div>
          <Layout>
            <Header className={styles.layout_header}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content className={styles.layout_content}>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 280, color: 'black' }}>Content</div>
            </Content>
            <Footer className={styles.layout_footer}>Footer</Footer>
          </Layout>
          <div className={styles.title}>带导航和辅助菜单的经典布局+左侧菜单</div>
          <Layout>
            <Header className={styles.layout_header}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider
                collaspible="true"
                collapsed={this.state.collapsed}
                onClick={this.onCollapse}
              >
                <Menu
                  mode="inline"
                  theme="dark"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="user" /><span>subnav 1</span></span>}>
                    <Menu.Item key="user1">option 1</Menu.Item>
                    <Menu.Item key="user2">option 2</Menu.Item>
                    <Menu.Item key="user3">option 3</Menu.Item>
                    <Menu.Item key="user4">option 4</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="book" /><span>subnav 2</span></span>}>
                    <Menu.Item key="book1">option 1</Menu.Item>
                    <Menu.Item key="book2">option 2</Menu.Item>
                    <Menu.Item key="book3">option 3</Menu.Item>
                    <Menu.Item key="book4">option 4</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content className={styles.layout_content}>
                <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280, color: 'black' }}>Content</div>
              </Content>
            </Layout>
            <Footer className={styles.layout_footer}>Footer</Footer>
          </Layout>
          <div className={styles.title}>带导航和辅助菜单的经典布局+左侧菜单(可缩放)</div>
          <Layout>
            <Sider
              collapsiable="true"
              collapsed={this.state.collapsed}
            >
              <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" /><span>subnav 1</span></span>}>
                  <Menu.Item key="user1">option 1</Menu.Item>
                  <Menu.Item key="user2">option 2</Menu.Item>
                  <Menu.Item key="user3">option 3</Menu.Item>
                  <Menu.Item key="user4">option 4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="book" /><span>subnav 2</span></span>}>
                  <Menu.Item key="book1">option 1</Menu.Item>
                  <Menu.Item key="book2">option 2</Menu.Item>
                  <Menu.Item key="book3">option 3</Menu.Item>
                  <Menu.Item key="book4">option 4</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Header className={styles.layout_header}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.onCollapse}
                />
              </Header>
              <Content className={styles.layout_content}>
                <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280, color: 'black' }}>Content</div>
              </Content>
              <Footer className={styles.layout_footer}>Footer</Footer>
            </Layout>
          </Layout>
        </div>
      </div>
    );
  }
}
