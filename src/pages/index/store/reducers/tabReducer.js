import { TABKEY } from '@/constants';

const initState = {
  tabs: [
    {
      name: '首页',
      key: TABKEY.home
    },
    {
      name: '订单',
      key: TABKEY.order
    },
    {
      name: '我的',
      key: TABKEY.my
    }
  ],
  activeKey: TABKEY.home
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'TAB_CHANGED':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
