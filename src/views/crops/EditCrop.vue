<template>
    <div class="container display-flex mt-3 w-50">
  <form @submit.prevent="editCrop ()">
            <div class="mb-3">
    <label for="crop_name" class="form-label"
      >Name</label
    >
    <input
      type="text"
      class="form-control"
      id="crop_name"
      name="crop_name"
      v-model="flora.name"

    />
  </div>
  <div class="mb-3">
    <label for="crop_number" class="form-label"
      >Number</label
    >
    <input
      type="Number"
      class="form-control"
      id="crop_number"
      name="crop_number"
      v-model="flora.number"
    />
  </div>
  <div class="mb-3">
    <label for="crop_note" class="form-label"
      >Note</label
    >
    <textarea
      class="form-control"
      id="crop_note"
      name="crop_note"
      v-model="flora.note"
      rows="3"
      ></textarea>
  </div>
  
  <div class="mb-3">
    <button class="btn btn-success">Edit Crop</button>
  </div>
        </form>
</div>
</template>
<script>
import axios from 'axios';


export default {
    data() {
        return {
            flora: {
                name:'',
                number: '',
                note:''
            }
        }
    },
    created () {
        this.getCrop();
    },
    methods: {
        async getCrop() {
            let id = this.$route.params.id;
            await axios.get(`http://127.0.0.1:8000/api/flora/${id}`).then((res)=>{
                this.flora = res.data;
                console.log(res);
            });
        },
        async editCrop () {
            let id = this.$route.params.id;
            await axios.put(`http://127.0.0.1:8000/api/flora/${id}`, this.flora).then ((res)=>{
                console.log(res);
                this.flora = {
                name:'',
                number: '',
                note:''
                };
            });
            this.$router.replace("/crops");
        }
    }
}
</script>
<style>
    
</style>