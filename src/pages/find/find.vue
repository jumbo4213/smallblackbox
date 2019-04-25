<template>
    <div class="top-content">
        <topTabs :lists="topList"></topTabs>
        <div class="detail-content">
            <transition :name="direction" mode="out-in" >
                <router-view />
            </transition>
        </div>
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
                    path: '/headline/0'
                }],
                direction: 'left'
            }
        },
        components: {
            topTabs,
        },
        watch: {
            $route(to, from) {
                this.direction = to.meta.index < from.meta.index ? 'right' : 'left';
            }
        }
    }
</script>

<style scoped>
    .left-enter {
        transform: translateX(100%)
    }

    /*100%代表在屏幕外*/
    .left-enter-to {
        transform: translateX(0)
    }

    .left-enter-active {
        transition: .5s
    }

    .left-leave {
        transform: translateX(0);
    }

    .left-leave-to {
        transform: translateX(-100%)
    }

    .left-leave-active {
        transition: .5s;
    }

    .right-enter {
        transform: translateX(-100%)
    }

    /*-100%代表在屏幕外,屏幕的左边*/
    .right-enter-active {
        transition: .5s
    }

    .right-enter-to {
        transform: translateX(0)
    }

    .right-leave {
        transform: translateX(0)
    }

    .right-leave-to {
        transform: translateX(100%)
    }

    .right-leave-active {
        transition: .5s;
    }
    .top-content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width:100%;
        height:100%;
    }
    .detail-content{
        display: flex;
        overflow: auto;
        flex:1;
    }
</style>