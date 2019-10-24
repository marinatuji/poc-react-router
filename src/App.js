import React from "react";
import NavSide from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import Information from "./components/AnyPage";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <NavSide />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/information" component={Information} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// render: () ->
//     (<Menu
//         mode="horizontal"
//         defaultSelectedKeys={['1']}
//         style={{ lineHeight: '48px' }}
//       >
//         <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
//         <Menu.Item key="2"><Link to="/discover">Discover</Link></Menu.Item>
//         <Menu.Item key="3"><Link to="/mylists">My Lists</Link></Menu.Item>
//       </Menu>
//     )

export default App;
