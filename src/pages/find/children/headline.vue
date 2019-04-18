<template>
    <div>
        <contentNavs :lists="lists"></contentNavs>
        <div class="content">
            <contentList :aLists="articleLists"></contentList>
        </div>
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
                articleLists:[]
            }
        },
        created() {
            this.getAttention();
            this.getArticles();
            console.log(this.articleLists);
        },
        methods: {
            getAttention() {
                axios.get('games/attention').then(result => {
                    this.lists = result.data;
                })
            },
            getArticles(){
                axios.get('articles/1').then(result=>{
                    this.articleLists=result.data;
                    //console.log(result);
                })
            }
        }
    }
</script>

<style scoped>

</style>