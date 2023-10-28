<template>
<header>
    <div class="container">
      <img src="@/assets/pinia-logo.svg" alt="pinia" title="Pinia" />
      <h1>My Diary</h1>
    </div>
  </header>
    <main>
      <div class="container">

      <new-body></new-body>
      <div class="data-area">
        <p v-if="filter === 'all'">Total body: {{ totalCount }}</p>
        <p v-if="filter === 'favs'">Total body: {{ favCount }}</p>
        <div>
          <button @click="filter='all'">All Diaries</button>
          <button @click="filter='favs'">Favourite Diaries</button>
        </div>
      </div>
      <div class="body-list" v-for="body in body" v-if="filter==='all'">
        <body-details :body="body"></body-details>
      </div>
      <div class="body-list" v-for="body in favs"  v-if="filter==='favs'">
        <body-details :body="body"></body-details>
      </div>
      <p><button @click="bodyStore.$reset">Reset</button></p>
      </div>
    </main>


</template>

<script>
import { ref } from 'vue';
import bodyDetails from '../components/body-detail.vue';
import { useBodyStore } from '../stores/BodyStore';
import newBody from '../components/NewBody.vue';
import { storeToRefs } from 'pinia';

export default {
  components: {
    'body-details': bodyDetails,
    'new-body': newBody,
  },
  setup() {
    const bodyStore = useBodyStore();
    const { body, loading, favs, totalCount, favCount } = storeToRefs(bodyStore);
    const filter = ref('all');
    bodyStore.getBody();

    const setFilter = (newFilter) => {
      filter.value = newFilter;
    };

    bodyStore.getBody();

    return { bodyStore, filter, body, loading, favs, totalCount, favCount, setFilter };
  },
};
</script>

<style lang="scss" scoped>

body{margin:0px; padding:0px; background-color: #f2f2f2;}
body * {font-family: 'Roboto', sans-serif;}  
header{display: flex; justify-content: center; background-color: #333; padding: 15px 0;}
header .container{display: flex; justify-content: center; align-items: center;}
header img{height:42px; margin-right: 15px;}
header h1{color: #ccc; font-size: 28px;}

/*box*/
main{display: flex; justify-content: center;}
main .container{max-width: 720px; width: 100%;}
main p{text-align: left;}
main small{color:#bbb;}
.box{position: relative; background-color: #fff; margin-top:15px; border:1px solid #e2e2e2; text-align: left; padding: 15px; display: flex; align-items: center; justify-content: space-between; box-shadow: 2px 2px 4px #ccc;}
.box i{margin-left:5px; color: #bbb;}
.box i.active {color:#ff005d}

/*filter buttons*/
.data-area{display: flex; justify-content: space-between; align-items: center; padding: 0px; margin-top:15px}
.data-area button{height: 35px; margin-left:5px; padding:0 15px; border:1px solid #e2e2e2; background-color: #ddd;}

/*add diary*/
.box .form-group{width: 100%; text-align: right;}
.box textarea{box-sizing: border-box; height: 100px; width: 100%; border:1px solid #e2e2e2; padding:15px;}
.box button{height: 35px; border:1px solid #e2e2e2; padding: 5px 15px; margin-top:10px; background-color: #ffd356; color: #333;}


</style>
