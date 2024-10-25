<template>
    <div class="auth-container">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <p>
            Don't have an account? <router-link to="/register">Register here</router-link>
        </p>
    </div>
</template>

<script>
import apiClient from "@/services/axios";

export default {
    name: 'LoginForm',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await apiClient.post(`https://localhost:7094/api/Auth/login`, {
                    email: this.email,
                    passwordHash: this.password
                });

                localStorage.setItem('token' , response.data.token);
                localStorage.setItem('username', response.data.username);

                this.$router.push('/home');
            } catch (error) {
                console.error('Login failed', error.response.data);
                alert(error.response.data.message || 'Login failed. Check your credentials and try again.');
            }
        }
    }
};
</script>

<style scoped>
.auth-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

p {
    text-align: center;
    margin-top: 15px;
}
</style>
