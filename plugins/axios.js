function axios({ $axios, redirect }) {
  $axios.onResponse(res => {
    const { status, data } = res;
    const url = res.request.res ? res.request.res.responseUrl : '';
    if (status === 200 && data && typeof data === 'string') {
      redirect(url);
    }
  });

  $axios.onRequest(request => {});

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400');
    }
    if (code === 401) {
      this.$store.commit('changeLoginDialogShow', true);
    }
  });
}

export default axios;
