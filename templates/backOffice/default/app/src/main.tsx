import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Route, HashRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';

import "./styles/index.css";
import 'react-toastify/dist/ReactToastify.css';

import store from "./redux/store";
import CreateGroup from "./pages/CreateGroup";
import EditGroup from "./pages/EditGroup";
import ListGroups from "./pages/ListGroups";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const TheliaBlocksBackOffice = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <div className="px-4">
            <div className="">
              <Link to="/" className="mr-4 btn btn-default">
                Liste des groupes de blocs
              </Link>
              <Link to="/create" className="btn btn-primary">
                Ajouter un groupe de blocs
              </Link>
            </div>
            <div className="mt-8">
              <Switch>
                <Route path="/edit/:id">
                  <EditGroup />
                </Route>
                <Route path="/create">
                  <CreateGroup />
                </Route>
                <Route path="/">
                  <ListGroups />
                </Route>
              </Switch>
            </div>
            <ToastContainer autoClose={3000} />
          </div>
        </Router>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default TheliaBlocksBackOffice;
