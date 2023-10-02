<template>
 <form @submit.prevent="handleSubmit">

  <h4>Create New Playlist</h4>
  <input type="text" required placeholder="Playlist title" v-model="title">
  <input type="text" required placeholder="description" v-model="description">

   <label>Upload playlist cover image</label>
   <input type="file" @change="handleChange">
   <div class="error"></div>
   <button>create</button>
   
 </form>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const title = ref('')
        const description = ref("")
        const file = ref(null)

        const  handleSubmit = () => {
            console.log(title.value, description.value)
        }

        const handleChange = (e) => {

            const select = e.target.files
            console.log(select)

        }

        return {title,description, file, handleSubmit, handleChange}
    }



}
</script>

<style>

</style>