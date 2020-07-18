import applicationReducer from './application.reducer';

const intialState = {
    items: [],
    loading: false,
    error: null,
    updating: false
}
describe('Testing Applications Component Reducers ', () => {
    test('Should return Initial State ', () => {

        expect(applicationReducer(undefined, {})).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })

    
})