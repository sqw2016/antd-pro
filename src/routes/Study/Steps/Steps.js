import React from 'react';
import { Steps, Icon, Button, Popover } from 'antd';
import styles from './Steps.less';

const { Step } = Steps;
export default class MenuStudy extends React.Component {
  state = {
    current: 0,
  };
  next = () => {
    const current = this.state.current + 1;
    this.setState({ current });
  };
  showProgressDot = (dot, { status, index }) => (
    <Popover content={<span>step {index} status: {status}</span>}>
      {dot}
    </Popover>
  );
  render() {
    return (
      <div>
        <div className={styles.title}>Steps Study</div>
        <div className={styles.container}>
          {/* 最简单的步骤条 */}
          <div className={styles.title}>最简单的步骤条</div>
          <Steps current={1}>
            <Step title="第一步" description="填写订单" />
            <Step title="第二步" description="提交订单" />
            <Step title="第三步" description="查看订单" />
          </Steps>
          <Steps current={0} direction="vertical">
            <Step title="第一步" description="填写订单" />
            <Step title="第二步" description="提交订单" />
            <Step title="第三步" description="查看订单" />
          </Steps>
          {/* 迷你版本 */}
          <div className={styles.title}>迷你版本</div>
          <Steps size="small" current={1}>
            <Step title="第一步" description="填写订单" />
            <Step title="第二步" description="提交订单" />
            <Step title="第三步" description="查看订单" />
          </Steps>
          {/* 带图标的步骤条 */}
          <div className={styles.title}>带图标的步骤条</div>
          <Steps current={3}>
            <Step icon={<Icon type="login" />} title="第一步" description="填写订单" />
            <Step icon={<Icon type="edit" />} title="第二步" description="提交订单" />
            <Step icon={<Icon type="loading" />} title="第三步" description="查看订单" />
          </Steps>
          {/* 步骤条的状态 */}
          <div className={styles.title}>步骤条的状态</div>
          <Steps current={3}>
            <Step icon={<Icon type="loading" />} status="wait" title="wait" description="wait" />
            <Step icon={<Icon type="ellipsis" />} status="process" title="process" description="process" />
            <Step icon={<Icon type="bulb" />} status="finish" title="finish" description="finish" />
            <Step icon={<Icon type="close" />} status="error" title="error" description="error" />
          </Steps>
          {/* 通过按钮切换步骤 */}
          <div className={styles.title}>步骤条的状态</div>
          <Steps current={this.state.current}>
            <Step key={0} title="wait" description="wait" />
            <Step key={1} title="process" description="process" />
            <Step key={2} title="finish" description="finish" />
            <Step key={3} title="error" description="error" />
          </Steps>
          <Button type="primary" onClick={this.next}>下一步</Button>
          {/* 点状步骤条 */}
          <div className={styles.title}>步骤条的状态</div>
          <Steps progressDot={true} current={this.state.current}>
            <Step key={0} title="wait" description="wait" />
            <Step key={1} title="process" description="process" />
            <Step key={2} title="finish" description="finish" />
            <Step key={3} title="error" description="error" />
          </Steps>
          {/* 点状步骤条添加tip信息 */}
          <div className={styles.title}>点状步骤条添加tip信息</div>
          <Steps progressDot={this.showProgressDot} current={this.state.current}>
            <Step key={0} title="wait" description="wait" />
            <Step key={1} title="process" description="process" />
            <Step key={2} title="finish" description="finish" />
            <Step key={3} title="error" description="error" />
          </Steps>
        </div>
      </div>
    );
  }
}
