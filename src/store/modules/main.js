import { nanoid } from 'nanoid'
export default {
  namespace: true,
  state: {
    list: [
      { name: '烫头', id: nanoid(), checked: false }
    ],
    isSel: 'all'
  },
  mutations: {
    enterMsg(state, payload) {
      state.list.unshift({
        name: payload,
        id: nanoid(),
        checked: false
      })
    },
    delList(state, payload) {
      const index = state.list.findIndex((item) => item.id === payload)
      state.list.splice(index, 1)
      // console.log(object)
    },
    change(state, payload) {
      const index = state.list.findIndex((item) => item.id === payload)
      state.list[index].checked = !state.list[index].checked
    },
    clearIsDone(state) {
      state.list = state.list.filter((item) => item.checked !== true)
    },
    setIsSel(state, payload) {
      state.isSel = payload
    }
  },
  getters: {
    showList: (state) => {
      // eslint-disable-next-line eqeqeq
      if (state.isSel === 'no') {
        // eslint-disable-next-line eqeqeq
        return state.list.filter((item) => item.checked === false)
      } else if (state.isSel === 'yes') {
        // eslint-disable-next-line eqeqeq
        return state.list.filter((item) => item.checked === true)
      } else {
        return state.list
      }
    }
  }
}
