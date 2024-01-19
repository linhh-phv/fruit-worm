import * as React from 'react';
import AppContainer from './src';
import {StatusBar} from 'react-native';
import {initState, reducer} from './src/hooks/useCheckIp';
import axios from 'axios';
import Loading from './src/components/loading';
import GamePortal from './src/feature/gamePortal/ index';

function App() {
  const [state, dispatch] = React.useReducer(reducer, initState);

  const getIPInfo = async () => {
    dispatch({type: 'getIpNetwork'});
    try {
      const response = await axios.get('https://ipinfo.io/json');

      if (response.data?.country === 'VN') {
        dispatch({type: 'setIpNetwork', payload: {isIpVN: true}});
      } else {
        dispatch({type: 'setIpNetwork', payload: {isIpVN: false}});
      }
    } catch (error) {
      dispatch({type: 'setIpNetwork', payload: {isIpVN: true}});
    }
  };

  React.useEffect(() => {
    getIPInfo();
  }, []);

  if (state.loading) {
    return <Loading />;
  }

  if (state.isIpVN) {
    return <GamePortal />;
  }

  return (
    <>
      <StatusBar
        backgroundColor="#FFFFFF00"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <AppContainer />
    </>
  );
}

export default App;
