import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

const routes = [
  { path: process.env.PUBLIC_URL + '/', name: "Home", Component: Home },
  { path: process.env.PUBLIC_URL + '/about', name: "About", Component: About },
  { path: process.env.PUBLIC_URL + '/contact', name: "Contact", Component: Contact }
];

function App() {
  const onEnter = node => {
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6
        }
      }
    );
  };

  const onExit = node => {
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2
        }
      }
    );
  };

  return (
    <div className="wrapper">
      <Header />
      <main>
        {routes.map(({ path, name, Component }) => (
          <Route key={name} path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames="page"
                onExit={onExit}
                onEntering={onEnter}
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
