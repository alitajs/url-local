
import React, { FC } from 'react';
import { useRequest, useIntl, history } from 'alita';
import { query } from './service';
import styles from './index.less';

interface HomePageProps { }

const HomePage: FC<HomePageProps> = ({ location }) => {
  const { data } = useRequest(query);
  const intl = useIntl();
  return <div className={styles.center} >
    <div onClick={() => {
      history.push(location.pathname === '/zhtw/' ? '/en/' : '/zhtw/')
    }}>
      Hello {data?.text}
      {intl.formatMessage(
        {
          id: 'title',
        }
      )}
    </div>
    <button onClick={() => {
      history.push('/demo');

    }}>go to CN Demo</button>
  </div>;
};

export default HomePage;
