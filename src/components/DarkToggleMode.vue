<template>
    <button class="dlc-darklight" @click="toggleTheme">
        {{ currentTheme === 'light' ? 'Switch to 🌙' : 'Switch to ⛅' }}
    </button>
</template>

<script>
export default {
    data() {
        return {
        currentTheme: 'light'
        };
    },
    created() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
    },
    methods: {
        toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        }
    }
};
</script>

<style scoped>
    .dlc-darklight {
        outline: 0.1em solid var(--accent-900);
        border-radius: 20px;
        padding: 7px;
        font-size: 13px;
        text-transform: uppercase;
        color: var(--text-700);
    }

    .dlc-darklight:hover {
        color: var(--text-50);
        background: var(--secondary-800);
    }
</style>