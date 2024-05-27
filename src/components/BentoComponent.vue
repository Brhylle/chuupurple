<template>
    <div class="dlc-bento-container">
        <div class="bento-item">
            <img src="../assets/imgs/hover-carousel/delacruz_pic.jpg" alt="">
        </div>
        <div class="bento-item">
            <img src="../assets/imgs/hover-carousel/magnaye_pic.jpg" alt="">
        </div>
        <div class="bento-item">
            <img src="../assets/imgs/hover-carousel/perez_pic.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "BentoComponent",
}
</script>

<style scoped>
    .dlc-bento-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

    .bento-item {
        overflow: hidden;
        border: 0.1em solid var(--accent-300);
    }

    .bento-item img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
</style>