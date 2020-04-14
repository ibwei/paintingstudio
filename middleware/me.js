export default function({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.isLogin) {
    store.commit('changeLoginDialogShow', true);
    return redirect('/');
  }
}
