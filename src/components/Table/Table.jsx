/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import {
    useLayoutEffect, useRef, useState, useContext,
} from "react";
import { Table as TableComponent, Typography } from "antd";
import PropTypes from "prop-types";

import { Search } from "../Search";

import { snakeToTitle } from "../../helpers";

import AppContext from "../../contexts/app";

const { Title } = Typography;

const Table = ({ catagory, dataSource }) => {
    const { state: { searching } } = useContext(AppContext);
    const [tableHeight, setTableHeight] = useState();
    const container = useRef(null);
    const heading = useRef(null);

    // derive the columns from the datasource, as they are dynamic.
    const columns = dataSource?.length ? Object.keys(dataSource[0]).map((key) => ({
        title: snakeToTitle(key),
        dataIndex: key,
        ellipsis: true,
        key,
    })) : [];

    const calculateTableHeight = () => {
        // 115 is the sum of vertical padding used in parent and h1.
        setTableHeight(container.current.clientHeight - heading.current.clientHeight - 115);
    };

    useLayoutEffect(calculateTableHeight, [container.current && heading.current]);

    useLayoutEffect(() => {
        window.addEventListener("resize", () => calculateTableHeight());
        return window.removeEventListener("resize", () => calculateTableHeight());
    }, []);

    return (
        <div
          ref={container}
          style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              gap: 2,
          }}
        >
            <div
              ref={heading}
              style={{
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                  gap: 10,
              }}
            >
                <Title style={{ flex: 1 }} level={2}>{catagory.label}</Title>
                <Search />
            </div>

            <TableComponent
              pagination={false}
              loading={searching}
              style={{ paddingBottom: 20 }}
              scroll={{ y: tableHeight, x: dataSource.length ? "auto" : null }}
              dataSource={dataSource}
              columns={columns}
            />
        </div>
    );
};

Table.propTypes = {
    catagory: PropTypes.shape({
        label: PropTypes.string.isRequired,
        queryFn: PropTypes.func,
    }).isRequired,
    dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
