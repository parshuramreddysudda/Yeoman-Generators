import { combineReducers } from "redux";
import applicationReducer from './Application/Services/application.reducer'
// import component2Reducer from "Component2"

export default combineReducers({
   application:applicationReducer,
   // componentname:component2Reducer
});