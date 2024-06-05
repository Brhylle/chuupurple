
<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li v-for="(crumb, index) in crumbs" :key="index">
        <a :href="crumb.link">{{ crumb.text }}</a>
        <span v-if="index < crumbs.length - 1"> / </span>
      </li>
    </ul>
  </nav>  
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    crumbs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.breadcrumb {
  font-family: 'Times New Roman';
  /* margin-left: 560px; */
  /* margin-top: 300px; */
  font-size: 20px;
  border: 1px solid #000000; 
  background-color: #808080;
  /* width: fit-content; */
  padding: 3px 5px;
  border-radius: 5px;
}
.breadcrumb ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb li {
  display: inline;
  /* margin-right: 4px;
  margin-left: 4px; */
}

.breadcrumb a {
  text-decoration: none;
  color: #3898ff; 
}

.breadcrumb a:hover {
  text-decoration: underline; 
  font-weight: bold;
} 
</style>
