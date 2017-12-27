import React from 'react';
import { Cascader } from 'antd';
import styles from './Cascader.less';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

const options1 = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      code: 455665,
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    disabled: true,
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      code: 488874,
    }],
  }],
}];

const options2 = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  isLeaf: false,
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  isLeaf: false,
}];

export default class CascaderStudy extends React.Component {
  state = {
    text: 'place select',
    options: options2,
  };
  changeSelect = (val, selectedOptions) => {
    console.log(val);
    console.log(selectedOptions);
    this.setState({ text: val.join('/') });
  };
  displayRender = (labels, selectOptions) => {
    let str = '';
    labels.forEach((item, i) => {
      if (i === (labels.length - 1)) {
        str += `${item}(${selectOptions[i].code})`;
      } else {
        str += `${item} /`;
      }
    });
    return str;
  };
  loadData = (selectedOptions) => {
    const lastOption = selectedOptions[selectedOptions.length - 1];
    lastOption.loading = true;
    setTimeout(() => {
      lastOption.loading = false;
      /* 直接修改state，lastOption是对象的引用 */
      lastOption.children = [{
        label: `${lastOption.label} Dynamic 1`,
        value: 'dynamic1',
        isLeaf: false,
      }, {
        label: `${lastOption.label} Dynamic 2`,
        value: 'dynamic2',
        isLeaf: false,
      }];
      this.setState({ options: this.state.options });
    }, 1000);
  };
  render() {
    return (
      <div>
        <div className={styles.title}>Cascader Study</div>
        <div className={styles.container}>
          {/* 最简单的级联选择 */}
          <div className={styles.title}>最简单的级联选择</div>
          <Cascader
            placeholder="请选择"
            options={options}
            onChange={this.changeSelect}
            style={{ width: 356 }}
          />
          {/* 级联选择默认值 */}
          <div className={styles.title}>级联选择默认值</div>
          <Cascader
            placeholder="请选择"
            defaultValue={['zhejiang', 'hangzhou', 'xihu']}
            options={options}
            onChange={this.changeSelect}
            style={{ width: 356 }}
          />
          {/* 不用输入框的级联选择 */}
          <div className={styles.title}>不用输入框的级联选择</div>
          <span>{this.state.text}&nbsp;&nbsp;&nbsp;</span>
          <Cascader
            options={options}
            onChange={this.changeSelect}
          >
            <a href="#">choseCity</a>
          </Cascader>
          {/* 移入展开下级菜单 */}
          <div className={styles.title}>移入展开下级菜单</div>
          <Cascader
            placeholder="请选择"
            options={options}
            expandTrigger="hover"
            onChange={this.changeSelect}
            style={{ width: 356 }}
          />
          {/* 禁用选项 */}
          <div className={styles.title}>禁用选项</div>
          <Cascader
            placeholder="请选择"
            options={options1}
            onChange={this.changeSelect}
            style={{ width: 356 }}
          />
          {/* 选择父级时也输入框也改变 */}
          <div className={styles.title}>选择父级时也输入框也改变</div>
          <Cascader
            placeholder="请选择"
            options={options}
            changeOnSelect
            onChange={this.changeSelect}
            style={{ width: 356 }}
          />
          {/* 级联选择大小 */}
          <div className={styles.title}>级联选择大小</div>
          <Cascader
            placeholder="大"
            options={options}
            changeOnSelect
            onChange={this.changeSelect}
            size="large"
            style={{ width: 356 }}
          />
          <Cascader
            placeholder="默认"
            options={options}
            changeOnSelect
            onChange={this.changeSelect}
            style={{ width: 356 }}
          />
          <Cascader
            placeholder="小"
            options={options}
            changeOnSelect
            size="small"
            onChange={this.changeSelect}
            style={{ width: 356 }}
          />
          {/* 给选项添加额外的详细 */}
          <div className={styles.title}>给选项添加额外的详细</div>
          <Cascader
            placeholder="请选择"
            options={options1}
            displayRender={this.displayRender}
            style={{ width: 356 }}
          />
          {/* 含搜索框的级联选择 */}
          <div className={styles.title}>给选项添加额外的详细</div>
          <Cascader
            placeholder="请选择"
            options={options1}
            displayRender={this.displayRender}
            style={{ width: 356 }}
            showSearch
          />
          {/* 动态加载 */}
          <div className={styles.title}>动态加载</div>
          <Cascader
            placeholder="请选择"
            options={this.state.options}
            style={{ width: 356 }}
            loadData={this.loadData}
          />
        </div>
      </div>
    );
  }
}
