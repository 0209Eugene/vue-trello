<template>
  <div>
    <header>vue Trello</header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <list-add />
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd.vue'
export default {
  components: { ListAdd },
  ListAdd
}
</script>
