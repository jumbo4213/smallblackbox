<template>
    <div style="width:100%;">
        <div class="top-nav">
            <ul class="top-left">
                <li class="current">个人中心</li>
            </ul>
            <ul class="top-right">
                <li class="search"><img src="../assets/images/system.png" alt=""></li>
                <li class="mail"><img src="../assets/images/mail.png" alt=""></li>
            </ul>
        </div>
        <div class="login-content">
            <div class="login-logo"><img src="../assets/images/head.png" alt=""></div>
            <div class="login-link">
                <h3> <router-link to="/login">点击登录</router-link></h3>

                <span>登录解锁更多精彩内容</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "me",
        components: {},
        data() {
            return {
                topList: {}
            }
        }
    }
</script>

<style scoped lang="scss">
    .top-nav {
        display: flex;
        width: 100%;
        justify-content: space-between;
        z-index: 100;
        background: #fff;
        height: 3.2rem;
    }

    .top-left {
        display: flex;
        flex: 1;
        height: 3.2rem;

        > li {
            display: flex;
            font-size: 1.6rem;
            height: 3.2rem;
            justify-content: center;
            align-items: center;
            transition: all 0.3s linear;
        }
    }

    .top-right {
        display: flex;
        justify-content: flex-end;
        height: 3.2rem;
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
    .login-link{
        span{
            font-size:.7rem;
        }
    }
</style>