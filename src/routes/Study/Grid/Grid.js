import React from 'react';
import {
  Row, Col,
} from 'antd';
import styles from './Grid.less';

export default class Grid extends React.Component {

  render() {
    return (
      <div>
        <div className={styles.title}>Grid Study</div>
        <div className={styles.container}>
          {/* 基础栅格 */}
          <div className={styles.title}>基础栅格</div>
          <Row className={styles.row}>
            <Col className={styles.col1} span={12}>col-12</Col>
            <Col className={styles.col2} span={12}>col-12</Col>
          </Row>
          <Row className={styles.row}>
            <Col className={styles.col1} span={8}>col-8</Col>
            <Col className={styles.col2} span={8}>col-8</Col>
            <Col className={styles.col1} span={8}>col-8</Col>
          </Row>
          <Row className={styles.row}>
            <Col className={styles.col1} span={6}>col-6</Col>
            <Col className={styles.col2} span={6}>col-6</Col>
            <Col className={styles.col1} span={6}>col-6</Col>
            <Col className={styles.col2} span={6}>col-6</Col>
          </Row>
          {/* 间隔栅格 */}
          <div className={styles.title}>间隔栅格(栅格内部会有一个gutter/2的左右padding)</div>
          <Row className={styles.row} gutter={16} >
            <Col className={styles.col1} span={12}>
              <div className={styles.col_div}>col-12</div>
            </Col>
            <Col className={styles.col2} span={12}>
              <div className={styles.col_div}>col-12</div>
            </Col>
          </Row>
          {/* 左右偏移 */}
          <div className={styles.title}>偏移(offset)</div>
          <Row className={styles.row}>
            <Col className={styles.col1} span={8}>col-8</Col>
            <Col className={styles.col2} span={8}>col-8</Col>
          </Row>
          <Row className={styles.row}>
            <Col className={styles.col1} span={8}>col-8</Col>
            <Col className={styles.col2} offset={4} span={8}>col-8 offset4</Col>
          </Row>
          {/* 栅格移动 */}
          <div className={styles.title}>栅格移动(push-右/pull-左)</div>
          <Row className={styles.row}>
            <Col className={styles.col1} span={8}>col-8</Col>
            <Col className={styles.col2} span={8}>col-8</Col>
          </Row>
          <Row className={styles.row}>
            <Col className={styles.col1} span={8}>col-8</Col>
            <Col className={styles.col2} push={4} span={8}>col-8 push4</Col>
          </Row>
          <Row className={styles.row}>
            <Col className={styles.col1} span={8}>col-8</Col>
            <Col className={styles.col2} pull={4} span={8}>col-8 pull4</Col>
          </Row>
          {/* 改变栅格顺序 */}
          <div className={styles.title}>Flex-order改变栅格顺序</div>
          <Row className={styles.row} type="flex">
            <Col className={styles.col1} span={6} order={4}>col-1 order4</Col>
            <Col className={styles.col2} span={6} order={2}>col-2 order2</Col>
            <Col className={styles.col1} span={6} order={1}>col-3 order1</Col>
            <Col className={styles.col2} span={6} order={3}>col-4 order3</Col>
          </Row>
        </div>
      </div>
    );
  }
}
