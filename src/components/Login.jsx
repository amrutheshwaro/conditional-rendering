import React from "react";
import Input from "./Input";

var login = function () {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default login;
