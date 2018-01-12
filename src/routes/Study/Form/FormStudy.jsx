import React from 'react';
import { Form, Input, Button, message, Icon, Checkbox, Tooltip } from 'antd';
import styles from './FormStudy.less';

const FormItem = Form.Item;
const formLayout = {
  labelCol: {
    xs: {
      span: 2,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
class FormComponent extends React.Component {
  state = {
  };
  submit = () => {
    this.props.form.validateFields();
    message.info('error');
  };
  hasError = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };
  validator = (rule, val, callback) => {
    callback('输入正确格式');
  };
  render() {
    const {
      getFieldDecorator, // 用于和表单进行双向绑定
      getFieldError, // 获取某个输入控件的error
      getFieldsError, // 获取一组控件的error
      isFieldTouched, // 判断一个控件是否经过getFieldDecorator注册
    } = this.props.form;

    /* 最简单的表单 */
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const pwdError = isFieldTouched('pwd') && getFieldError('pwd');
    return (
      <div>
        <div className={styles.container}>
          {/* 最简单的表单 */}
          <div className={styles.title}>最简单的表单</div>
          <div>
            <Form
              layout="inline"
              onSubmit={this.submit}
            >
              <FormItem
                colon={false}
                label="用户名"
              >
                {
                  getFieldDecorator('userName', {
                    rules: [{
                      required: true,
                      message: '请输入用户名',
                    }],
                  })(
                    <Input placeholder="userName" />
                  )
                }
              </FormItem>
              <FormItem
                label="密码"
              >
                {
                  getFieldDecorator('pwd', {
                    rules: [{
                      required: true,
                      message: '请输入密码',
                    }],
                  })(
                    <Input placeholder="password" />
                  )
                }
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={this.hasError(getFieldsError())}
                >
                  Login
                </Button>
              </FormItem>
            </Form>
          </div>
          {/* 内容丰富的登录表单 */}
          <div className={styles.title}>内容丰富的登录表单</div>
          <div>
            <Form
              onSubmit={this.submit}
            >
              <FormItem
                colon={false}
                label="用户名"
              >
                {
                  getFieldDecorator('userName1', {
                    rules: [{
                      required: true,
                      message: '请输入用户名',
                    }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: '0,0,0, 0.25' }} />} placeholder="userName" />
                  )
                }
              </FormItem>
              <FormItem
                label="密码"
              >
                {
                  getFieldDecorator('pwd1', {
                    rules: [{
                      required: true,
                      message: '请输入密码',
                    }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: '0,0,0, 0.25' }} />} placeholder="password" />
                  )
                }
              </FormItem>
              <FormItem>
                {
                  getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>记住密码</Checkbox>
                  )
                }
                <a href="">忘记密码</a>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={this.hasError(getFieldsError())}
                >
                  Login
                </Button>
                <a href="">注册</a>
              </FormItem>
            </Form>
          </div>
          {/* 包含输入校验的表单 */}
          <div className={styles.title}>包含输入校验的表单</div>
          <div>
            <Form
              onSubmit={this.submit}
            >
              <FormItem
                label="邮箱"
                {...formLayout}
              >
                {
                  getFieldDecorator('email', {
                    rules: [{
                      required: true,
                      message: '请输入邮箱',
                    }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: '0,0,0, 0.25' }} />} placeholder="userName" />
                  )
                }
              </FormItem>
              <FormItem
                label="密码"
                {...formLayout}
              >
                {
                  getFieldDecorator('pwd2', {
                    rules: [{
                      required: true,
                      message: '请输入密码',
                    }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: '0,0,0, 0.25' }} />} placeholder="password" />
                  )
                }
              </FormItem>
              <FormItem
                label="正则校验"
                {...formLayout}
              >
                {
                  getFieldDecorator('pattern', {
                    rules: [{
                      pattern: /^\d{6}$/,
                      message: '请输入6位数字',
                    }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: '0,0,0, 0.25' }} />} placeholder="password" />
                  )
                }
              </FormItem>
              <FormItem
                label="自定义方法校验"
                {...formLayout}
              >
                {
                  getFieldDecorator('validator', {
                    rules: [{
                      validator: this.validator,
                    }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: '0,0,0, 0.25' }} />} placeholder="password" />
                  )
                }
              </FormItem>
              <FormItem
                label={
                  <span>
                    help&nbsp;
                    <Tooltip title="What do you want?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
                {...formLayout}
              >
                {
                  getFieldDecorator('help', {
                    rules: [{
                      validator: this.validator,
                    }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: '0,0,0, 0.25' }} />} placeholder="password" />
                  )
                }
              </FormItem>
              <FormItem
                label="extra"
                extra="妈的渣渣"
                {...formLayout}
              >
                {
                  getFieldDecorator('extra', {
                    rules: [{
                      validator: this.validator,
                    }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: '0,0,0, 0.25' }} />} placeholder="password" />
                  )
                }
              </FormItem>
              <FormItem
                {...tailFormItemLayout}
              >
                <Button type="primary" htmlType="submit">提交</Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const FormStudy = Form.create()(FormComponent);

export default FormStudy;
