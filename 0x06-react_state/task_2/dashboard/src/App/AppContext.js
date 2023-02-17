import { createContext } from "react";

export const user = {
  email: "",
  password: "",
  isLoggedId: false,
};

export const logOut = () => {};

export const AppContext = createContext({ user, logOut });
