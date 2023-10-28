import {defineStore} from 'pinia'

export const useBodyStore = defineStore("bodyStore", {
    state : () => ({
      body: [],
        loading : false
    }),
    getters: {
        favs(){

            return this.body.filter(body=>body.isFav)
        },
        
        favCount(){
            return this.body.reduce((previous,current) => {
                return current.isFav? previous+ 1 : previous

            },0)
 
        },
        totalCount : (state) => { //I am using arrow function so I will not use this anymore, change to this to state
            return state.body.length
        }
    },
    actions:{
        async getBody() {
            this.loading = true
            const res = await fetch ("http://localhost:3000/body")
            const data = await res.json()
            console.log(data)
            this.body = data
            this.loading = false
        },
        async newBody(body){
            this.body.push(body)
            
            const res = await fetch ("http://localhost:3000/body",{
                method: 'POST',
                headers : {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            }).catch((err)=>{console.log(err)})

        },
        async toggleFav(id){
            const body = this.body.find(body => body.id===id )
            body.isFav = !body.isFav; 
    
            const res = await fetch ("http://localhost:3000/body/" + id,{
                method: 'PATCH',

                body: JSON.stringify({isFav : body.isFav})
            }).catch((err)=>{console.log(err)})
        },
        async deleteBody(id){
            this.body = this.body.filter(body => {
                return body.id !== id

            })
            const res = await fetch (`http://localhost:3000/body/${id}`,{
                method: 'Delete',
 
            }).catch((err)=>{console.log(err)})


        }
    }
})