<template>
    <div class="navs">
        <div class="nav-left">
            <ul>
                <li v-for="list in lists">{{list.title}}</li>
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
            lists: Array
        }
    }
</script>

<style scoped lang="scss">
    .navs {
        display: flex;
    }

    .nav-left {
        display: flex;
        flex: 9;
        flex-wrap: nowrap;
        overflow: scroll;

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