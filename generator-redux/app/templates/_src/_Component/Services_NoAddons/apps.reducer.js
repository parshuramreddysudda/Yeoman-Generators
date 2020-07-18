const initialState = {
    items: [],
    loading: false,
    error: null,
    updating: false
  }
  
  const <%= componentLower %>Reducer = (state = initialState, action) => {
    switch (action.type) {
  
      // case 'SOME_API_CALL':
      //   return {
      //     ...state,
      //     loading: true
      //   };

      default:
        return state;
    }
  
  }
  export default <%= componentLower %>Reducer;