import * as server from './server';

export default {
    namespace: 'caiji',
    state: {
        data:[]
    },
    reducers: {
        save(state, { payload: { data } }) {
            return { ...state, data };
        }
    },
    effects: {
        *query({payload: {page="1"} },{ call, put}){
            const {data} =yield call(server.query,{page});
            if(data){
            
            }else{
            
            }
        }
    }
};