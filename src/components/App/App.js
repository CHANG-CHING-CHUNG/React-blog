import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import Header from "../Header/";
import SinglePostPage from "../../pages/SinglePostPage";
import { AuthContext } from "../../contexts";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

const Root = styled.div`
  padding-top: 64px;
`;

function App() {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Root>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/posts/:id" children={<SinglePostPage />} />
          </Switch>
        </Router>
      </Root>
    </AuthContext.Provider>
  );
}

export default App;
