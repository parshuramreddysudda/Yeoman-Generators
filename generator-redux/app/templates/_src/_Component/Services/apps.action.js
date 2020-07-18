
// This can be your instance of Api I have used Axios for my instance
// import API from '../AxiosInstance'
export const fetchAppsPending = () => ({
  type: 'FETCH_APP_PENDING'
});
export const fetchAppsCompleted = () => ({
  type: 'FETCH_APP_COMPLETED'
});
export const fetchAppsSuccess = (machines) => ({
  type: 'FETCH_APP_SUCCESS',
  payload: machines
});
export const fetchAppsError = (error) => ({
  type: 'FETCH_APP_ERROR',
  payload: error
});
export const updateAppPending = () => ({
  type: 'UPDATE_APP_PENDING'
});
export const updateAppCompleted = () => ({
  type: 'UPDATE_APP_COMPLETED'
});
export const updateAppSuccess = (updateApp, newData, id) => ({
  type: 'UPDATE_APP_SUCCESS',
  payload: { updateApp, newData, id }

});
export const updateAppError = (error) => ({
  type: 'UPDATE_APP_ERROR',
  payload: error
});
export const deleteAppPending = () => ({
  type: 'DELETE_APP_PENDING'
});

export const deleteAppCompleted = () => ({
  type: 'DELETE_APP_COMPLETED'
});

export const deleteAppSuccess = (id) => ({
  type: 'DELETE_APP_SUCCESS',
  payload: id
});
export const deleteAppError = (error) => ({
  type: 'DELETE_APP_ERROR',
  payload: error
});

export const createAppPending = () => ({
  type: 'CREATE_APP_PENDING'
});

export const createAppCompleted = () => ({
  type: 'CREATE_APP_COMPLETED'
});

export const createAppSuccess = (params) => ({
  type: 'CREATE_APP_SUCCESS',
  payload: { params }
});
export const createAppError = (error) => ({
  type: 'CREATE_APP_ERROR',
  payload: error
});
export const resetApps = () => ({
  type: 'RESET_APP'
});

export const fetchApps = (params) => (dispatch) => {

  dispatch(fetchAppsPending());
  return API.get(/**'Apps', { params: params }**/)
    .then(fetchAppsResponce => {
      dispatch(fetchAppsSuccess(fetchAppsResponce.data));
    })
    .catch(error => dispatch(fetchAppsError(error)))
    .finally(() => dispatch(fetchAppsCompleted()));
};

export const updateApp = (params, newData, id) => (dispatch) => {

  dispatch(updateAppPending());
  return API.put(/**'Apps', { params: params }**/)
    .then(updateAppResponce => {
      dispatch(updateAppSuccess(updateAppResponce.data, newData.data, id));
    })
    .catch(error => dispatch(updateAppError(error)))
    .finally(() => dispatch(updateAppCompleted()));
};

export const deleteApp = (id) => (dispatch) => {
  dispatch(deleteAppPending());
  return API.delete(/**'Apps', { params: params }**/)
    .then(deleteAppResponce => {
      dispatch(deleteAppSuccess(id));
      return Promise.resolve(deleteAppResponce);
    })
    .catch(error => dispatch(deleteAppError(error)))
    .finally(() => dispatch(deleteAppCompleted()));
};


export const createApp = (params) => (dispatch) => {
  dispatch(createAppPending());
  return API.put(/**'Apps', { params: params }**/)
    .then(createAppResponce => {
      dispatch(createAppSuccess(params));
    })
    .catch(error => dispatch(createAppError(error)))
    .finally(() => dispatch(createAppCompleted()));
};

