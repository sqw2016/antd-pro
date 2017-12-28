import React from 'react';
import moment from 'moment';
import { DatePicker, Radio } from 'antd';
import styles from './DatePicker.less';

const { WeekPicker, MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY年MM月DD';
const monthFormat = 'YYYY/MM';
export default class DatePickerStudy extends React.Component {
  state = {
    size: 'default',
  };
  radioChange = (e) => {
    this.setState({ size: e.target.value });
  };
  onOK = (e) => {
    console.log('*****************ok*****************');
    console.log(e);
  };
  pickerChange = (date, dateString) => {
    console.log(date);
    console.log(dateString);
  };
  disabledDate = (cur) => {
    return cur && cur.valueOf() < Date.now();
  };
  disabledTime = () => {
    return {
      disabledHours: () => { return [1, 2, 3, 5, 6, 7, 13, 18, 23]; },
      disabledMinutes: () => { return [12, 23, 43, 55, 48]; },
      disabledSeconds: () => { return [1, 2, 3, 4, 12, 13, 14, 22, 43, 55, 48]; },
    };
  };
  disabledRangeTime = (_this, type) => {
    if (type === 'start') {
      return {
        disabledHours: () => { return [1, 2, 3, 5, 6, 7, 13, 18, 23]; },
        disabledMinutes: () => { return [12, 23, 43, 55, 48]; },
        disabledSeconds: () => { return [1, 2, 3, 4, 12, 13, 14, 22, 43, 55, 48]; },
      };
    }
    return {
      disabledHours: () => { return [7, 13, 18, 23]; },
      disabledMinutes: () => { return [12, 22, 33, 44, 23, 43, 55, 48]; },
      disabledSeconds: () => { return [11, 21, 31, 41, 12, 13, 14, 22, 43, 55, 48]; },
    };
  };
  dateRender = (cur) => {
    return (
      <div className="ant-calendar-date" style={{ borderRadius: '50%' }}>
        {cur.date()}
      </div>
    );
  };
  render() {
    const { size } = this.state;
    return (
      <div>
        <div className={styles.title}>DatePicker Study</div>
        <div className={styles.container}>
          {/* 日期选择框 */}
          <div className={styles.title}>日期选择框</div>
          <div className={styles.picker_container}>
            <span>日期选择框：</span>
            <DatePicker onChange={this.pickerChange} placeholder="请选择时间" />
          </div>
          <div className={styles.picker_container}>
            <span>星期选择框：</span>
            <WeekPicker onChange={this.pickerChange} placeholder="请选择" />
          </div>
          <div className={styles.picker_container}>
            <span>月份选择框：</span>
            <MonthPicker onChange={this.pickerChange} placeholder="请选择" />
          </div>
          <div className={styles.picker_container}>
            <span>日期范围选择：</span>
            <RangePicker onChange={this.pickerChange} />
          </div>
          {/* 禁用日期选择框 */}
          <div className={styles.title}>禁用日期选择框</div>
          <div className={styles.picker_container}>
            <span>日期选择框：</span>
            <DatePicker disabled onChange={this.pickerChange} placeholder="请选择时间" />
          </div>
          <div className={styles.picker_container}>
            <span>星期选择框：</span>
            <WeekPicker disabled onChange={this.pickerChange} placeholder="请选择" />
          </div>
          <div className={styles.picker_container}>
            <span>月份选择框：</span>
            <MonthPicker disabled onChange={this.pickerChange} placeholder="请选择" />
          </div>
          <div className={styles.picker_container}>
            <span>日期范围选择：</span>
            <RangePicker disabled onChange={this.pickerChange} />
          </div>
          {/* 自定义日期格式 */}
          <div className={styles.title}>自定义日期格式</div>
          <div className={styles.picker_container}>
            <span>日期选择框：</span>
            <DatePicker format={dateFormat} onChange={this.pickerChange} placeholder="请选择时间" />
          </div>
          <div className={styles.picker_container}>
            <span>月份选择框：</span>
            <MonthPicker format={monthFormat} onChange={this.pickerChange} placeholder="请选择" />
          </div>
          <div className={styles.picker_container}>
            <span>日期范围选择：</span>
            <RangePicker format={dateFormat} onChange={this.pickerChange} />
          </div>
          {/* 日期选择框大小 */}
          <div className={styles.title}>日期选择框大小</div>
          <div className={styles.picker_container}>
            <Radio.Group value={size} onChange={this.radioChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </div>
          <div className={styles.picker_container}>
            <span>日期选择框：</span>
            <DatePicker size={size} onChange={this.pickerChange} placeholder="请选择时间" />
          </div>
          <div className={styles.picker_container}>
            <span>星期选择框：</span>
            <WeekPicker size={size} onChange={this.pickerChange} placeholder="请选择" />
          </div>
          <div className={styles.picker_container}>
            <span>月份选择框：</span>
            <MonthPicker size={size} onChange={this.pickerChange} placeholder="请选择" />
          </div>
          <div className={styles.picker_container}>
            <span>日期范围选择：</span>
            <RangePicker size={size} onChange={this.pickerChange} />
          </div>
          {/* 日期时间选择 */}
          <div className={styles.title}>日期时间选择</div>
          <div className={styles.picker_container}>
            <span>日期时间选择框：</span>
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime
              onOk={this.onOK}
              onChange={this.pickerChange}
              placeholder="Select Time"
            />
          </div>
          <div className={styles.picker_container}>
            <span>日期时间范围选择框：</span>
            <RangePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime
              onChange={this.pickerChange}
              onOk={this.onOK}
              placeholder={['startTime', 'endTime']}
            />
          </div>
          {/* 不可选日期 */}
          <div className={styles.title}>不可选日期</div>
          <div className={styles.picker_container}>
            <span>日期时间选择框：</span>
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime
              onOk={this.onOK}
              disabledTime={this.disabledTime}
              disabledDate={this.disabledDate}
              onChange={this.pickerChange}
              placeholder="Select Time"
            />
          </div>
          <div className={styles.picker_container}>
            <span>日期时间范围选择框：</span>
            <RangePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime
              disabledDate={this.disabledDate}
              disabledTime={this.disabledRangeTime}
              onChange={this.pickerChange}
              onOk={this.onOK}
              placeholder={['startTime', 'endTime']}
            />
          </div>
          {/* 设置快捷按钮 */}
          <div className={styles.title}>设置快捷按钮</div>
          <div className={styles.picker_container}>
            <span>日期时间范围选择框：</span>
            <RangePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime
              ranges={{ '今天': [moment(), moment().endOf('day')], '当月': [moment(), moment().endOf('month')] }}
              onChange={this.pickerChange}
              onOk={this.onOK}
              placeholder={['startTime', 'endTime']}
            />
          </div>
          {/* 页脚 */}
          <div className={styles.title}>页脚</div>
          <div className={styles.picker_container}>
            <span>日期时间范围选择框：</span>
            <RangePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime
              renderExtraFooter={() => 'Footer'}
              ranges={{ '今天': [moment(), moment().endOf('day')], '当月': [moment(), moment().endOf('month')] }}
              onChange={this.pickerChange}
              onOk={this.onOK}
              placeholder={['startTime', 'endTime']}
            />
          </div>
          {/* 模式 */}
          <div className={styles.title}>模式</div>
          <div className={styles.picker_container}>
            <span>日期时间范围选择框：</span>
            <RangePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime
              renderExtraFooter={() => 'Footer'}
              onChange={this.pickerChange}
              onOk={this.onOK}
              placeholder={['startTime', 'endTime']}
            />
          </div>
          <div className={styles.picker_container}>
            <span>日期时间选择框：</span>
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime
              onOk={this.onOK}
              onChange={this.pickerChange}
              placeholder="Select Time"
            />
          </div>
          <div className={styles.picker_container}>
            <span>日期时间选择框：</span>
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime
              onOk={this.onOK}
              onChange={this.pickerChange}
              placeholder="Select Time"
            />
          </div>
          <div className={styles.picker_container}>
            <span>日期时间选择框：</span>
            <DatePicker
              onChange={this.pickerChange}
              placeholder="Select Time"
            />
          </div>
          {/* 单元格定制 */}
          <div className={styles.title}>单元格定制</div>
          <div className={styles.picker_container}>
            <span>日期时间选择框：</span>
            <DatePicker
              dateRender={this.dateRender}
              onChange={this.pickerChange}
              placeholder="Select Time"
            />
          </div>
        </div>
      </div>
    );
  }
}
