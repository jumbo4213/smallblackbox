<template>
    <div class="top-nav">
        <ul class="top-left">
            <li v-for="(list,index) in lists" @click="goAddress(index,list.path)"
                :class="[(index===current)?'active':'']">{{list.title}}
            </li>
        </ul>
        <ul class="top-right">
            <li class="search"><img src="../assets/images/search.png" alt=""></li>
            <li class="mail"><img src="../assets/images/mail.png" alt=""></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "top-tabs",
        data() {
            return {
                current: 0
            }
        },
        props: {
            lists: Array
        },
        created() {
            this.current = this.$route.meta.index;
        },
        methods: {
            goAddress(index, path) {
                this.current = index;
                this.$router.push(path);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .top-nav {
        display: flex;
        width:100%;
        justify-content: space-between;
        position: fixed;
        top:0;
        left:0;
        z-index: 100;
        background: #fff;
    }

    .top-left {
        display: flex;
        flex: 1;
        > li {
            display: flex;
            font-size: 1.2rem;
            height: 3.2rem;
            justify-content: center;
            align-items: center;
            width: 3.5rem;
            transition: all 0.3s linear;
        }

        > li.active {
            font-size: 1.6rem;
            color: #333;
        }
    }

    .top-right {
        display: flex;
        justify-content: flex-end;
    }

    .top-right > li {
        display: flex;
        height: 100%;
        width: 3.0rem;
        text-align: center;
        justify-content: center;
        align-items: center;

        img {
            display: flex;
            width: 1.5rem;
        }
    }

</style>