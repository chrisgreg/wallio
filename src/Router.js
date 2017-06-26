import { TabNavigator } from 'react-navigation';

import Hot from './Hot';

const NavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
};

const routes = {
  Home: {
    screen: Hot,
  },
  Latest: {
    screen: Latest,
  }
};

export default TabNavigator(routes, NavigatorConfig);
