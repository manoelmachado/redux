import { configureStore, combineReducers } from 'redux' 

const reducers = combineReducers({
    numeros: function(state, action) {
        console.log(state, ' ', action)
        return {
            min: 1,
            nax: 10
        }
    },
    nomes: function(state, action) {
        console.log(state, ' ', action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig() {
    return configureStore(reducers)
}

export default storeConfig