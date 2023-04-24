<template>
    <div>
        <div v-if="floras.length>0">
            <CropCardComponent :floras="floras" @delete-crop="deleteCrop"></CropCardComponent>
        </div>
        <div v-else>
            <h1 class="text-danger">Crops Loading...</h1>
        </div>
        
    </div>
</template>
<script>
import CropCardComponent from '../../components/farmfresh/CropCardComponent.vue';
import axios from 'axios'
export default {
    components: { CropCardComponent },
    data(){
        return {
            floras:[]
        };
    },
    created () {
        this.getCrops();
    },
    methods: {
        getCrops(){
            axios.get('http://127.0.0.1:8000/api/floras').then(res=>{
                this.floras=res.data;
                console.log(res.data);
            })
        },
        deleteCrop(){
    let id = this.$route.params.id;
      axios.delete(`http://127.0.0.1:8000/api/flora/${id}`).then(res=>{
        this.floras=this.floras.filter(flora=>flora.id!==id);
      })

    }
       
    }
}
</script>
<style>
    
</style>