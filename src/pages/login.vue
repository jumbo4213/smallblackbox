<template>
    <div class="page">
        <div class="pageTop">
            <img src="../assets/images/back.png" alt="">
            <h3>密码登录</h3>
        </div>
        <form action="" >
            <div class="form-item">
                <input type="text" placeholder="账号" v-model="loginData.username">
            </div>
            <div class="form-item">
                <input type="password" placeholder="密码" v-model="loginData.password">
            </div>
            <div class="form-item">
                <button type="button" @click="click">登录</button>
            </div>
        </form>
        <confirm v-if="showConfirm" :confirmText="confirmText" @closeTip="closeTip"></confirm>
    </div>
</template>

<script>
  import confirm from '../components/confirm'
  import {mapActions} from 'vuex'
export default {
  name: 'login',
  data(){
    return {
      loginData:{
        username:'',
        password:''
      },
      showConfirm:false,
      confirmText:'hello'
    }
  },
  components:{
    confirm
  },
  methods:{
    saveLogin(token){
      this.$store.dispatch('saveLogin',token);
    },
    click(){
      if(this.loginData.username==''){
        this.showConfirm=true;
        this.confirmText='用户名不能为空！';
        return;
      }
      if(this.loginData.password==''){
        this.showConfirm=true;
        this.confirmText='密码 不能为空！';
        return;
      }
      this.$http.post('/login',this.loginData).then(result=>{
        console.log(result);
        if(result.data.msg=='success'){
          console.log(4);
          this.showConfirm=true;
          this.confirmText='登录成功';
          this.saveLogin(result.data.token);
          this.$router.push('/');
        }
      })
    },
    closeTip(){
      this.showConfirm=false;
    }
  }
}
</script>

<style scoped lang="scss">
    @import '../assets/mixin';
    .page{
        width: 100%;
        background: #f5f5f5;
    }
    .pageTop{
        background: #fff;
        margin-bottom:.6rem;
        height:3.2rem;
        padding-left:.8rem;
        display: flex;
        justify-content: left;
        align-items: center;
        border-bottom: 1px solid #ddd;
        img{
            display: flex;
            @include wh(1.5rem,1.5rem)
        }
        h3{
            display: flex;
            flex:1;
            align-items: center;
            justify-content: center;
        }
    }
    .form-item{
        border-bottom: 1px solid #eee;
        background: #fff;
        input,button{
            @include wh(100%,3.0rem);
            font-size:1.0rem;
            padding:.5rem 1rem;;
        }
        button{
            background: #3190e8;
            color:#fff;
            font-size: 1.2rem;
        }
    }
</style>
