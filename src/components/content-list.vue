<template>
    <div class="content-detail">
        <ul class="content-list">
            <li v-for="list in aLists">
                <div class="list-left">
                    <h5 class="article-title" @click="getInfo">{{list.title}}</h5>
                    <p class="article-info">
                        <span class="article-date">{{list.date.slice(2)}}</span>
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
    </div>
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
        },
        methods:{
          getInfo(){
            this.$http.get('/getInfo').then(result=>{
              console.log(result);
            })
          }
        }
    }
</script>

<style scoped lang="scss">
    .content-detail{
        display: flex;
        overflow: auto;
        flex:1;
    }
    .content-list{
        flex:1;
        flex-direction: column;
        background:#eee;
        >li{
            display: flex;
            height:6rem;
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
