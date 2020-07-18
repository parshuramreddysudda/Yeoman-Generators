import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchNetworks,resetNetworks,updateNetwork,deleteNetwork,createNetwork
} from './Services/networks.action'
import network from './Networks'

const mapStateToProps = state => ({
  networks: state.network.items,
  loading: state.network.loading,
  updating: state.network.updating,
  error: state.network.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNetworks:fetchNetworks,
  createNetwork:createNetwork,
  resetNetworks:resetNetworks,
  updateNetwork:updateNetwork,
  deleteNetwork:deleteNetwork
}, dispatch);

const NetworksContainer = connect(mapStateToProps, mapDispatchToProps)(network);

export default NetworksContainer;
