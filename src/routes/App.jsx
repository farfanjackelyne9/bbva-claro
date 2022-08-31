import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Home/>
            </Layout>
        </BrowserRouter>

    );
}
export default App;
