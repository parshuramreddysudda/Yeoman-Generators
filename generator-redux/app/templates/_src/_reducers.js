import { combineReducers } from "redux";
import <%= componentLower %>Reducer from './<%= componentCapital %>/Services/<%= componentLower %>.reducer'
// import component2Reducer from "Component2"

export default combineReducers({
   <%= componentLower %>:<%= componentLower %>Reducer,
   // componentname:component2Reducer
});