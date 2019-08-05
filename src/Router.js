import React from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import HtmlPage from "./Components/HtmlPage";
import CssPage from "./Components/CssPage";
import JavaScriptPage from "./Components/JavaScriptPage";
import GeneralPage from "./Components/GeneralPage";
import DesignPage from "./Components/DesignPage";
import AccessibilityPage from "./Components/AccessibilityPage";
import SquarespacePage from "./Components/SquarespacePage";
import WordPressPage from "./Components/WordPressPage";
import ShopifyPage from "./Components/ShopifyPage";

const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/html" component={HtmlPage} />
    <Route exact path="/css" component={CssPage} />
    <Route exact path="/javascript" component={JavaScriptPage} />
    <Route exact path="/general" component={GeneralPage} />
    <Route exact path="/design" component={DesignPage} />
    <Route exact path="/accessibility" component={AccessibilityPage} />
    <Route exact path="/squarespace" component={SquarespacePage} />
    <Route exact path="/wordpress" component={WordPressPage} />
    <Route exact path="/shopify" component={ShopifyPage} />
  </BrowserRouter>
);

export default Router;
