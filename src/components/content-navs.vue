<template>
    <div class="navs">
        <div class="nav-left">
            <ul>
                <li v-for="list in lists" :class="[current.id==list.id?'current':'']" @click="changeId(list.id)">{{list.title}}</li>
            </ul>
        </div>
        <div class="line"></div>
        <div class="nav-right"><img src="../assets/images/setting.png" alt=""></div>
    </div>
</template>
<script>

    export default {
        name: "content-navs",
        data() {
            return {}
        },
        props: {
            lists: Array,
            current:Object
        },
        methods:{
            changeId(id){
                this.$router.push(`/headline/${id}`);
            }
        }
    }
</script>

<style scoped lang="scss">
    .navs {
        display: flex;
        background: #fff;
        width:100%;
        height:1.8rem;
        border-bottom: .1rem solid #eee;
    }

    .nav-left {
        display: flex;
        flex: 9;
        flex-wrap: nowrap;
        overflow-x: auto;

        &::-webkit-scrollbar {
            display: none;
        }

        ul {
            display: flex;

            li {
                display: flex;
                font-size: .9rem;
                padding-left: .5rem;
                padding-right: .5rem;
                height: 1.8rem;
                justify-content: center;
                align-items: center;
                white-space: nowrap;
                &.current{
                    color:#000;
                }
            }
        }

    }

    .nav-right {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;

        img {
            display: flex;
            width: 40%;
        }
    }

    .line {
        display: flex;
        border-left: 1px solid transparent;
        box-shadow: -0.1rem 0 .3rem #444;
    }
</style>