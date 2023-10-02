<template>
 <form @submit.prevent="handleSubmit">

  <h4>Create New Playlist</h4>
  <input type="text" required placeholder="Playlist title" v-model="title">
  <input type="text" required placeholder="description" v-model="description">

   <label>Upload playlist cover image</label>
   <input type="file" @change="handleChange">
   <div class="error">{{ fileError }}</div>

   <div class="error"></div>
   <button>Create</button>
   
 </form>
</template>

<script>
import { ref } from 'vue'

import useStorage from "@/composables/useStorage"


export default {
    setup() {
   
           const {url, filePath, uploadImage} = useStorage()
        const title = ref('')
        const description = ref("")
        const file = ref(null)
        const fileError = ref(null)

        const  handleSubmit = async () => {
           await uploadImage(file.value)
           console.log("image upload url:", url.value)
        }
        //ALLOWED TYPES FILE 

        const  types = ['image/png', 'image/jpeg']

        const handleChange = (e) => {

            const select = e.target.files[0]
            console.log(select)

            if(select && types.includes(select.type)) {
                file.value = select
                fileError.value =null
            } else {
                file.value = null
                fileError.value = "Please select an image file (png or jbg)"
            }

        }

        return {title,description, file, handleSubmit, handleChange, types, fileError, filePath}
    }



}
</script>

<style>

</style>