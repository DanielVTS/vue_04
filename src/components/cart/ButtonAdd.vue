<template>
    <button @click="$emit('item-add',item)">+</button>
</template>

<script>
    export default {
        name: "ButtonAdd",
        props: ['item']
    }


</script>

<style scoped>

</style>