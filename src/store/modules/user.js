const user = {
  state: {
    info: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
  },
  mutations: {},
  actions: {},
}
export default user