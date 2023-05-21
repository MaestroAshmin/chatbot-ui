// Context o
import { createContext } from "react";

export const BackendUrl = createContext("http://localhost:8000/message");
export const SetBackendUrl = createContext((value) => {});
