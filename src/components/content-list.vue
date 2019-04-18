<template>
    <ul class="content-list">
        <li v-for="list in aLists">
            <div class="list-left">
                <h5 class="article-title">{{list.title}}</h5>
                <p class="article-info">
                    <span class="article-date">{{list.date}}</span>
                    <span class="article-arthur">{{list.author}}</span>
                    <span class="article-views">{{list.views}}</span>
                    <span class="article-comment">{{list.comment}}</span>
                </p>
            </div>
            <div class="list-right">
                <img :src="list.image" >
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "content-list",
        data(){
            return{

            }
        },
        props:{
            aLists:Array
        }
    }
</script>

<style scoped lang="scss">
    .content-list{
        padding:2.2rem .1rem;
        background:#eee;
        >li{
            display: flex;
            margin-bottom:.4rem;
        }
    }
    .list-left{
        display: flex;
        flex:6;
        padding:.5rem .4rem;
        background: #fff;
        flex-direction: column;
        height:6rem;
        justify-content: space-between;
    }
    .list-right{
        display: flex;
        flex:4;
        background: #fff;
        >img{
            width: 100%;
            height: 6rem;
        }
    }
    .article-title{
        font-size:.8rem;
        color:#000;
        text-align:left;
    }
    .article-info{
        display: flex;
        >span{
            display: inline-flex;
            flex:1;
            justify-content: center;
            align-items: center;
            font-size: .3rem;
        }
    }
</style>