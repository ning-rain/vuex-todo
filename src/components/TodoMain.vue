<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="item.checked ? 'completed' : ''"
      v-for="item in showList"
      :key="item.id"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          :checked="item.checked"
          @change="fn(item.id)"
        />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="del(item.id)"></button>
      </div>
    </li>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    list() {
      return this.$store.state.main.list
    },
    ...mapGetters(['showList'])
  },
  methods: {
    del(val) {
      this.$store.commit('delList', val)
    },
    fn(val) {
      this.$store.commit('change', val)
    }
  }
}
</script>
<style scoped>
:deep(.completed) {
  color: #000;
  text-decoration: none;
  z-index: 10;
}
</style>
