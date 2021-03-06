import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: '首页', // for breadcrumb
    path: '/',
    children: [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        path: 'dashboard',
        children: [
          {
            name: '分析页',
            path: 'analysis',
            component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis')),
          },
          {
            name: '监控页',
            path: 'monitor',
            component: dynamicWrapper(app, ['monitor'], () => import('../routes/Dashboard/Monitor')),
          },
          {
            name: '工作台',
            path: 'workplace',
            component: dynamicWrapper(app, ['project', 'activities', 'chart'], () => import('../routes/Dashboard/Workplace')),
          },
        ],
      },
      {
        name: 'Study',
        icon: 'book',
        path: 'study',
        children: [
          {
            name: 'Button',
            path: 'button',
            component: dynamicWrapper(app, [], () => import('../routes/Study/Button/ButtonStudy')),
          },
          {
            name: 'Grid(栅格)',
            path: 'grid',
            component: dynamicWrapper(app, [], () => import('../routes/Study/Grid/Grid')),
          },
          {
            name: 'Layout(布局)',
            path: 'layout',
            component: dynamicWrapper(app, [], () => import('../routes/Study/Layout/Layout')),
          },
          {
            name: 'Breadcrumb(面包屑)',
            path: 'breadcrumb',
            component: dynamicWrapper(app, [], () => import('../routes/Study/Breadcrumb/Breadcrumb')),
          },
          {
            name: 'Dropdown(下拉菜单)',
            path: 'dropdown',
            component: dynamicWrapper(app, [], () => import('../routes/Study/Dropdown/Dropdown')),
          },
          {
            name: 'Menu(菜单)',
            path: 'menu',
            component: dynamicWrapper(app, [], () => import('../routes/Study/Menu/MenuStudy')),
          },
          {
            name: 'Pagination(分页)',
            path: 'pagination',
            component: dynamicWrapper(app, [], () => import('../routes/Study/Pagination/Pagination')),
          },
          {
            name: 'Steps(步骤条)',
            path: 'steps',
            component: dynamicWrapper(app, [], () => import('../routes/Study/Steps/Steps')),
          },
          {
            name: 'AutoComplete(步骤条)',
            path: 'autoComplete',
            component: dynamicWrapper(app, [], () => import('../routes/Study/AutoComplete/AutoComplete')),
          },
          {
            name: 'Cascader(级联选择)',
            path: 'cascader',
            component: dynamicWrapper(app, [], () => import('../routes/Study/Cascader/Cascader')),
          },
          {
            name: 'Checkbox(复选框)',
            path: 'checkbox',
            component: dynamicWrapper(app, [], () => import('../routes/Study/Checkbox/Checkbox')),
          },
          {
            name: 'DatePicker(日期选择框)',
            path: 'datePicker',
            component: dynamicWrapper(app, [], () => import('../routes/Study/DatePicker/DatePicker')),
          },
          {
            name: 'Form(表单)',
            path: 'form',
            component: dynamicWrapper(app, [], () => import('../routes/Study/Form/FormStudy')),
          },
          {
            name: 'UpLoad(上传)',
            path: 'upLoad',
            component: dynamicWrapper(app, [], () => import('../routes/Study/UpLoad/UpLoad')),
          },
        ],
      },
      {
        name: '表单页',
        path: 'form',
        icon: 'form',
        children: [
          {
            name: '基础表单',
            path: 'basic-form',
            component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/BasicForm')),
          },
          {
            name: '分步表单',
            path: 'step-form',
            component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm')),
            children: [
              {
                path: 'confirm',
                component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm/Step2')),
              },
              {
                path: 'result',
                component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/StepForm/Step3')),
              },
            ],
          },
          {
            name: '高级表单',
            path: 'advanced-form',
            component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/AdvancedForm')),
          },
        ],
      },
      {
        name: '列表页',
        path: 'list',
        icon: 'table',
        children: [
          {
            name: '查询表格',
            path: 'table-list',
            component: dynamicWrapper(app, ['rule'], () => import('../routes/List/TableList')),
          },
          {
            name: '标准列表',
            path: 'basic-list',
            component: dynamicWrapper(app, ['list'], () => import('../routes/List/BasicList')),
          },
          {
            name: '卡片列表',
            path: 'card-list',
            component: dynamicWrapper(app, ['list'], () => import('../routes/List/CardList')),
          },
          {
            name: '搜索列表（项目）',
            path: 'cover-card-list',
            component: dynamicWrapper(app, ['list'], () => import('../routes/List/CoverCardList')),
          },
          {
            name: '搜索列表（应用）',
            path: 'filter-card-list',
            component: dynamicWrapper(app, ['list'], () => import('../routes/List/FilterCardList')),
          },
          {
            name: '搜索列表（文章）',
            path: 'search',
            component: dynamicWrapper(app, ['list'], () => import('../routes/List/SearchList')),
          },
        ],
      },
      {
        name: '详情页',
        path: 'profile',
        icon: 'profile',
        children: [
          {
            name: '基础详情页',
            path: 'basic',
            component: dynamicWrapper(app, ['profile'], () => import('../routes/Profile/BasicProfile')),
          },
          {
            name: '高级详情页',
            path: 'advanced',
            component: dynamicWrapper(app, ['profile'], () => import('../routes/Profile/AdvancedProfile')),
          },
        ],
      },
      {
        name: '结果',
        path: 'result',
        icon: 'check-circle-o',
        children: [
          {
            name: '成功',
            path: 'success',
            component: dynamicWrapper(app, [], () => import('../routes/Result/Success')),
          },
          {
            name: '失败',
            path: 'fail',
            component: dynamicWrapper(app, [], () => import('../routes/Result/Error')),
          },
        ],
      },
      {
        name: '异常',
        path: 'exception',
        icon: 'warning',
        children: [
          {
            name: '403',
            path: '403',
            component: dynamicWrapper(app, [], () => import('../routes/Exception/403')),
          },
          {
            name: '404',
            path: '404',
            component: dynamicWrapper(app, [], () => import('../routes/Exception/404')),
          },
          {
            name: '500',
            path: '500',
            component: dynamicWrapper(app, [], () => import('../routes/Exception/500')),
          },
        ],
      },
    ],
  },
  {
    component: dynamicWrapper(app, [], () => import('../layouts/UserCenterLayout')),
    layout: 'UserCenterLayout',
    path: '/userCenter',
    children: [{
      name: '个人中心',
      path: 'userCenter',
      icon: 'user',
      children: [
        {
          name: '头像信息',
          icon: 'user',
          path: 'head',
          component: dynamicWrapper(app, [], () => import('../routes/UserCenter/Header')),
        },
      ],
    }],
  },
  {
    component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
    path: '/user',
    layout: 'UserLayout',
    children: [
      {
        name: '帐户',
        icon: 'user',
        path: 'user',
        children: [
          {
            name: '登录',
            path: 'login',
            component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login')),
          },
          {
            name: '注册',
            path: 'register',
            component: dynamicWrapper(app, ['register'], () => import('../routes/User/Register')),
          },
          {
            name: '注册结果',
            path: 'register-result',
            component: dynamicWrapper(app, [], () => import('../routes/User/RegisterResult')),
          },
        ],
      },
    ],
  },
  {
    component: dynamicWrapper(app, [], () => import('../layouts/BlankLayout')),
    layout: 'BlankLayout',
    children: {
      name: '使用文档',
      path: 'http://pro.ant.design/docs/getting-started',
      target: '_blank',
      icon: 'book',
    },
  },
];
