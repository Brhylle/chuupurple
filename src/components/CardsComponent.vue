<template>
  <div class="gab-cards-list">
    <div class="gab-card" v-for="card in gabCards" :key="card.id">
      <div class="gab-card_image">
        <img :src="card.image" />
        <div class="gab-card_overlay"></div>
      </div>
      <div class="gab-card_title" :class="card.titleClass">
        <p>{{ card.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GabCardList',
  data() {
    return {
      gabCards: [
        {
          id: 1,
          image: 'https://i.giphy.com/ij1WvlilscRFoIRn7u.gif',
          title: 'Moonlight',
          titleClass: 'gab-title-white'
        },
        {
          id: 2,
          image: 'https://i.giphy.com/cMhglZMLwT8e1jYkfC.gif',
          title: 'Acid Wave',
          titleClass: 'gab-title-white'
        },
        {
          id: 3,
          image: 'https://i.giphy.com/eJmUEoeU1K4d4IUbpS.gif',
          title: 'Cosmic Infinity',
          titleClass: 'gab-title-white'
        },
        {
          id: 4,
          image: 'https://i.giphy.com/Q66QRhhdXhkL7PIed8.gif',
          title: 'Neon Dreams',
          titleClass: 'gab-title-white'
        }
      ]
    };
  }
};
</script>

<style scoped>
.gab-cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.gab-card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
  position: relative;
}

.gab-card .gab-card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
}

.gab-card .gab-card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.gab-card .gab-card_overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to top, rgba(128, 0, 128, 0.8), rgba(128, 0, 128, 0)); 
  border-radius: 0 0 40px 40px;
}

.gab-card .gab-card_title {
  position: absolute;
  bottom: -2px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: white; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
}

.gab-card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25), -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.gab-title-white {
  color: white;
}

.gab-title-black {
  color: black;
}

@media all and (max-width: 500px) {
  .gab-cards-list {
    flex-direction: column;
  }
}
</style>
