<template>
    <div class="programmers">
      <h3>{{ post.title }}</h3>
      <p>{{post.description}}</p>
    </div>
</template>

<script>
  export default {
    props: ["post"]
  };
</script>

<style scoped>
h3 {
    color: purple;
    font-size: 24px;
    font-weight: bold;
}
p {
    color: black;
    font-size: 20px;
}
</style>