import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetch<%= componentUpper %>s,reset<%= componentUpper %>s,update<%= componentUpper %>,delete<%= componentUpper %>,create<%= componentUpper %>
} from './Services/<%= componentLower %>s.action'
import <%= componentLower %> from './<%= componentUpper %>s'

const mapStateToProps = state => ({
  <%= componentLower %>s: state.<%= componentLower %>.items,
  loading: state.<%= componentLower %>.loading,
  updating: state.<%= componentLower %>.updating,
  error: state.<%= componentLower %>.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetch<%= componentUpper %>s:fetch<%= componentUpper %>s,
  create<%= componentUpper %>:create<%= componentUpper %>,
  reset<%= componentUpper %>s:reset<%= componentUpper %>s,
  update<%= componentUpper %>:update<%= componentUpper %>,
  delete<%= componentUpper %>:delete<%= componentUpper %>
}, dispatch);

const <%= componentUpper %>sContainer = connect(mapStateToProps, mapDispatchToProps)(<%= componentLower %>);

export default <%= componentUpper %>sContainer;
