<template>
    <div>
        <topTabs :lists="topList"></topTabs>
        <router-view/>
    </div>
</template>

<script>
    import topTabs from '../../components/top-tabs'

    export default {
        name: "find",
        data() {
            return {
                topList: [{
                    title: '关注',
                    path: '/attention'
                },
                    {
                        title: '头条',
                        path: '/headline'
                    }
                ]
            }
        },
        components: {
            topTabs,
        }
    }
</script>

<style scoped>

</style>