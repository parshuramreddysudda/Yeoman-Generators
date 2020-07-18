const initialState = {
    items: [],
    loading: false,
    error: null,
    updating: false
  }
  application
  
  const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case 'FETCH_APPLICATION_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'FETCH_APPLICATION_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'FETCH_APPLICATION_SUCCESS':
        return {
          ...state,
          items: action.payload
        };
  
      case 'FETCH_APPLICATION_ERROR':
        return {
          ...state,
          error: action.payload
        };
      case 'RESET_APPLICATION':
        return {
          ...state,
          items: []
        }
      case 'UPDATE_APPLICATION_PENDING':
        return {
          ...state,
          updating: true
        };
      case 'UPDATE_APPLICATION_COMPLETED':
        return {
          ...state,
          updating: false
        };
      case 'UPDATE_APPLICATION_ERROR':
        return {
          ...state,
          error: action.payload
        }; 
      case 'UPDATE_APPLICATION_SUCCESS':
  
        return {
          ...state,
          items:action.payload.newData
        }
      case 'DELETE_APPLICATION_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'DELETE_APPLICATION_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'DELETE_APPLICATION_SUCCESS':
        return {
          ...state,
          // items: delete id logic
        };
  
      case 'DELETE_APPLICATION_ERROR':
        return {
          ...state,
          error: action.payload
        };
        case 'CREATE_APPLICATION_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'CREATE_APPLICATION_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'CREATE_APPLICATION_SUCCESS':
        return {
          ...state,
          // items: Create id logic,
        };
  
      case 'CREATE_APPLICATION_ERROR':
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  
  }
  export default applicationReducer;