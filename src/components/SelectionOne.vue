<template>
  <div class="playlist_container_rjt">
    <div class="title_rjt">
      <h4>ChuuPurple's <span class="highlight_rjt">music</span>&nbsp;Playlist</h4>
      <img :src="currentImage" alt="Selected Image" v-if="currentImage" />
      <img v-else :src="defaultImage" alt="Default Image" />
      <audio v-if="currentAudio" ref="audioPlayer" :src="currentAudio" autoplay></audio>
    </div>

    <div class="song_name_rjt" v-if="selectedSong">
      <h5>{{ getCurrentSongName() }}</h5>
    </div>

    <div class="controls_rjt" v-if="currentAudio">
      <button @click="togglePlay">{{ isPlaying ? "Pause" : "Play" }}</button>
      <label for="volumeSliderRJT">Volume</label>
      <input
        id="volumeSliderRJT"
        type="range"
        min="0"
        max="1"
        step="0.01"
        v-model="volume"
        @input="setVolume"
        class="volume-slider_rjt"
        :style="sliderStyle"
      />
    </div>

    <div class="playlist_selection_rjt">
      <h5 class="">Select a Song</h5>
      <div class="thumbnails_rjt">
        <div
          v-for="song in visibleSongs"
          :key="song.id"
          :class="['thumbnail_rjt', { selected_rjt: selectedSong === song.id }]"
          @click="selectSong(song.id)"
        >
          <img :src="song.imgSrc" :alt="song.name" class="thumbnail_image_rjt" />
        </div>
      </div>
      <div class="navigation_arrows_rjt">
        <button @click="prevPage" class="arrow_rjt left_rjt" :disabled="isFirstPage">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button @click="nextPage" class="arrow_rjt right_rjt" :disabled="isLastPage">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick } from "vue";

