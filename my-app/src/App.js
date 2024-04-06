import React, { useContext } from "react";
import Home from './pages/home/home'
import Login from './pages/login/login'
import List from './pages/list/list'
import New from './pages/new/new'
import Single from './pages/single/single'
import "./style/dark.scss"
import { productInputs, userInputs } from "./formSources";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
function App() {
  const {darkMode} = useContext(DarkModeContext)
  console.log(darkMode)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List users={true} />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="add new user" />} />
            </Route>
            <Route path="products">
              <Route index element={<List users={false} />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="add a new product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
