import { Layout, Menu, Spin } from "antd";
import { useContext, useEffect, useState } from "react";

import { Table } from "./components";

import AppService from "./AppService";

import AppContext, { AppContextProvider } from "./contexts/app";

import { APP } from "./constants/action-types";

const { Header, Content } = Layout;

const catagories = [{
    label: "Planets",
    queryFn: AppService.getPlanets,
}, {
    label: "Starships",
    queryFn: AppService.getStarships,
}, {
    label: "People",
    queryFn: AppService.getPeople,
}];

const AppView = () => {
    const { dispatch, state: { searchValue } } = useContext(AppContext);
    const [selectedCatagory, setSelectedCatagory] = useState(catagories[0]);
    const [dataSource, setDataSource] = useState(null);

    useEffect(() => {
        (async () => {
            dispatch({ type: APP.SET_SEARCHING, payload: true });
            const data = await selectedCatagory.queryFn({ name: searchValue });
            setDataSource(data);
            dispatch({ type: APP.SET_SEARCHING, payload: false });
        })();
    }, [selectedCatagory, searchValue]);

    return (
        <Layout className="layout" style={{ background: "#ccc" }}>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={selectedCatagory.label}>
                    {catagories.map((catagory) => (
                        <Menu.Item
                          key={catagory.label}
                          onClick={() => setSelectedCatagory(catagory)}
                        >
                            {catagory.label}
                        </Menu.Item>
                    ))}
                </Menu>
            </Header>

            {/* Top Navigation: the height of the first level navigation 64px */}
            <Content style={{ height: "calc(100vh - 64px)", padding: "30px" }}>
                <div style={{ height: "100%", padding: "20px", background: "white" }}>
                    {dataSource ? (
                        <Table catagory={selectedCatagory} dataSource={dataSource} />
                    ) : (
                        <div
                          style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                          }}
                        >
                            <Spin size="large" />
                        </div>
                    )}

                </div>
            </Content>
        </Layout>
    );
};

const App = () => (
    <AppContextProvider>
        <AppView />
    </AppContextProvider>
);

export default App;
