<template>
    <div class="godes-main-container">
      <div class="godes-SearchComponent">
        <label class="godes-search-label">Search Component</label>
        <div class="godes-input-container">
          <input type="text" v-model="search" class="godes-input-search">
          <label class="placeholder">Search Programmers</label>
        </div>
  
        <transition-group name="fade" tag="ul" class="godes-programmer-list">
          <li v-for="post in filteredPosts" :key="post.id" class="godes-programmer-box">
            <PostComponent :post="post"></PostComponent>
          </li>
        </transition-group>
      </div>
    </div>
  </template>
  
  <script>
  import PostComponent from './PostComponent.vue'
  
  export default {
    name: 'GodesSearchComponent',
    components: {
      PostComponent
    },
    data() {
      return {
        search: "",
        posts: [
          { id: 1, title: "Co-leader", description: "Ventura" },
          { id: 2, title: "Programmer", description: "Cruz" },
          { id: 3, title: "Programmer", description: "Mirabel" },
          { id: 4, title: "Programmer", description: "Tuazon" },
          { id: 5, title: "Programmer", description: "Fortin" },
          { id: 6, title: "Programmer", description: "Tajarros" },
          { id: 7, title: "Leader", description: "Dela Cruz" },
          { id: 8, title: "Programmer", description: "Godes" },
          { id: 9, title: "Programmer", description: "Perez" },
          { id: 10, title: "Programmer", description: "Magnaye" },
          { id: 11, title: "Programmer", description: "Semifrania" }
        ].sort((a, b) => a.description.localeCompare(b.description))
      };
    },
    computed: {
      filteredPosts() {
        return this.posts.filter(post => {
          const searchLower = this.search.toLowerCase();
          return post.description.toLowerCase().includes(searchLower) || post.title.toLowerCase().includes(searchLower);
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .godes-main-container {
    display: flex;
    justify-content: center;
    padding: 20px;
    z-index: 5;
  }
  
  .godes-SearchComponent {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 8px;
    z-index: 5;
  }
  
  .godes-search-label {
    font-size: 24px;
    color: var(--text-800);
    font-weight: bold;
  }
  
  .godes-input-container {
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
    z-index: 5;
  }
  
  .placeholder {
    position: absolute;
    top: 41px;
    left: 15px;
    color: purple;
    text-transform: capitalize;
    font-size: 14px;
    transition: top .3s;
    padding: 0 5px;
    pointer-events: none;
  }
  
  .godes-input-search:focus + .placeholder {
    top: 16px;
    color:var(--text-800);
    text-shadow: var(--accent-800);
    background-color: var(--background-50);
  }
  
  .godes-input-search {
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid var(--background-900);
    border-radius: 4px;
    transition: box-shadow 0.3s ease; 
    background-color: var(--background-50);
  }
  
  .godes-input-search:focus {
    outline: none;
  }
  
  .godes-programmer-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  
  .godes-programmer-box {
    background-color: var(--background-200);
    border: 1px solid var(--accent-800);
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 200px;
    text-align: center;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  
