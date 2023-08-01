import { legacy_createStore as configureStore, combineReducers } from 'redux'

import numerosReducers from './reducers/numerosReducers'

const reducers = combineReducers({
    numeros: numerosReducers
})

function storeConfig() {
    return configureStore(reducers)
}

export default storeConfig