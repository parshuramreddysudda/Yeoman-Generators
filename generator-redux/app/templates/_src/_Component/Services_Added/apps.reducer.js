const initialState = {
    items: [],
    loading: false,
    error: null,
    updating: false
  }
  
  const <%= componentLower %>Reducer = (state = initialState, action) => {
    switch (action.type) {
  
      case 'FETCH_<%= componentUpper %>_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'FETCH_<%= componentUpper %>_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'FETCH_<%= componentUpper %>_SUCCESS':
        return {
          ...state,
          items: action.payload
        };
  
      case 'FETCH_<%= componentUpper %>_ERROR':
        return {
          ...state,
          error: action.payload
        };
      case 'RESET_<%= componentUpper %>':
        return {
          ...state,
          items: []
        }
      case 'UPDATE_<%= componentUpper %>_PENDING':
        return {
          ...state,
          updating: true
        };
      case 'UPDATE_<%= componentUpper %>_COMPLETED':
        return {
          ...state,
          updating: false
        };
      case 'UPDATE_<%= componentUpper %>_ERROR':
        return {
          ...state,
          error: action.payload
        }; 
      case 'UPDATE_<%= componentUpper %>_SUCCESS':
  
        return {
          ...state,
          items:action.payload.newData
        }
      case 'DELETE_<%= componentUpper %>_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'DELETE_<%= componentUpper %>_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'DELETE_<%= componentUpper %>_SUCCESS':
        return {
          ...state,
          // items: delete id logic
        };
  
      case 'DELETE_<%= componentUpper %>_ERROR':
        return {
          ...state,
          error: action.payload
        };
        case 'CREATE_<%= componentUpper %>_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'CREATE_<%= componentUpper %>_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'CREATE_<%= componentUpper %>_SUCCESS':
        return {
          ...state,
          // items: Create id logic,
        };
  
      case 'CREATE_<%= componentUpper %>_ERROR':
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  
  }
  export default <%= componentLower %>Reducer;