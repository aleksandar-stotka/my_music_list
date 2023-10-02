<template>
     <form @submit.prevent="handleSubmit">

<h3>Signup</h3>
<input type="text" placeholder="Display Name" v-model="displayNmae"> 
<input type="email" placeholder="email" v-model="email">
<input type="password" placeholder="Password" v-model="password">
<div v-if="error">{{ error }}</div>
<button v-if="!isPending">Signup</button>
<button disabled v-if="isPending">loading...</button>

</form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';
export default {
    setup() {

        const {error, isPending, signup} = useSignup()
      

        const email = ref('')
        const password = ref('')
        const displayNmae = ref('')

        const handleSubmit = async () => {
           await signup(email.value,password.value,displayNmae.value)
           if(!error.value) {
            console.log('user signup')
           }

           
        }


     return {email, password,displayNmae, isPending,error, handleSubmit}
        
    }
   
};
</script>

<style lang="scss" scoped>

</style>