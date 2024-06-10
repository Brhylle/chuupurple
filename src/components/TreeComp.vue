<template>
    <div class="container">
        <div>
            <div 
            @click="expanded = !expanded"
            :style="{'margin-left': depth*20+'px'}"
            class ="node">

                <span 
                class="type"
                v-if="hasChildren">
                    <i v-if="expanded" class="fas fa-caret-down"></i>
                    <i v-else class="fas fa-caret-right"></i>
                </span>
                {{node.name}}
            </div>
                        <template v-if="expanded">
                            <TreeComp 
                            v-for="child in node.children"
                            :key="child.name"
                            :node="child"
                            :depth="depth+1"
                            />
                        </template>
        </div>
    </div>
</template>


<!-- install fortawesome for icons to work -->

<script>
export default{
    name: 'TreeComp',
    props: {
        node: Object,
        depth:{
            type: Number,
            default: 0,
        }
    },
    data() {
        return{
            expanded: false,
        }
    },
    computed:{
        hasChildren(){
            return this.node.children;
        }
    },
}
</script>

<style scoped>
.container {
  background-color: #4a5568; 
  padding-top: 1px;
}

.node{
    text-align: left;
}
</style> 	