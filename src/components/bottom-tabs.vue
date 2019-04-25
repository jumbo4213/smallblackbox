<template>
    <div class="foot-tabs">
        <ul class="bottom-box">
            <li v-for="(item,index ) in list" class="tab-item"
                @click="goAddress(index,item.path)" :class="[index===current?'current':'']">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        title: "发现",
                        path: "/find"
                    }, {
                        title: "游戏库",
                        path: "/library"
                    }, {
                        title: "社区",
                        path: "/community"
                    },
                    {
                        title: "我",
                        path: "/me"
                    }
                ],
                current:0
            }
        },
        methods: {
            goAddress(index,path) {
                this.$router.push(path);
                this.current=index;
            }
        }
    }
</script>

<style scoped>
    .foot-tabs {
        width: 100%;
        background: #fff;
        border-top:1px solid #eee;
    }

    .bottom-box {
        display: flex;
    }

    .tab-item {
        display: flex;
        flex: auto;
        flex-direction: column;
        font-size: 0.9rem;
        height: 2.6rem;
        line-height: 2rem;
        justify-content: center;
        align-items: center;
    }
    .bottom-box>li.current{
        color:#000;
    }
</style>
