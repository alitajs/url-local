
import React, { FC } from 'react';
import { useIntl, history } from 'alita';
import styles from './index.less';

interface HomePageProps { }

const HomePage: FC<HomePageProps> = ({ location }) => {
  const intl = useIntl();
  return <div className={styles.center} onClick={() => {
    history.push(location.pathname === '/en/demo' ? '/demo/' : '/en/demo')
  }}>
    Change Demo：
    {intl.formatMessage(
      {
        id: 'title',
      }
    )}
  </div>;
};

export default HomePage;
