import create from "zustand";
import httpClient from "..";

const useStore = create((set, get) => ({
  signUp: async (payload) => {
    await httpClient
      .post("/signup", payload)
      .then((responce) => {
        location.href = "/signin";
      })
      .catch((error) => {
        console.log(error);
      });
  },
  signIn: async (payload) => {
    await httpClient
      .post("/signin", payload)
      .then((responce) => {
        location.href = "/home";
      })
      .catch((error) => {
        console.log(error);
      });
  },
}));

export default useStore;
