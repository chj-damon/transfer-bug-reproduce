import React from 'react';
import { Transfer, ConfigProvider, Empty, Calendar } from 'antd';
import styles from './index.less';

export default () => {
  return (
    <ConfigProvider
      renderEmpty={() => (
        <Empty
          image={require('../assets/pic_empty.png')}
          description="暂无数据"
        />
      )}
    >
      <div className={styles.normal}>
        <Transfer
          dataSource={[]}
          showSearch
          targetKeys={[]}
          render={item => item.title!}
        />

        <div style={{ width: 500 }}>
          <Calendar fullscreen={false} value={new Date()} />
        </div>
      </div>
    </ConfigProvider>
  );
};
