<template>
  <div id="app">
    <button @click="toggleJJMSMenu">Menu</button>
    <div class="jjms-semifrania-menu" v-if="JJMSisMenuOpen">
      <v-select
        v-model="JJMSlocation"
        :items="JJMSlocations"
        label="Location"
        outlined
      ></v-select>
      <v-menu v-model="JJMSmenuOpen" :location="JJMSlocation">
        <template v-slot:activator="{ on }">
          <button
            v-on="on"
            class="jjms-menu-btn"
            @click="toggleJJMSMenu"
          >
            Menu
          </button>
        </template>
  
        <v-list class="jjms-menu-list">
          <v-list-item
            v-for="(item, index) in JJMSitems"
            :key="index"
            class="jjms-menu-item"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      JJMSisMenuOpen: false,
      JJMSlocation: null,
      JJMSlocations: ['Location 1', 'Location 2', 'Location 3'],
      JJMSitems: [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' }
      ],
      JJMSmenuOpen: false
    };
  },
  methods: {
    toggleJJMSMenu() {
      this.JJMSmenuOpen = !this.JJMSmenuOpen;
      this.JJMSisMenuOpen = !this.JJMSisMenuOpen;
    }
  }
};
</script>

<style scoped>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-50);
}

.jjms-semifrania-menu {
  text-align: center;
  margin-top: 20px;
  width: 100%;
}

.jjms-menu-btn {
  margin-top: 20px;
  padding: 10px 20px;
  border: solid 2px var(--secondary-600);
  background-color: var(--primary-700);
  border-radius: 5px;
  cursor: pointer;
}

jjms-menu-btn:hover {
  background-color: var(--secondary-600);
  color: var(--text-50)
}

.jjms-menu-list {
  max-width: min-content;
  max-height: 0;
  overflow: hidden;
  transition: max-width 0.3s ease-out;
  background-color: var(--primary-700);
}

.jjms-menu-item {
  cursor: pointer;
  padding: 10px 20px;
  background: var(--secondary-500);
}

.jjms-menu-item:hover {
  background-color: var(--secondary-600);
  color: var(--text-50)
}
</style>
