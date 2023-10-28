<template>
 <div class="box">
          <div>
            <p>{{body.body}}</p>
            <small class="date">{{body.date}}</small>
          </div>
        <div>
            <i class="material-icons" :class="{active : body.isFav}" @click=" bodyStore.toggleFav(body.id)">favorite</i>
            <i class="material-icons" @click="bodyStore.deleteBody(body.id)">delete</i>
        </div>
      </div>

</template>

<script>
import { useBodyStore } from '../stores/BodyStore'

    export default {
       setup(){
          const bodyStore = useBodyStore()
          return {bodyStore}
        },
        props: ['body'],
      
    }
</script>

<style lang="scss" scoped>
body{margin:0px; padding:0px; background-color: #f2f2f2}
.box .form-group{width: 100%; text-align: right;}
.box textarea{box-sizing: border-box; height: 100px; width: 100%; border:1px solid #e2e2e2; padding:15px;}
.box button{height: 35px; border:1px solid #e2e2e2; padding: 5px 15px; margin-top:10px; background-color: #ffd356; color: #333;}

</style>
