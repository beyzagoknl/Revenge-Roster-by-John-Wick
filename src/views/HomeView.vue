<template>
  <header>



      <!-- <img src="@/assets/pinia-logo.svg" alt="pinia" title="Pinia" /> -->
      <h1>John Wick</h1>

  </header>
  

            <photo-john class="photo"></photo-john>


      <button @click="navigateToDashboard" class=hello>
        Let's start here
      </button>

  
</template>
 


<script setup>

import PhotoJohn from "../components/photo/PhotoJohn.vue"
import {useRouter} from "vue-router";

const router = useRouter()

const navigateToDashboard = () => {
  router.push({ name: 'dashboard' });
};


</script>

<style lang="scss" scoped>

.photo{
    margin-top: 6rem;

}
body{margin:0px; padding:0px; background-color: #f2f2f2;}
body * {font-family: 'Roboto', sans-serif;}  
header{display: flex; justify-content: center; background-color: #333; padding: 15px 0;}
header .container{display: flex; justify-content: center; align-items: center;}
header img{height:42px; margin-right: 15px;}
header h1{color: #ccc; font-size: 28px;}
.hello{
  background-color: red;
  margin-top: 10rem;
  margin-left: 15rem;
}
</style>