import { commonReducer } from './ReducerCommon'
import { createStore } from 'redux'

export const inputField={
    type:'INPUT_FIELD',
    payLoad:{}
}

const store = createStore(commonReducer)

export default store