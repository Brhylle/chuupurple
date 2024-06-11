<template>
  <ul v-show="node.expanded">
    <li v-for="childNode in node.children" :key="childNode.id">
      <div class="node" @click="toggleNode(childNode)">
        <span class="icon">
          <i :class="{'fas fa-folder-open': childNode.children && childNode.children.length > 0 && childNode.expanded, 'fas fa-folder': childNode.children && childNode.children.length > 0 && !childNode.expanded, 'far fa-folder': !childNode.children || childNode.children.length === 0}"></i>
        </span>
        {{ childNode.name }}
      </div>
      <tree-node v-if="childNode.children && childNode.children.length > 0" :node="childNode"></tree-node>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TreeNode',
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleNode(node) {
      if (node.children) {
        node.expanded = !node.expanded;
      }
    }
  }
};
</script>

<style scoped>
.node {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--text-700);
}

.node:hover {
  background-color: var(--accent-800); /* Adjust to your desired hover color */
  color: var(--text-100);
}

.icon {
  margin-right: 5px;
}

ul {
  list-style: none;
  padding-left: 20px;
}

ul li {
  margin-bottom: 5px;
}
</style>
