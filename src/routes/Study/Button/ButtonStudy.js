import React from 'react';
import {
  Button, Menu, Dropdown,
} from 'antd';
import styles from './ButtonStudy.less';

const menuClick = (e) => {
  alert(e.key);
};

const menu1 = (
  <Menu onClick={menuClick}>
    <Menu.Item key="1">1dada</Menu.Item>
    <Menu.Item key="2">2dada</Menu.Item>
    <Menu.Item key="3">3dada</Menu.Item>
  </Menu>
);

const menu2 = (
  <Menu onClick={menuClick}>
    <Menu.Item className={styles.menu_btn} key="one">one dada</Menu.Item>
    <Menu.Item className={styles.menu_btn} key="two">two dada</Menu.Item>
    <Menu.Item className={styles.menu_btn} key="three">three dada</Menu.Item>
  </Menu>
);

const ButtonGroup = Button.Group;
export default class ButtonStudy extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.title}>ButtonStudy</div>
        <div className={styles.container}>
          {/* 按钮类型： */}
          <div className={styles.title}>按钮类型</div>
          <Button className={styles.button_btn} type="primary">主按钮</Button>
          <Button className={styles.button_btn} type="primary" ghost>透明背景主按钮</Button>
          <Button className={styles.button_btn}>次按钮(默认)</Button>
          <Button className={styles.button_btn} type="dashed">虚线按钮</Button>
          <Button className={styles.button_btn} type="danger">危险按钮</Button>
          {/* 按钮形状 */}
          <div className={styles.title}>按钮形状</div>
          <Button className={styles.button_btn} type="primary" shape="circle">圆</Button>
          <Button className={styles.button_btn} type="primary">方形按钮(默认)</Button>
          {/* 按钮大小 */}
          <div className={styles.title}>按钮大小</div>
          <Button className={styles.button_btn} type="primary" shape="circle" size="small">小</Button>
          <Button className={styles.button_btn} type="primary" shape="circle">中</Button>（默认）
          <Button className={styles.button_btn} type="primary" shape="circle" size="large">大</Button>
          <Button className={styles.button_btn} type="primary" size="small">小</Button>
          <Button className={styles.button_btn} type="primary">中(默认)</Button>
          <Button className={styles.button_btn} type="primary" size="large">大</Button>
          {/* 图形按钮 */}
          <div className={styles.title}>图形按钮</div>
          <Button className={styles.button_btn} type="primary" icon="search" shape="circle" />
          <Button className={styles.button_btn} type="primary" icon="search">搜索</Button>
          <Button className={styles.button_btn} icon="search" shape="circle" />
          <Button className={styles.button_btn} icon="search">搜索</Button>
          <Button className={styles.button_btn} type="dashed" icon="search" shape="circle" />
          <Button className={styles.button_btn} type="dashed" icon="search">搜索</Button>
          {/* 按钮载入状态 */}
          <div className={styles.title}>按钮载入状态</div>
          <Button className={styles.button_btn} icon="search">搜索</Button>
          <Button className={styles.button_btn} icon="search" loading>搜索</Button>
          <Button className={styles.button_btn} type="primary">搜索</Button>
          <Button className={styles.button_btn} type="primary" loading>搜索</Button>
          {/* 按钮禁用 */}
          <div className={styles.title}>按钮禁用</div>
          <Button className={styles.button_btn} type="primary">主按钮</Button>
          <Button className={styles.button_btn} type="primary" disabled>禁用主按钮</Button>
          <Button className={styles.button_btn}>次按钮(默认)</Button>
          <Button className={styles.button_btn} disabled>禁用次按钮(默认)</Button>
          <Button className={styles.button_btn} type="dashed">虚线按钮</Button>
          <Button className={styles.button_btn} type="dashed" disabled>禁用虚线按钮</Button>
          <Button className={styles.button_btn} type="danger">危险按钮</Button>
          <Button className={styles.button_btn} type="danger" disabled>禁用危险按钮</Button>
          {/* 二级按钮 */}
          <div className={styles.title}>二级按钮</div>
          <Dropdown overlay={menu1}>
            <Button className={styles.button_btn} type="primary">
              menu1
            </Button>
          </Dropdown>
          <Dropdown overlay={menu2}>
            <Button className={styles.button_btn} type="primary">
              menu2
            </Button>
          </Dropdown>
          {/* 按钮组 */}
          <div className={styles.title}>按钮组</div>
          <Button type="primary">按钮1</Button>
          <Button type="primary">按钮2</Button>
          <Button className={styles.button_btn} type="primary">按钮3</Button>
          <ButtonGroup>
            <Button onClick={menuClick} type="primary">按钮1</Button>
            <Button type="primary">按钮2</Button>
            <Button type="primary">按钮3</Button>
          </ButtonGroup>
          {/* 跳转按钮 */}
          <div className={styles.title}>跳转按钮</div>
          <Button type="primary" className={styles.button_btn} href="https://www.baidu.com" target="blank">百度</Button>
          <Button type="primary" href="http://www.4399.com/">4399</Button>
        </div>
      </div>
    );
  }
}
