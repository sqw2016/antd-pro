import React from 'react';
import { AutoComplete, Input } from 'antd';
import styles from './AutoComplete.less';

const dataSource = [
  'sgdhfGg',
  'ddfGhjk',
  'YisdjkGgsdg',
  'tyuioxbjdGgdf',
];
const endConcat = ['@qq.com', '@outlook.com', '@163.com', '@bonc.com.cn'];
const { TextArea } = Input;
export default class AutoCompleteStudy extends React.Component {
  state = {
    dataSource,
    dataSource2: endConcat,
  };
  inputChange = (val) => {
    let newDataSource = dataSource;
    if (val) {
      newDataSource = newDataSource.filter((item) => {
        return item.indexOf(val) > -1;
      });
    }
    this.setState({ dataSource: newDataSource });
  };
  suppleInputChange = (val) => {
    console.log(val);
    const newDataSource = endConcat.map((item) => {
      return `${val}${item}`;
    });
    this.setState({ dataSource2: newDataSource });
  };
  render() {
    const children = dataSource.map((item) => {
      return <AutoComplete.Option key={item}>{item}</AutoComplete.Option>;
    });
    return (
      <div>
        <div className={styles.title}>AutoComplete Study</div>
        <div className={styles.container}>
          {/* 基本自动完成 */}
          <div className={styles.title}>基本自动完成</div>
          <AutoComplete
            dataSource={dataSource}
            placeholder="请输入"
            style={{ width: 256 }}
          />
          {/* 输入过滤 */}
          <div className={styles.title}>输入过滤</div>
          <AutoComplete
            dataSource={this.state.dataSource}
            placeholder="请输入"
            onChange={this.inputChange}
            style={{ width: 256 }}
          />
          {/* 自定义补充自动完成 */}
          <div className={styles.title}>自定义补充自动完成</div>
          <AutoComplete
            dataSource={this.state.dataSource2}
            placeholder="请输入"
            onChange={this.suppleInputChange}
            style={{ width: 256 }}
          />
          {/* 使用option生成自动完成项 */}
          <div className={styles.title}>使用option生成自动完成项</div>
          <AutoComplete
            placeholder="请输入"
            onChange={this.suppleInputChange}
            style={{ width: 256 }}
          >
            {children}
          </AutoComplete>
          {/* 自定义输入控件 */}
          <div className={styles.title}>使用option生成自动完成项</div>
          <AutoComplete
            dataSource={this.state.dataSource2}
            onChange={this.suppleInputChange}
            style={{ width: 256 }}
          >
            <TextArea
              placeholder="请输入"
            />
          </AutoComplete>
        </div>
      </div>
    );
  }
}
