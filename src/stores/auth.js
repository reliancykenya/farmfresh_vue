import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: {
        name: "",
        email: "",
        password: null,
        password_confirmation: null,
        created_at: null,
        updated_at: null,
      },
      token: "",
    };
  },
  getters: {},
  actions: {
    async loginUser() {
      await axios.post("http://127.0.0.1:8000/api/login", this.user).then((res) => {
        console.log(res);
        this.user=res.data.user;
        this.token=res.data.token;
      });
    },
    async registerUser() {
      await axios.post("http://127.0.0.1:8000/api/register", this.user).then((res) => {
        console.log(res);
        this.user=res.data.user;
        this.token=res.data.token;
      });
    },
  },
});
