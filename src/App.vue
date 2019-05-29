<template>
    <div id="page">
        <div class="top">
            <router-view/>
        </div>
        <div class="bottom">
            <bottom-tabs></bottom-tabs>
        </div>
    </div>
</template>
<script>
import bottomTabs from './components/bottom-tabs'
export default {
  name: 'App',
  components: {
    bottomTabs
  }
}
</script>

<style lang="scss">
    @import "./assets/common";
    html,body{
        height:100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height:100%;
    }
    #page{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width:100%;
        height: 100%;
        overflow: hidden;
    }
    .top{
        flex:1;
        display: flex;
        overflow: auto;
    }
    .bottom{
        display: flex;
        height:2.6rem;
    }
</style>
