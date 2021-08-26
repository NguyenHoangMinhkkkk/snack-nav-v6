import HomeTab from './HomeTab';
import ProfileTab from './ProfileTab';

export default {
  homeTab: {
    component: HomeTab,
  },
  profileTab: {
    component: ProfileTab,
  },
};

export const tabBarOptions = {
  homeTab: {
    tabBarLabel: 'Home',
    isNeedLogin: false,
  },
  profileTab: {
    tabBarLabel: 'Profile',
    isNeedLogin: false,
  },
};
