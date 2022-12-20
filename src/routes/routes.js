import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import { SignInPage } from "../pages/SignIn";
import { SignUpPage } from "../pages/SignUp";
import { Habits } from "../pages/Habits";

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route element={<SignInPage />} path="/" />      
          <Route element={<SignUpPage />} path="/cadastro" /> 
          <Route element={<Habits />} path="/habitos" />     
        </Switch>
      </BrowserRouter>
    );
  }