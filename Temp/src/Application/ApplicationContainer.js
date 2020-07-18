import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchApplications,resetApplications,updateApplication,deleteApplication,createApplication
} from './Services/applications.action'
import application from './Applications'

const mapStateToProps = state => ({
  applications: state.application.items,
  loading: state.application.loading,
  updating: state.application.updating,
  error: state.application.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchApplications:fetchApplications,
  createApplication:createApplication,
  resetApplications:resetApplications,
  updateApplication:updateApplication,
  deleteApplication:deleteApplication
}, dispatch);

const ApplicationsContainer = connect(mapStateToProps, mapDispatchToProps)(application);

export default ApplicationsContainer;
