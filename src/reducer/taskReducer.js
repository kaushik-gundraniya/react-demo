const initialState = {
    tasks: 0
};
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOTAL_TASKS':
        return {
          ...state,
          tasks: action.payload.count
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;