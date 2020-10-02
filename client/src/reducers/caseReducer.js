import {
  RECEIVE_CASES,
  RECEIVE_TOTAL,
  RECEIVE_NEW,
} from "../actions/caseActions";

const caseReducer = (state = [], action) => {
    //Object.freeze(state);
    //let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CASES:
            return action.cases;
        case RECEIVE_TOTAL:
            return action.total;
        case RECEIVE_NEW:
            return action.newCase;    
        default:
            return state;
    }
};

export default caseReducer;
