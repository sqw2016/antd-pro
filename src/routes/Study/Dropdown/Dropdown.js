import React from 'react';
import { Menu, Dropdown, Icon, Button, message } from 'antd';
import styles from './Dropdown.less';
const { SubMenu } = Menu;

export default class DropdownStudy extends React.Component {
  state = {
    visible: false,
  };
  render() {
    const menu1 = (
      <Menu>
        <Menu.Item key="1">option1</Menu.Item>
        <Menu.Item key="2">option2</Menu.Item>
        <Menu.Item key="3">option3</Menu.Item>
      </Menu>
    );
    const menu2 = (
      <Menu>
        <Menu.Item key="1">option1</Menu.Item>
        <Menu.Item key="2">option2</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>option3</Menu.Item>
      </Menu>
    );
    const subMenu = (
      <Menu>
        <Menu.Item key="1">option1</Menu.Item>
        <Menu.Item key="2">option2</Menu.Item>
        <SubMenu title="option3">
          <Menu.Item key="31">option31</Menu.Item>
          <Menu.Item key="32">option32</Menu.Item>
        </SubMenu>
        <SubMenu title="option4" disabled>
          <Menu.Item key="41">option41</Menu.Item>
          <Menu.Item key="42">option42</Menu.Item>
        </SubMenu>
      </Menu>
    );
    const clickItem = ({ key }) => {
      message.info(`点击了第${key}个菜单`);
    };
    return (
      <div>
        <div className={styles.container}>
          {/* 最简单的下拉菜单 */}
          <div className={styles.title}>最简单的下拉菜单</div>
          <Dropdown overlay={menu1}>
            <Button type="primary">最简单的下拉菜单</Button>
          </Dropdown>
          {/* 下拉菜单从不同的位置弹出 */}
          <div className={styles.title}>下拉菜单从不同的位置弹出</div>
          <Dropdown overlay={menu1} placement="bottomLeft">
            <Button className={styles.dropdown_btn} type="primary">下左</Button>
          </Dropdown>
          <Dropdown overlay={menu1} placement="bottomCenter">
            <Button className={styles.dropdown_btn} type="primary">下中</Button>
          </Dropdown>
          <Dropdown overlay={menu1} placement="bottomRight">
            <Button className={styles.dropdown_btn} type="primary">下右</Button>
          </Dropdown>
          <Dropdown overlay={menu1} placement="topLeft">
            <Button className={styles.dropdown_btn} type="primary">上左</Button>
          </Dropdown>
          <Dropdown overlay={menu1} placement="topCenter">
            <Button className={styles.dropdown_btn} type="primary">上中</Button>
          </Dropdown>
          <Dropdown overlay={menu1} placement="topRight">
            <Button className={styles.dropdown_btn} type="primary">上右</Button>
          </Dropdown>
          {/* 包含分割线和不可用菜单的下拉菜单 */}
          <div className={styles.title}>包含分割线和不可用菜单的下拉菜单</div>
          <Dropdown overlay={menu2}>
            <Button type="primary">不可用菜单</Button>
          </Dropdown>
          {/* 下拉菜单的弹出方式，默认为移入触发 */}
          <div className={styles.title}>包含分割线和不可用菜单的下拉菜单,支持定义多种方式</div>
          <Dropdown overlay={menu2} trigger={['click', 'hover']}>
            <Button type="primary">点击触发</Button>
          </Dropdown>
          {/* 根据点击时的key区分点中的下拉菜单 */}
          <div className={styles.title}>根据点击时的key区分点中的下拉菜单</div>
          <Dropdown onOverlayClick={clickItem} overlay={menu2}>
            <Button type="primary">点击触发</Button>
          </Dropdown>
          {/* 带有下拉按钮的下拉菜单 */}
          <div className={styles.title}>带有下拉按钮的下拉菜单（Dropdown.Button）</div>
          <Dropdown.Button
            onClick={() => { message.info('点击了左侧菜单'); }}
            overlay={menu1}
            className={styles.dropdown_btn}
          >
            按钮菜单
          </Dropdown.Button>
          <Dropdown.Button
            className={styles.dropdown_btn}
            onClick={() => { message.info('点击了左侧菜单'); }}
            disabled
            overlay={menu1}
          >
            按钮菜单
          </Dropdown.Button>
          <Dropdown overlay={menu1}>
            <Button type="primary">按钮菜单<Icon type="down" /></Button>
          </Dropdown>
          {/* 多级下拉菜单 */}
          <div className={styles.title}>多级下拉菜单</div>
          <Dropdown overlay={subMenu}>
            <Button type="primary">多级下拉菜单<Icon type="down" /></Button>
          </Dropdown>
          {/* 下拉菜单的显示控制 */}
          <div className={styles.title}>下拉菜单的显示控制(visible)，默认点击隐藏</div>
          <Dropdown
            overlay={menu1}
            visible={this.state.visible}
            onVisibleChange={(flag) => { this.setState({ visible: flag }); }}
            onOverlayClick={(e) => { if (e.key === '2') { this.setState({ visible: false }); } }}
          >
            <Button type="primary">下拉菜单显示控制<Icon type="down" /></Button>
          </Dropdown>
          {/* 下拉菜单触发 */}
          <div className={styles.title}>下拉菜单触发(trigger)</div>
          <Dropdown overlay={menu1} trigger={['contextMenu']}>
            <Button type="primary">右键点击触发</Button>
          </Dropdown>
        </div>
      </div>
    );
  }
}
