import React, { useReducer } from "react";
import PropTypes from "prop-types";

import AppContext from "./context";

import appReducer from "./reducer";

const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, {
        searchValue: "",
        searching: false,
    });

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppContextProvider;
