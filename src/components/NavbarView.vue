<template>
    <div class="navbar">
        <nav>
            <h1><router-link to="/home">MusicMe</router-link></h1>
            <div class="links">
                <div v-if="user">
                    <button @click="handleClick">Logout</button>
                </div>
                <div v-else>
                    <router-link to="/signup" class="btn">Signup </router-link>
                <router-link to="/login" class="btn"> Login</router-link>

                </div>
                
            </div>
        </nav>
    </div>
</template>

<script>
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const {logout} = useLogout()
        const {user} = getUser()
        const router = useRouter()

        const handleClick = async () => {
            await  logout()
            console.log('user is logout')
            router.push({name: "login"})
            

        }
           return {router,handleClick, user}
    }
   
};
</script>

<style  scoped>

.navbar {
    padding: 16px;
    margin-bottom: 60px;
    background: white;
}
nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}
nav h1 {
    margin-left: 20px;
}
nav .links {
    margin-left: auto;
}
nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
}

</style>