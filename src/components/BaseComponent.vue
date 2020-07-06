<template>
    <div class="container-fluid">
        <nav class="nav justify-content-center">
            <a href="#">我是头部</a>
        </nav>
        <div class="row" id="main">
            <div class="col-2" id="sidebar">
                <slot name="sidebar">sidebar</slot>
            </div>
            <div class="col" id="page">
                <slot name="page">page</slot>
            </div>
        </div>
        <footer class="text-center">我是底部</footer>
    </div>
</template>

<script>
    export default {
        name: "BaseComponent"
    }
</script>

<style scoped>

</style>