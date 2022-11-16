import { createStore } from "vuex";
import { auth } from "@/store/auth.module";
import { status } from "@/store/statusMessage.module";

const store = createStore({
  modules: {
    auth,
    status,
  },
});

export default store;
