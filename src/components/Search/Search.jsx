/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { useCallback, useContext } from "react";
import debounce from "lodash/debounce";
import { Input } from "antd";

import AppContext from "../../contexts/app";

import { APP } from "../../constants/action-types";

const Search = () => {
    const { dispatch } = useContext(AppContext);

    const handler = useCallback(debounce((value) => {
        dispatch({
            type: APP.SET_SEARCH_VALUE,
            payload: value,
        });
    }, 500), []);

    const onChange = ({ target: { value } }) => handler(value);

    return (
        <Input
          placeholder="Search..."
          onChange={onChange}
          style={{ marginBottom: 10, width: 200 }}
        />
    );
};

export default Search;
