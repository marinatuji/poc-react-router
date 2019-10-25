import React from "react";
import NavSide from "../NavBar";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Child from "./Child";
// import App from "../../App";y

function AnyPage() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">
          <button>VOLTAR</button>
        </Link>

        <h2>AnyPage</h2>
        <NavSide />
        <p>
          Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
          Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget
          rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec
          molestie. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>

        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        <main>
          <Switch>
            <Route path="/child" component={Child} />
            {/* <Route path="/" component={App} /> */}
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AnyPage;
