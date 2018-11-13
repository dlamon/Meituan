const initState = {
  itemList: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_HOME_LIST':
      return { ...state, itemList: [...action.payload.data.poilist] };
    default:
      return state;
  }
};

export default reducer;
