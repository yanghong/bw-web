const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar_url: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  account: state => state.user.account,
  uid: state => state.user.uid,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
};
export default getters;
