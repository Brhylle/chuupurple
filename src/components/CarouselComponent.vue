<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  props: { 
    msg: String,
  }
}
</script>

<style scoped> 
  div {
    color: var(--text);
  }
</style>