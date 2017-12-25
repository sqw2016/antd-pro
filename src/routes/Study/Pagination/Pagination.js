import React from 'react';
import { Pagination, message } from 'antd';
import styles from './Pagination.less';

export default class PaginationStudy extends React.Component {
  pageSizeChange = (cur, pageSize) => {
    message.info(`pageSize改变成了每页${pageSize}条`);
  };
  currentPageChange = (page, pageSize) => {
    message.info(`当前为第${page}页，每页${pageSize}条`);
  };
  /* type:jump-prev,jump-next,prev,next,page */
  itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return '上一页';
    } else if (type === 'next') {
      return '下一页';
    }
    return originalElement;
  };
  render() {
    return (
      <div>
        <div className={styles.title}>Pagination Study</div>
        <div className={styles.container}>
          {/* 基本分页 */}
          <div className={styles.title}>基本分页</div>
          <Pagination
            defaultCurrent={1}
            total={200}
          />
          {/* 默认页码 */}
          <div className={styles.title}>默认页码</div>
          <Pagination
            defaultCurrent={6}
            total={200}
          />
          {/* 改变每页条数 */}
          <div className={styles.title}>改变每页条数</div>
          <Pagination
            defaultCurrent={6}
            showSizeChanger
            onShowSizeChange={this.pageSizeChange}
            total={200}
          />
          {/* 跳转到指定页 */}
          <div className={styles.title}>跳转到指定页</div>
          <Pagination
            defaultCurrent={6}
            showSizeChanger
            showQuickJumper
            onShowSizeChange={this.pageSizeChange}
            onChange={this.currentPageChange}
            total={200}
          />
          {/* 小尺寸分页 */}
          <div className={styles.title}>小尺寸分页</div>
          <Pagination
            defaultCurrent={1}
            size="small"
            total={200}
          />
          <Pagination
            defaultCurrent={6}
            size="small"
            showSizeChanger
            showQuickJumper
            onShowSizeChange={this.pageSizeChange}
            onChange={this.currentPageChange}
            total={200}
          />
          {/* 简单版本 */}
          <div className={styles.title}>简单版本</div>
          <Pagination
            defaultCurrent={1}
            simple={true}
            total={200}
          />
          <Pagination
            defaultCurrent={6}
            simple={true}
            showSizeChanger
            showQuickJumper
            onShowSizeChange={this.pageSizeChange}
            onChange={this.currentPageChange}
            total={200}
          />
          {/* 显示总数 */}
          <div className={styles.title}>显示总数</div>
          <Pagination
            defaultCurrent={6}
            showSizeChanger
            showQuickJumper
            showTotal={total => `总共${total}条`}
            onShowSizeChange={this.pageSizeChange}
            onChange={this.currentPageChange}
            total={200}
          />
          <Pagination
            defaultCurrent={6}
            showSizeChanger
            showQuickJumper
            showTotal={(total, range) => `${range[0]}-${range[1]}\\${total}`}
            onShowSizeChange={this.pageSizeChange}
            onChange={this.currentPageChange}
            total={200}
          />
          {/* 上下页跳转按钮改为文字 */}
          <div className={styles.title}>上下页跳转按钮改为文字</div>
          <Pagination
            defaultCurrent={1}
            itemRender={this.itemRender}
            total={200}
          />
        </div>
      </div>
    );
  }
}
