<template>
    <div class="navbar">
        <nav>
            <h1><router-link to="/home">MusicMe</router-link></h1>
            <div class="links">
                <button @click="handleClick">Logout</button>
                <router-link to="/signup" class="btn">Signup </router-link>
                <router-link to="/login" class="btn"> Login</router-link>

            </div>
        </nav>
    </div>
</template>

<script>
import useLogout from '@/composables/useLogout';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const {logout} = useLogout()
        const router = useRouter()

        const handleClick = async () => {
            await  logout()
            console.log('user is logout')
            router.push({name: "login"})
            

        }
           return {router,handleClick}
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