import {createStore, bindActionCreators} from 'redux'

const cityReducer = (state = {city:"mumbai"},action) => {
    if(action.type == 'change'){
        return{
            city : action.city
        }
    }
    
    return state
}

const store = createStore(cityReducer);

export default store;