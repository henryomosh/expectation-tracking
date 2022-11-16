const initialState = {
  message: ""
};

export const status = {
  namespaced: true,
  state: initialState,
  mutations: {
    statusMessage(state, text) {
      state.message = text;
    }
  }
};