export default {
  data() {
    return {
      selectedSong: "",
      currentAudio: null,
      currentImage: null,
      defaultImage: require("@/assets/imgs/selection-one/chupurple.jpg"),
      isPlaying: false,
      volume: 0.5,
      currentPage: 0,
      songsPerPage: 3,
      songs: [
        {
          id: "song1",
          name: "Taylor Swift - Everything Has Changed",
          imgSrc: require("@/assets/imgs/selection-one/Taylor Swift - Everything Has Changed.jpg"),
          audioSrc: require("@/assets/imgs/selection-one/Taylor Swift - Everything Has Changed.mp3"),
        },
        {
          id: "song2",
          name: "BINI - Pantropiko",
          imgSrc: require("@/assets/imgs/selection-one/BINI - Pantropiko.jpg"),
          audioSrc: require("@/assets/imgs/selection-one/BINI - Pantropiko.mp3"),
        },
        {
          id: "song3",
          name: "TJ Monterde - Palagi",
          imgSrc: require("@/assets/imgs/selection-one/TJ Monterde - Palagi.jpg"),
          audioSrc: require("@/assets/imgs/selection-one/TJ Monterde - Palagi.mp3"),
        },
        {
          id: "song4",
          name: "Juan Karlos - Buwan",
          imgSrc: require("@/assets/imgs/selection-one/Juan Karlos - Buwan.jpg"),
          audioSrc: require("@/assets/imgs/selection-one/Juan Karlos - Buwan.mp3"),
        },
        {
          id: "song5",
          name: "Le Sserafim - Smart",
          imgSrc: require("@/assets/imgs/selection-one/Le Sserafim - Smart.jpg"),
          audioSrc: require("@/assets/imgs/selection-one/Le Sserafim - Smart.mp3"),
        },
        {
          id: "song6",
          name: "Orange & Lemons - Heaven Knows",
          imgSrc: require("@/assets/imgs/selection-one/Orange & Lemons - Heaven Knows.jpg"),
          audioSrc: require("@/assets/imgs/selection-one/Orange & Lemons - Heaven Knows.mp3"),
        },
        // PWEDE PA MAG ADD KUNG GUSTO PA!!!
      ],
    };
  },
  computed: {
    sliderStyle() {
      return {
        "--value": `${this.volume * 100}%`,
      };
    },
    visibleSongs() {
      const start = this.currentPage * this.songsPerPage;
      const end = start + this.songsPerPage;
      return this.songs.slice(start, end);
    },
    isFirstPage() {
      return this.currentPage === 0;
    },
    isLastPage() {
      return (this.currentPage + 1) * this.songsPerPage >= this.songs.length;
    },
  },
  methods: {
    selectSong(songId) {
      const selected = this.songs.find((song) => song.id === songId);
      this.selectedSong = songId;
      this.currentAudio = selected.audioSrc;
      this.currentImage = selected.imgSrc;
      this.isPlaying = true;
      nextTick(() => {
        const audio = this.$refs.audioPlayer;
        if (audio) {
          audio.load();
          audio.play();
          audio.volume = this.volume;
        }
      });
    },
    togglePlay() {
      const audio = this.$refs.audioPlayer;
      if (audio) {
        if (this.isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        this.isPlaying = !this.isPlaying;
      }
    },
    setVolume() {
      const audio = this.$refs.audioPlayer;
      if (audio) {
        audio.volume = this.volume;
      }
    },
    nextPage() {
      if (!this.isLastPage) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (!this.isFirstPage) {
        this.currentPage--;
      }
    },
    getCurrentSongName() {
      const currentSong = this.songs.find((song) => song.id === this.selectedSong);
      return currentSong ? currentSong.name : "";
    },
  },
  mounted() {
    const audio = this.$refs.audioPlayer;
    if (audio) {
      audio.volume = this.volume;
    }
  },
};
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"); */

.playlist_container_rjt {
  width: 90%;
  max-width: 800px;
  padding: 20px;
  border-radius: 20px;
  background: var(--primary-200); /* Light Mode Primary Color */
  box-shadow: 0 8px 30px rgba(123, 97, 255, 0.3);
  text-align: center;
  font-family: PP Neue Montreal Bold, sans-serif;
  margin: 20px auto;
}

.title_rjt h4 {
  font-size: 3vw;
  color: var(--text-900); /* Light Mode Text Color */
  font-weight: 700;
  text-transform: capitalize;
}

.title_rjt .highlight_rjt {
  color: var(--primary-700); /* Light Mode Accent Color */
}

.main_media_rjt {
  margin: 20px 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.main_media_rjt audio,
.main_media_rjt img {
  width: 100%;
  height: auto;
  max-height: 300px;
  border-radius: 10px;
}

.song_name_rjt {
  margin: 10px 0;
  font-size: 3vw;
  font-weight: 600;
  color: var(--text-700); /* Light Mode Accent Color */
}

.controls_rjt {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.controls_rjt button {
  padding: 10px 20px;
  font-size: 2.5vw;
  color: var(--text-900); /* Light Mode Text Color */
  background-color: var(--primary-200); /* Light Mode Secondary Color */
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.controls_rjt button:hover {
  background-color: var(--secondary-300); /* Light Mode Secondary Color Hover */
}

.controls_rjt label {
  margin-right: 10px;
  font-size: 2.5vw;
  color: var(--text-800); /* Light Mode Text Color */
}

.controls_rjt input[type="range"] {
  width: 40%;
  -webkit-appearance: none;
  appearance: none;
  background: var(--accent-700);
  outline: none;
  height: 5px;
  --value: 50%;
}

.controls_rjt input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  background: linear-gradient(to right, var(--accent-600) var(--value), var(--primary-200) var(--value)); /* Light Mode Secondary Color */
  border-radius: 5px;
}

.controls_rjt input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 10px;
  height: 20px;
  background: var(--secondary-300); /* Light Mode Secondary Color */
  cursor: pointer;
  border-radius: 50%;
  margin-top: -7.5px;
}

.playlist_selection_rjt {
  margin: 20px 0;
}

.navigation_arrows_rjt {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.arrow_rjt {
  background-color: var(--primary-300); /* Light Mode Secondary Color */
  color: var(--text-900); /* Light Mode Text Color */
  border: none;
  padding: 10px;
  border-radius: 5rem;
  cursor: pointer;
  font-size: 4vw;
  transition: background-color 0.3s ease;
}

.arrow_rjt:disabled {
  background-color: var(--secondary-50);
  cursor: not-allowed;
}

.arrow_rjt:not(:disabled):hover {
  background-color: var(--accent-600); /* Light Mode Accent Color */
  color: var(--secondary-300); /* Light Mode Secondary Color */
}

.playlist_selection_rjt h5 {
  margin-bottom: 10px;
  font-size: 2.5vw;
  color: #160326; /* Light Mode Text Color */
  font-weight: 600;
}

.thumbnails_rjt {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  border-radius: 25px;
}

.thumbnail_rjt {
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  padding: 5px;
  border-radius: 10px;
}

.thumbnail_rjt:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 20px rgba(117, 92, 175, 0.5);
  border-radius: 25px;
}

.thumbnail_rjt.selected_rjt {
  transform: scale(1.1);
  border: 3px solid var(--accent-600); /* Light Mode Accent Color */
  border-radius: 25px;
}

.thumbnail_image_rjt {
  width: 100px;
  height: 100px;
  border-radius: 25px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .playlist_container_rjt {
    width: 80%;
  }

  .controls_rjt button,
  .controls_rjt label {
    font-size: 16px;
  }

  .controls_rjt input[type="range"] {
    width: 200px;
  }

  .arrow_rjt {
    font-size: 24px;
  }

  .thumbnail_image_rjt {
    width: 250px;
    height: 100px;
  }
}
</style>
