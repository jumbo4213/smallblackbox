<template>
    <div class="top-page">
        <contentNavs :lists="lists" :current="current"></contentNavs>
        <contentList :aLists="articleLists"></contentList>
    </div>

</template>

<script>
    import axios from 'axios'
    import contentNavs from '../../../components/content-navs'
    import contentList from '../../../components/content-list'

    export default {
        name: "headline",
        components: {
            contentNavs,
            contentList
        },
        data() {
            return {
                lists: [],
                articleLists:[],
                current:{
                    id:0,
                }

            }
        },
        created() {
            this.getAttention();
            this.getArticles(this.current.id);
        },
        watch:{
            $route(to,from){
                this.current.id=to.params.id;
                this.getArticles(this.current.id);
            }
        },
        methods: {
            getAttention() {
                axios.get('/games/attention').then(result => {
                    this.lists = result.data;
                    this.current.id=result.data[0].id;
                })
            },
            getArticles(id){
                axios.get(`/headline/${id}`).then(result=>{
                    this.articleLists=result.data;
                })
            }
        }
    }
</script>

<style scoped>
    .top-page{
        display: flex;
        flex-direction: column;
        height:100%;
        width:100%;
        justify-content: space-between;
    }

</style>