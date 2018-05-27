export default {
  namespace: 'search',
  state: {
    currentSearchData: [],
    currentForm: ''
  },
  subscriptions: {},
  effects: {},
  reducers: {
    setCurrentSearchData (state, {payload}) {
      console.log(payload)
      return {
        ...state,
        ...payload
      }
    },
    setCurrentForm (state, {payload}) {
      console.log(payload)
      return {
        ...state,
        ...payload
      }
    }
  }
}
