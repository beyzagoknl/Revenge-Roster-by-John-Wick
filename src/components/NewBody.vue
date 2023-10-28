<template>
<form @submit.prevent="sendForm">
<div class="box">
<div class="form-group">
<textarea v-model="newBody" placeholder="Let's talk to me"></textarea>
<button>Submit </button>

</div>
</div>

</form>

</template>

<script>
import { ref } from 'vue'
import {useBodyStore} from "../stores/BodyStore"

    export default {
        setup(){
            const bodyStore = useBodyStore()
            const newBody = ref('')

            const currentDate = () =>{
                const current = new Date ()
                const date = current.getDate() + "." +(current.getMonth()+1) + "." + current.getFullYear()
                return date
            }
            
            const sendForm = () => {
                if (newBody.value.length > 0){
                    bodyStore.newBody({
                        id: bodyStore.body.length+1,
                        body: newBody.value,
                        date : currentDate(),
                        isFav: true

                    })
                }

            }
            return {sendForm,newBody}
        }
        
    }
</script>

<style lang="scss" scoped>
    
</style>