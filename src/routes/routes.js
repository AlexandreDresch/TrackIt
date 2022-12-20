import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import { SignInPage } from "../pages/SignIn";
import { SignUpPage } from "../pages/SignUp";
import { Habits } from "../pages/Habits";
import { Today } from "../pages/Today";
import { History } from "../pages/History";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route element={<SignInPage />} path="/" />
        <Route element={<SignUpPage />} path="/cadastro" />
        <Route element={<Habits />} path="/habitos" />
        <Route element={<Today />} path="/hoje" />
        <Route element={<History />} path="/historico" />
      </Switch>
    </BrowserRouter>
  );
}
