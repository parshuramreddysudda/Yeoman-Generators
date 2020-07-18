import * as ApplicationAction from './application.action'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
// jest.mock('./app.action')

application
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Testing Application Component Actions ', () => {

    test('should handle Application component calls', () => {
        
    });
})