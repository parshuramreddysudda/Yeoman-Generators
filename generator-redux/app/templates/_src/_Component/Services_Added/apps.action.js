
// This can be your instance of Api I have used Axios for my instance
// import API from '../AxiosInstance'
export const fetch<%= componentCapital %>sPending = () => ({
  type: 'FETCH_<%= componentUpper %>_PENDING'
});
export const fetch<%= componentCapital %>sCompleted = () => ({
  type: 'FETCH_<%= componentUpper %>_COMPLETED'
});
export const fetch<%= componentCapital %>sSuccess = (<%= componentLower %>) => ({
  type: 'FETCH_<%= componentUpper %>_SUCCESS',
  payload: <%= componentLower %>
});
export const fetch<%= componentCapital %>sError = (error) => ({
  type: 'FETCH_<%= componentUpper %>_ERROR',
  payload: error
});
export const update<%= componentCapital %>Pending = () => ({
  type: 'UPDATE_<%= componentUpper %>_PENDING'
});
export const update<%= componentCapital %>Completed = () => ({
  type: 'UPDATE_<%= componentUpper %>_COMPLETED'
});
export const update<%= componentCapital %>Success = (update<%= componentCapital %>, newData, id) => ({
  type: 'UPDATE_<%= componentUpper %>_SUCCESS',
  payload: { update<%= componentCapital %>, newData, id }

});
export const update<%= componentCapital %>Error = (error) => ({
  type: 'UPDATE_<%= componentUpper %>_ERROR',
  payload: error
});
export const delete<%= componentCapital %>Pending = () => ({
  type: 'DELETE_<%= componentUpper %>_PENDING'
});

export const delete<%= componentCapital %>Completed = () => ({
  type: 'DELETE_<%= componentUpper %>_COMPLETED'
});

export const delete<%= componentCapital %>Success = (id) => ({
  type: 'DELETE_<%= componentUpper %>_SUCCESS',
  payload: id
});
export const delete<%= componentCapital %>Error = (error) => ({
  type: 'DELETE_<%= componentUpper %>_ERROR',
  payload: error
});

export const create<%= componentCapital %>Pending = () => ({
  type: 'CREATE_<%= componentUpper %>_PENDING'
});

export const create<%= componentCapital %>Completed = () => ({
  type: 'CREATE_<%= componentUpper %>_COMPLETED'
});

export const create<%= componentCapital %>Success = (params) => ({
  type: 'CREATE_<%= componentUpper %>_SUCCESS',
  payload: { params }
});
export const create<%= componentCapital %>Error = (error) => ({
  type: 'CREATE_<%= componentUpper %>_ERROR',
  payload: error
});
export const reset<%= componentCapital %>s = () => ({
  type: 'RESET_<%= componentUpper %>'
});

export const fetch<%= componentCapital %>s = (params) => (dispatch) => {

  dispatch(fetch<%= componentCapital %>sPending());
  return API.get(/**'<%= componentCapital %>s', { params: params }**/)
    .then(fetch<%= componentCapital %>sResponce => {
      dispatch(fetch<%= componentCapital %>sSuccess(fetch<%= componentCapital %>sResponce.data));
    })
    .catch(error => dispatch(fetch<%= componentCapital %>sError(error)))
    .finally(() => dispatch(fetch<%= componentCapital %>sCompleted()));
};

export const update<%= componentCapital %> = (params, newData, id) => (dispatch) => {

  dispatch(update<%= componentCapital %>Pending());
  return API.put(/**'<%= componentCapital %>s', { params: params }**/)
    .then(update<%= componentCapital %>Responce => {
      dispatch(update<%= componentCapital %>Success(update<%= componentCapital %>Responce.data, newData.data, id));
    })
    .catch(error => dispatch(update<%= componentCapital %>Error(error)))
    .finally(() => dispatch(update<%= componentCapital %>Completed()));
};

export const delete<%= componentCapital %> = (id) => (dispatch) => {
  dispatch(delete<%= componentCapital %>Pending());
  return API.delete(/**'<%= componentCapital %>s', { params: params }**/)
    .then(delete<%= componentCapital %>Responce => {
      dispatch(delete<%= componentCapital %>Success(id));
      return Promise.resolve(delete<%= componentCapital %>Responce);
    })
    .catch(error => dispatch(delete<%= componentCapital %>Error(error)))
    .finally(() => dispatch(delete<%= componentCapital %>Completed()));
};


export const create<%= componentCapital %> = (params) => (dispatch) => {
  dispatch(create<%= componentCapital %>Pending());
  return API.put(/**'<%= componentCapital %>s', { params: params }**/)
    .then(create<%= componentCapital %>Responce => {
      dispatch(create<%= componentCapital %>Success(params));
    })
    .catch(error => dispatch(create<%= componentCapital %>Error(error)))
    .finally(() => dispatch(create<%= componentCapital %>Completed()));
};

