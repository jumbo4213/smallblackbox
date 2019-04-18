<template>
    <div class="foot-tabs">
        <ul class="bottom-box">
            <li v-for="item in list" class="tab-item" @click="goAddress(item.path)">{{item.title}}</li>
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
                ]
            }
        },
        methods: {
            goAddress(path) {
                this.$router.push(path);
            }
        }
    }
</script>

<style scoped>
    .foot-tabs {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #fff;
        border-top:1px solid #eee;
    }

    .bottom-box {
        display: flex;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .tab-item {
        display: flex;
        flex: auto;
        flex-direction: column;
        font-size: 0.9rem;
        height: 2rem;
        line-height: 2rem;
    }

</style>
