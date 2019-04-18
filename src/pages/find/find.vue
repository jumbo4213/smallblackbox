<template>
    <div>
        <topTabs :lists="topList"></topTabs>
        <div style="position: relative;margin-top:3.2rem">
            <transition :name="direction">
                <router-view/>
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
                    path: '/headline'
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
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
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
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

</style>