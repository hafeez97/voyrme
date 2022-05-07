import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./shared/redux/store";
import HomePage from "./pages/home/homePage";
import ExplorePage from "./pages/explore/explorePage";
import { MoralisProvider } from "react-moralis";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl="https://bxcg2yvfw8jj.usemoralis.com:2053/server"
      appId="PQ5FzSH9wQ1H2uRDttyO0TzelZU9h1lnNpKyG53P"
    >
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/*<Route path={"/"} element={<App />} />*/}
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/Explore"} element={<ExplorePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </MoralisProvider>
  </React.StrictMode>
);
