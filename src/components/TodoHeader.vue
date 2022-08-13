<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="value" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="msg"
      @keyup.enter="input"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    input() {
      if (!this.msg.length) return alert('Please enter a message')
      this.$store.commit('enterMsg', this.msg)
      this.msg = ''
    }
  },
  computed: {
    value: {
      set(val) {
        this.$store.state.main.list.forEach((ele) => (ele.checked = val))
      },
      get() {
        return this.$store.state.main.list.every((val) => val.checked)
      }
    }
  }
}
</script>
