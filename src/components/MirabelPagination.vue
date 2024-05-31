<template>
  <div id="MBLapp">
    <h1>Pagination Component</h1>
    <div class="MBLflex MBLspace-x-2">
      <button
        v-for="page in MBLtotalPages"
        :key="page"
        @click="MBLgoToPage(page)"
        :class="MBLbuttonClass(page)"
      >
        {{ page }}
      </button>
    </div>
    <div class="MBLmt-4">
      <button @click="MBLtoggleDarkMode" :class="MBLmodeButtonClass">
        Toggle Dark Mode
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MBLApp',
  data() {
    return {
      MBLtotalPages: 10,
      MBLcurrentPage: 1,
      MBLisDarkMode: false,
    };
  },
  computed: {
    MBLmodeButtonClass() {
      return {
        'MBLpx-4 MBLpy-2 MBLrounded MBLbg-primary MBLtext-accent': !this.MBLisDarkMode,
        'MBLpx-4 MBLpy-2 MBLrounded MBLbg-dark-primary MBLtext-dark-accent': this.MBLisDarkMode,
      };
    },
    MBLbuttonClass() {
      return (page) => {
        return {
          'MBLpx-4 MBLpy-2 MBLrounded': true,
          'MBLbg-secondary MBLtext-text': !this.MBLisDarkMode && this.MBLcurrentPage !== page,
          'MBLbg-primary MBLtext-accent': !this.MBLisDarkMode && this.MBLcurrentPage === page,
          'MBLbg-dark-secondary MBLtext-dark-text': this.MBLisDarkMode && this.MBLcurrentPage !== page,
          'MBLbg-dark-primary MBLtext-dark-accent': this.MBLisDarkMode && this.MBLcurrentPage === page,
        };
      }
    }
  },
  methods: {
    MBLhandlePageChange(page) {
      this.MBLcurrentPage = page;
    },
    MBLtoggleDarkMode() {
      this.MBLisDarkMode = !this.MBLisDarkMode;
    },
    MBLgoToPage(page) {
      this.MBLhandlePageChange(page);
      this.$emit('MBLpage-changed', page);
    }
  }
};
</script>

<style scoped>
#MBLapp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.MBLbg-primary {
  background-color: #CBA2DD;
}

.MBLtext-accent {
  color: #29045D;
}

.MBLbg-dark-primary {
  background-color: #4B225D;
}

.MBLtext-dark-accent {
  color: #C7A2FB;
}

.MBLflex {
  display: flex;
}

.MBLspace-x-2 {
  margin-right: 8px;
}

.MBLmt-4 {
  margin-top: 16px;
}

.MBLpx-4 {
  padding-left: 16px;
  padding-right: 16px;
}

.MBLpy-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.MBLrounded {
  border-radius: 8px;
}

.MBLbg-secondary {
  background-color: #DDDBFF;
}

.MBLtext-text {
  color: #160326;
}

.MBLbg-dark-secondary {
  background-color: #020024;
}

.MBLtext-dark-text {
  color: #ECD9FC;
}
</style>