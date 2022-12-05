import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";

import { StateContext } from "../context/StateContext";
import { AuthContext } from "../context/AuthContext";
import store from "../store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContext>
      <StateContext>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </StateContext>
    </AuthContext>
  );
}

export default MyApp;
