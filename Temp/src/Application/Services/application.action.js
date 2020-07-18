
// This can be your instance of Api I have used Axios for my instance
// import API from '../AxiosInstance'
export const fetchApplicationsPending = () => ({
  type: 'FETCH_APPLICATION_PENDING'
});
export const fetchApplicationsCompleted = () => ({
  type: 'FETCH_APPLICATION_COMPLETED'
});
export const fetchApplicationsSuccess = (application) => ({
  type: 'FETCH_APPLICATION_SUCCESS',
  payload: application
});
export const fetchApplicationsError = (error) => ({
  type: 'FETCH_APPLICATION_ERROR',
  payload: error
});
export const updateApplicationPending = () => ({
  type: 'UPDATE_APPLICATION_PENDING'
});
export const updateApplicationCompleted = () => ({
  type: 'UPDATE_APPLICATION_COMPLETED'
});
export const updateApplicationSuccess = (updateApplication, newData, id) => ({
  type: 'UPDATE_APPLICATION_SUCCESS',
  payload: { updateApplication, newData, id }

});
export const updateApplicationError = (error) => ({
  type: 'UPDATE_APPLICATION_ERROR',
  payload: error
});
export const deleteApplicationPending = () => ({
  type: 'DELETE_APPLICATION_PENDING'
});

export const deleteApplicationCompleted = () => ({
  type: 'DELETE_APPLICATION_COMPLETED'
});

export const deleteApplicationSuccess = (id) => ({
  type: 'DELETE_APPLICATION_SUCCESS',
  payload: id
});
export const deleteApplicationError = (error) => ({
  type: 'DELETE_APPLICATION_ERROR',
  payload: error
});

export const createApplicationPending = () => ({
  type: 'CREATE_APPLICATION_PENDING'
});

export const createApplicationCompleted = () => ({
  type: 'CREATE_APPLICATION_COMPLETED'
});

export const createApplicationSuccess = (params) => ({
  type: 'CREATE_APPLICATION_SUCCESS',
  payload: { params }
});
export const createApplicationError = (error) => ({
  type: 'CREATE_APPLICATION_ERROR',
  payload: error
});
export const resetApplications = () => ({
  type: 'RESET_APPLICATION'
});

export const fetchApplications = (params) => (dispatch) => {

  dispatch(fetchApplicationsPending());
  return API.get(/**'Applications', { params: params }**/)
    .then(fetchApplicationsResponce => {
      dispatch(fetchApplicationsSuccess(fetchApplicationsResponce.data));
    })
    .catch(error => dispatch(fetchApplicationsError(error)))
    .finally(() => dispatch(fetchApplicationsCompleted()));
};

export const updateApplication = (params, newData, id) => (dispatch) => {

  dispatch(updateApplicationPending());
  return API.put(/**'Applications', { params: params }**/)
    .then(updateApplicationResponce => {
      dispatch(updateApplicationSuccess(updateApplicationResponce.data, newData.data, id));
    })
    .catch(error => dispatch(updateApplicationError(error)))
    .finally(() => dispatch(updateApplicationCompleted()));
};

export const deleteApplication = (id) => (dispatch) => {
  dispatch(deleteApplicationPending());
  return API.delete(/**'Applications', { params: params }**/)
    .then(deleteApplicationResponce => {
      dispatch(deleteApplicationSuccess(id));
      return Promise.resolve(deleteApplicationResponce);
    })
    .catch(error => dispatch(deleteApplicationError(error)))
    .finally(() => dispatch(deleteApplicationCompleted()));
};


export const createApplication = (params) => (dispatch) => {
  dispatch(createApplicationPending());
  return API.put(/**'Applications', { params: params }**/)
    .then(createApplicationResponce => {
      dispatch(createApplicationSuccess(params));
    })
    .catch(error => dispatch(createApplicationError(error)))
    .finally(() => dispatch(createApplicationCompleted()));
};

