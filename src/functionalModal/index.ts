import { ConfigsType } from '../navigationType';
import { FunctionalModalParamsType } from './type';

import AlertModal from './AlertModal';

export default {
  alertModal: {
    component: AlertModal,
    options: {
      gestureEnabled: true,
    },
  },
} as ConfigsType<FunctionalModalParamsType>;
