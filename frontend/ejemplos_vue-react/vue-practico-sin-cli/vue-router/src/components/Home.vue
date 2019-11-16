<template>
    <div>
        <Product v-for="item in items" :item="item" :key="item.id" />
    </div>
</template>

<script>

import Product from './Product.vue'

export default {
    data() {
        return {
            items: [
                {id: 1, name: "Item1"},
                {id: 2, name: "Item2"},
                {id: 3, name: "Item3"},
                {id: 4, name: "Item4"},
                {id: 5, name: "Item5"},
                {id: 6, name: "Item6"}
            ]
        }
    },
    components: {
        Product
    }
}
</script>

<style>

</style>