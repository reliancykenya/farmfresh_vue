<template>
    <div>
        <div class="container-fluid py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-4 col-md-6" v-for="flora in floras" :key="flora.id">
                    <div class="service-item bg-light text-center p-5">
                        <i class="fa fa-carrot display-1 text-primary mb-3"></i>
                        <h4>Crop Name: {{ flora.name }}</h4>

                        <p class="mb-0">{{ flora.number }}</p>
                        <p class="mb-0">{{ flora.note }}</p>
                        <router-link class="btn btn-primary" :to="'/crop/' + flora.id + '/edit'">Update</router-link> 
                        <button class="btn btn-danger" @click="deleteCrop(id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props:['floras'],
    methods: {
        deleteCrop(id){
        this.$emit('delete-crop', id);
    }
}
}
</script>
<style>
    
</style>