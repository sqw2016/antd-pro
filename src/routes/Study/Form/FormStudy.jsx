import React from 'react';
import { Form, Input, Button, message, Icon, Checkbox } from 'antd';
import styles from './FormStudy.less';

const FormItem = Form.Item;
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
                validateStatus={userNameError ? 'error' : ''}
                help={userNameError ? 'error' : ''}
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
                validateStatus={pwdError ? 'error' : ''}
                help={pwdError ? 'error' : ''}
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
                validateStatus={userNameError ? 'error' : ''}
                help={userNameError ? 'error' : ''}
              >
                {
                  getFieldDecorator('userName', {
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
                validateStatus={pwdError ? 'error' : ''}
                help={pwdError ? 'error' : ''}
              >
                {
                  getFieldDecorator('pwd', {
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
        </div>
      </div>
    );
  }
}

const FormStudy = Form.create()(FormComponent);

export default FormStudy;
