import React from 'react';
import { Menu, Icon, Button } from 'antd';
import styles from './MenuStudy.less';

const { SubMenu, ItemGroup } = Menu;
export default class MenuStudy extends React.Component {
  state = {
    collapsed: false,
    openKey: 'subOne',
  };
  onChangeCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
  /* openKeys是一个数组，打开时为一个二元数组，第一个元素为上一次打开的key
    第二个元素为当前打开的key；
  关闭时为一个空数组
  */
  changeOpenKey = (openKeys) => {
    const key = openKeys[1] ? openKeys[1] : '';
    this.setState({ openKey: key });
  };
  render() {
    return (
      <div>
        <div className={styles.title}>Item Study</div>
        <div className={styles.container}>
          {/* 顶部导航菜单 */}
          <div className={styles.title}>顶部导航菜单</div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['mail', '1']}
          >
            <Menu.Item key="mail">
              <Icon type="mail" /><span>Navigator mail</span>
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="appstore" /><span>Navigator app</span>
            </Menu.Item>
            <SubMenu title={<span><Icon type="setting" />Navigator Setting</span>}>
              <ItemGroup title="ItemGroup one">
                <Menu.Item key="1">Item 1</Menu.Item>
                <Menu.Item key="2">Item 2</Menu.Item>
              </ItemGroup>
              <ItemGroup title="ItemGroup two">
                <Menu.Item key="3">Item 1</Menu.Item>
                <Menu.Item key="4">Item 2</Menu.Item>
              </ItemGroup>
            </SubMenu>
            <Menu.Item key="aLink">
              <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">Navigator a</a>
            </Menu.Item>
          </Menu>
          {/* 内嵌菜单，子菜单在母菜单下，垂直菜单 */}
          <div className={styles.title}>内嵌菜单，垂直菜单</div>
          <Menu
            mode="inline"
            style={{ width: 250 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['subOne']}
          >
            <Menu.Item key="mail">
              <Icon type="mail" /><span>Navigator mail</span>
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="appstore" /><span>Navigator app</span>
            </Menu.Item>
            <SubMenu key="subOne" title={<span><Icon type="setting" />Navigator Setting</span>}>
              <ItemGroup key="sub1" title="ItemGroup one">
                <Menu.Item key="1">Item 1</Menu.Item>
                <Menu.Item key="2">Item 2</Menu.Item>
              </ItemGroup>
              <ItemGroup key="sub2" title="ItemGroup two">
                <Menu.Item key="3">Item 1</Menu.Item>
                <Menu.Item key="4">Item 2</Menu.Item>
              </ItemGroup>
            </SubMenu>
            <Menu.Item key="aLink">
              <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">Navigator a</a>
            </Menu.Item>
            <SubMenu key="subTwo" title={<span><Icon type="book" />Navigator Book</span>}>
              <ItemGroup key="sub3" title="ItemGroup one">
                <Menu.Item key="5">Item 1</Menu.Item>
                <Menu.Item key="6">Item 2</Menu.Item>
              </ItemGroup>
              <ItemGroup key="sub4" title="ItemGroup two">
                <Menu.Item key="7">Item 1</Menu.Item>
                <Menu.Item key="8">Item 2</Menu.Item>
              </ItemGroup>
            </SubMenu>
          </Menu>
          {/* 缩起内嵌菜单 */}
          <div className={styles.title}>缩起内嵌菜单</div>
          <div style={{ width: 256 }}>
            <Button type="primary" className={styles.fold_btn} onClick={this.onChangeCollapse}>
              <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
            <Menu
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
              defaultOpenKeys={['subOne']}
              defaultSelectedKeys={['1']}
            >
              <Menu.Item key="mail">
                <Icon type="mail" /><span>Navigator mail</span>
              </Menu.Item>
              <Menu.Item key="app">
                <Icon type="appstore" /><span>Navigator app</span>
              </Menu.Item>
              <SubMenu key="subOne" title={<span><Icon type="setting" /><span>Navigator Setting</span></span>}>
                <ItemGroup key="sub1" title="ItemGroup one">
                  <Menu.Item key="1">Item 1</Menu.Item>
                  <Menu.Item key="2">Item 2</Menu.Item>
                </ItemGroup>
                <ItemGroup key="sub2" title="ItemGroup two">
                  <Menu.Item key="3">Item 1</Menu.Item>
                  <Menu.Item key="4">Item 2</Menu.Item>
                </ItemGroup>
              </SubMenu>
              <Menu.Item key="aLink">
                <Icon type="link" />
                <span>
                <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">Navigator a</a>
              </span>
              </Menu.Item>
              <SubMenu key="subTwo" title={<span><Icon type="book" /><span>Navigator Book</span></span>}>
                <ItemGroup key="sub3" title="ItemGroup one">
                  <Menu.Item key="5">Item 1</Menu.Item>
                  <Menu.Item key="6">Item 2</Menu.Item>
                </ItemGroup>
                <ItemGroup key="sub4" title="ItemGroup two">
                  <Menu.Item key="7">Item 1</Menu.Item>
                  <Menu.Item key="8">Item 2</Menu.Item>
                </ItemGroup>
              </SubMenu>
            </Menu>
          </div>
          {/* 聚焦菜单 */}
          <div className={styles.title}>聚焦菜单</div>
          <div style={{ width: 256 }}>
            <Menu
              mode="inline"
              theme="dark"
              openKeys={[this.state.openKey]}
              defaultSelectedKeys={['1']}
              onOpenChange={this.changeOpenKey}
            >
              <Menu.Item key="mail">
                <Icon type="mail" /><span>Navigator mail</span>
              </Menu.Item>
              <Menu.Item key="app">
                <Icon type="appstore" /><span>Navigator app</span>
              </Menu.Item>
              <SubMenu key="subOne" title={<span><Icon type="setting" /><span>Navigator Setting</span></span>}>
                <ItemGroup key="sub1" title="ItemGroup one">
                  <Menu.Item key="1">Item 1</Menu.Item>
                  <Menu.Item key="2">Item 2</Menu.Item>
                </ItemGroup>
                <ItemGroup key="sub2" title="ItemGroup two">
                  <Menu.Item key="3">Item 1</Menu.Item>
                  <Menu.Item key="4">Item 2</Menu.Item>
                </ItemGroup>
              </SubMenu>
              <Menu.Item key="aLink">
                <Icon type="link" />
                <span>
                  <a style={{ color: 'inherit' }} href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">Navigator a</a>
                </span>
              </Menu.Item>
              <SubMenu key="subTwo" title={<span><Icon type="book" /><span>Navigator Book</span></span>}>
                <ItemGroup key="sub3" title="ItemGroup one">
                  <Menu.Item key="5">Item 1</Menu.Item>
                  <Menu.Item key="6">Item 2</Menu.Item>
                </ItemGroup>
                <ItemGroup key="sub4" title="ItemGroup two">
                  <Menu.Item key="7">Item 1</Menu.Item>
                  <Menu.Item key="8">Item 2</Menu.Item>
                </ItemGroup>
              </SubMenu>
            </Menu>
          </div>
          {/* 子菜单出现方式 */}
          <div className={styles.title}>子菜单弹出</div>
          <div style={{ width: 256 }}>
            <Menu
              mode="vertical"
              theme="dark"
              defaultSelectedKeys={['1']}
            >
              <Menu.Item key="mail">
                <Icon type="mail" /><span>Navigator mail</span>
              </Menu.Item>
              <Menu.Item key="app">
                <Icon type="appstore" /><span>Navigator app</span>
              </Menu.Item>
              <SubMenu key="subOne" title={<span><Icon type="setting" /><span>Navigator Setting</span></span>}>
                <ItemGroup key="sub1" title="ItemGroup one">
                  <Menu.Item key="1">Item 1</Menu.Item>
                  <Menu.Item key="2">Item 2</Menu.Item>
                </ItemGroup>
                <ItemGroup key="sub2" title="ItemGroup two">
                  <Menu.Item key="3">Item 1</Menu.Item>
                  <Menu.Item key="4">Item 2</Menu.Item>
                </ItemGroup>
              </SubMenu>
              <Menu.Item key="aLink">
                <Icon type="link" />
                <span>
                  <a style={{ color: 'inherit' }} href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">Navigator a</a>
                </span>
              </Menu.Item>
              <SubMenu key="subTwo" title={<span><Icon type="book" /><span>Navigator Book</span></span>}>
                <ItemGroup key="sub3" title="ItemGroup one">
                  <Menu.Item key="5">Item 1</Menu.Item>
                  <Menu.Item key="6">Item 2</Menu.Item>
                </ItemGroup>
                <ItemGroup key="sub4" title="ItemGroup two">
                  <Menu.Item key="7">Item 1</Menu.Item>
                  <Menu.Item key="8">Item 2</Menu.Item>
                </ItemGroup>
              </SubMenu>
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}
