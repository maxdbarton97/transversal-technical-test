import { APP } from "../../constants/action-types";

const appReducer = (state, { type, payload }) => {
    switch (type) {
    case APP.SET_SEARCH_VALUE:
        state.searchValue = payload;
        break;
    case APP.SET_SEARCHING:
        state.searching = payload;
        break;
    default:
        throw new Error("action type not recognized in app reducer");
    }

    return { ...state };
};

export default appReducer;
