import { ConfigsType } from '../navigationType';
import { ModalParamsType } from './type';

import ModalA from './ModalA';
import ModalB from './ModalB';

export default {
  modalA: {
    component: ModalA,
    options: { title: 'Modal A' },
  },
  modalB: {
    component: ModalB,
    options: { title: 'Modal B' },
  },
} as ConfigsType<ModalParamsType>;
