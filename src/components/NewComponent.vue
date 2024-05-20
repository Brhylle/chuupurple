<template>
    <div class="bg-blue-500 uppercase m-4 p-4 w-10 h-10 border border-sky-800">
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: 'NewComponent',
    props: {
     msg: String,   
    }
}
</script>