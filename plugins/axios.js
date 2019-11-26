function axios ({ $axios, redirect }) {
  $axios.onResponse((res) => {
    const { status, data } = res
    const url = res.request.res?res.request.res.responseUrl:""
    if (status === 200 && data && typeof data === 'string') {
      redirect(url)
    } else {
    }
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}

export default axios
