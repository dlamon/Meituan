const initState = {
  items: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_ITEMS':
      return { ...state, items: [...action.payload.data.primary_filter] };
    default:
      return state;
  }
};

export default reducer;
