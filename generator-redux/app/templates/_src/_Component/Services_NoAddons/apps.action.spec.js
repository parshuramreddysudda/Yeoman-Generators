import * as <%= componentCapital %>Action from './<%= componentLower %>.action'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
// jest.mock('./app.action')

<%= componentLower %>
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Testing <%= componentCapital %> Component Actions ', () => {

    test('should handle <%= componentCapital %> component calls', () => {
        
    });
})