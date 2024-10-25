<template>
    <div class="auth-container">
        <h2>Register</h2>
        <form @submit.prevent="register">
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="username" type="text" placeholder="Username" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
        </form>
        <p>
            Already have an account? <router-link to="/login">Login here</router-link>
        </p>
    </div>
</template>

<script>
import apiClient from "@/services/axios";

export default {
    name: 'RegisterForm',
    data() {
        return {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        };
    },
    methods: {
        async register() {
            if (this.password !== this.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            try {
                const response = await apiClient.post('https://localhost:7094/api/Auth/register', {
                    email: this.email,
                    username: this.username,
                    passwordHash: this.password
                });

                alert(response.data.message);
                this.$router.push('/login');
            } catch (error) {
                console.error('Registration failed', error.response.data);
                alert(error.response.data.message || 'Registration failed');
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
