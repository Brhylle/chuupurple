<template>
  <div class="breadcrumbs">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <a v-if="!item.isSpan" :href="item.link" class="breadcrumb-link">
          <svg v-if="item.icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"></path>
          </svg>
          {{ item.label }}
        </a>
        <span v-else class="breadcrumb-span">
          <svg v-if="item.icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"></path>
          </svg>
          {{ item.label }}
        </span>
        <span v-if="index < items.length - 1" class="separator">/</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.breadcrumbs {
  margin: 0;
  padding: 0;
  background: var(--background-200);
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.breadcrumb-link, .breadcrumb-span {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-700);
  transition: color 0.3s; /* Add transition for smooth color change */
}

.breadcrumb-link:hover, .breadcrumb-span:hover {
    background-color: var(--accent-800); /* Adjust to your desired hover color */
  color: var(--text-100);
  text-decoration: underline;
}

.breadcrumb-link svg, .breadcrumb-span svg {
  margin-right: 5px;
}

.separator {
  margin: 0 5px;
  color: var(--text-600);
}

/* Customize other styles as needed */
</style>
