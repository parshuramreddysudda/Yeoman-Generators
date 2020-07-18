import <%= componentLower %>Reducer from './<%= componentLower %>.reducer';

const intialState = {
    items: [],
    loading: false,
    error: null,
    updating: false
}
describe('Testing <%= componentCapital %>s Component Reducers ', () => {
    test('Should return Initial State ', () => {

        expect(<%= componentLower %>Reducer(undefined, {})).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })

    
})