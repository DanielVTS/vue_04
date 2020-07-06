<template>
    <button @click="$emit('item-minus',item)">-</button>
</template>

<script>
    export default {
        name: "ButtonMinus",
        props: ['item']
    }
</script>

<style scoped>

</style>