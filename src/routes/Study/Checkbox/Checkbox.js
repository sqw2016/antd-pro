import React from 'react';
import { Checkbox, Button, Row, Col } from 'antd';
import styles from './Checkbox.less';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

export default class CheckboxStudy extends React.Component {
  state = {
    checked: false,
    disabled: false,
    choseAll: false,
    values: [],
    indeterminate: false,
  };
  onChange = (e) => {
    console.log(e);
  };
  CheckboxGroupChange = (e) => {
    console.log(e);
  };
  /* 全选 */
  choseAll = (e) => {
    const values = [...plainOptions];
    this.setState({
      values: e.target.checked ? values : [],
      choseAll: e.target.checked,
      indeterminate: false,
    });
  };
  changeCheckboxGroupValue = (values) => {
    const dl = plainOptions.length; // 选项总个数
    const l = values.length; // 已选项个数
    this.setState({
      values,
      choseAll: dl === l,
      indeterminate: l > 0 && l < dl,
    });
  };
  render() {
    return (
      <div>
        <div className={styles.title}>Checkbox Study</div>
        <div className={styles.container}>
          {/* 最简单的复选框 */}
          <div className={styles.title}>最简单的复选框</div>
          <Checkbox onChange={this.onChange}>百度</Checkbox>
          {/* 不可用复选框 */}
          <div className={styles.title}>不可用复选框</div>
          <Checkbox onChange={this.onChange}>百度</Checkbox>
          <Checkbox defaultChecked onChange={this.onChange}>Google</Checkbox>
          <Checkbox defaultChecked disabled onChange={this.onChange}>Android</Checkbox>
          {/* 可控的复选框 */}
          <div className={styles.title}>可控的复选框</div>
          <Checkbox
            onChange={this.onChange}
            checked={this.state.checked}
            disabled={this.state.disabled}
          >
            可控的复选框
          </Checkbox>
          <Button className={styles.btn} type="primary" onClick={() => { this.setState({ checked: !this.state.checked }); }}>{ this.state.checked ? 'UnChecked' : 'Checked' }</Button>
          <Button className={styles.btn} type="primary" onClick={() => { this.setState({ disabled: !this.state.disabled }); }}>{ this.state.disabled ? 'Enabled' : 'Disabled' }</Button>
          {/* 复选框组 */}
          <div className={styles.title}>复选框组</div>
          <Checkbox.Group onChange={this.CheckboxGroupChange} options={plainOptions} defaultValue={['Apple', 'Pear']} />
          <Checkbox.Group onChange={this.CheckboxGroupChange} options={options} defaultValue={['Apple', 'Orange']} />
          <Checkbox.Group onChange={this.CheckboxGroupChange} options={optionsWithDisabled} defaultValue={['Apple', 'Orange']} />
          {/* 全选 */}
          <div className={styles.title}>全选</div>
          <Checkbox
            checked={this.state.choseAll}
            indeterminate={this.state.indeterminate}
            onChange={this.choseAll}
          >
            全选
          </Checkbox>
          <Checkbox.Group onChange={this.changeCheckboxGroupValue} options={plainOptions} value={this.state.values} />
          {/* 复选框组布局 */}
          <div className={styles.title}>复选框组布局</div>
          <Checkbox.Group
            onChange={this.onChange}
          >
            <Row>
              <Col span={8}><Checkbox value="A">A</Checkbox></Col>
              <Col span={8}><Checkbox value="B">B</Checkbox></Col>
              <Col span={8}><Checkbox value="C">C</Checkbox></Col>
              <Col span={8}><Checkbox value="D">D</Checkbox></Col>
              <Col span={8}><Checkbox value="E">E</Checkbox></Col>
            </Row>
          </Checkbox.Group>
        </div>
      </div>
    );
  }
}
