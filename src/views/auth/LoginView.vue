<template>
    <form @submit.prevent="handleSubmit">

     <h3>Login</h3>
      
     <input type="email" placeholder="email" v-model="email">
     <input type="password" placeholder="Password" v-model="password">
     <div v-if="error">{{ error }}</div>
     <button v-if="!isPending">login</button>
     <button disabled v-if="isPending">loading...</button>
 
    </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from "@/composables/useLogin"

export default {
    setup() {
      const {error, login, isPending} = useLogin()

        const email = ref("")
        const password = ref('')

         const handleSubmit = async () => {
               await login(email.value,password.value)
              if(!error.value) {
                console.log("user is in")
                

              }



         }
 
      


        return {email,password, error,handleSubmit,isPending}
    }
};
</script>

<style lang="scss" scoped>

</style>