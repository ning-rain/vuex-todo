<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isSel === 'all' }"
          href="javascript:;"
          @click="change('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'no' }"
          href="javascript:;"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'yes' }"
          href="javascript:;"
          @click="change('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isSel: 'all'
    }
  },
  methods: {
    change(val) {
      this.isSel = val
      this.$store.commit('setIsSel', val)
    },
    clear() {
      this.$store.commit('clearIsDone')
    }
  },
  computed: {
    count() {
      return this.$store.state.main.list.filter(
        (item) => item.checked === false
      ).length
    }
  }
}
</script>
