import {FETCHING, FETCHING_SUCCESS, FETCHING_FAILED, ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILED, DELETING_SMURFS, DELETING_SMURFS_SUCCESS, DELETING_SMURFS_FAILURE} from '../actions/index';

const initialState = {
    smurfs: [],
    fetchingSmurf: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING:
            return {
                ...state,
                fetchingSmurf: false,
                error: ''
            }
        case FETCHING_SUCCESS:
            return {
                ...state, 
                fetchingSmurf: true,
                error: '',
                smurfs: [...state.smurfs, ...action.payload]
            }
        case FETCHING_FAILED:
            return {
                ...state,
                fetchingSmurf: false,
                error: action.payload
            }
        case ADD_SMURF:
            return {
                ...state,
                fetchingSmurf: false,
                addingSmurf: true,
                error: ''
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                fetchingSmurfs: false,
                addingSmurf: false,
                error: ''
            }
        case ADD_SMURF_FAILED:
            return {
                ...state,
                fetchingSmurfs: false,
                addingSmurf: false,
                error: ''
            }
        case DELETING_SMURFS: 
            return {
                ...state,
                addingSmurf: false,
                deletingSmurf: true,
                error: ''
            }
        case DELETING_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                addingSmurf: false,
                deletingSmurf: true,
                error: ''
            }
        case DELETING_SMURFS_FAILURE:
            return {
                ...state,
                deletingSmurf: false
            }
        default: 
        return state;
    }
};

export default reducer;