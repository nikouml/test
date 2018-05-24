export default (time, state, {url, axios, method}, message) => {
  function save () {
    const {getFieldsValue} = this.props.form
    const data = getFieldsValue()
    if (state.value === 'pending') {
      axios({
        url,
        method,
        data
      }).then(res => {
        message.success(res.data.message || '保存成功')
        state.value = 'resolve'
      }).catch(err => {
        message.error(err.message || '保存失败')
        state.value = 'reject'
      })
    }
    setTimeout(() => {
      save.call(this)
    }, time)
  }
  return save
}
