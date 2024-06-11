<template>
  <div class="tree">
    <ul>
      <li v-for="node in treeData" :key="node.id">
        <div class="node" @click="toggleNode(node)">
          <span class="icon">
            <i :class="{'fas fa-folder-open': node.children && node.children.length > 0 && node.expanded, 'fas fa-folder': node.children && node.children.length > 0 && !node.expanded, 'far fa-folder': !node.children || node.children.length === 0}"></i>
          </span>
          {{ node.name }}
        </div>
        <tree-node v-if="node.children && node.children.length > 0" :node="node"></tree-node>
      </li>
    </ul>
  </div>
</template>

<script>
import TreeNode from './TreeNode.vue';

export default {
  name: 'TreeComponent',
  components: {
    TreeNode
  },
  props: {
    treeData: {
      type: Array,
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
.tree {
  font-family: Arial, sans-serif;
  background: var(--background-200);
}

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
