<template>
    <div class="programmers">
      <h3 class="godes-to-post">{{ post.title }}</h3>
      <p class="godes-p">{{post.description}}</p>
    </div>
</template>

<script>
  export default {
    props: ["post"]
  };
</script>

<style scoped>
.godes-to-post{
    color: purple;
    font-size: 24px;
    font-weight: bold;
}
.godes-p {
    color: black;
    font-size: 20px;
}
</style>
