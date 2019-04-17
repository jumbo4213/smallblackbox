<template>
    <div>
        <contentNavs :lists="lists"></contentNavs>
    </div>

</template>

<script>
    import axios from 'axios'
    import contentNavs from '../../../components/content-navs'

    export default {
        name: "headline",
        components: {
            contentNavs
        },
        data() {
            return {
                lists: null
            }
        },
        created() {
            this.getAttention();
        },
        methods: {
            getAttention() {
                axios.get('games/attention').then(result => {
                    this.lists = result.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>