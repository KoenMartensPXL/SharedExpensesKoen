<template>
    <div>
        <h1>Welcome, {{ username }}!</h1>

        <div v-if="groups.length > 0">
            <h2>Your Groups:</h2>
            <ul>
                <li v-for="group in groups" :key="group.id">
                    {{ group.name }} (Code: {{ group.code }})
                </li>
            </ul>
        </div>
        <div v-else>
            <h1>You are not in a group yet.</h1>
            <h2>Find some friends to make a group with!</h2>
        </div>

        <button @click="createGroup">Create Group</button>
        <button @click="joinGroup">Join Group</button>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import apiClient from "@/services/axios";

export default {
    name: 'HomePage',
    data() {
        return {
            username: '',
            groups: []
        };
    },
    created() {
        this.username = localStorage.getItem('username') || 'User';
        this.fetchUserGroups();
    },
    methods: {
        async fetchUserGroups() {
            try {
                const response = await apiClient.get('https://localhost:7094/api/Groups/user');
                this.groups = response.data;
            } catch (error) {
                console.error('Failed to fetch user groups', error.response.data);
                alert(error.response.data.message || 'Error fetching groups');
            }
        },
        async logout() {
            try {
                await apiClient.post('https://localhost:7094/api/Auth/logout');
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                this.$router.push('/login');
            } catch (error) {
                console.error('Logout failed', error.response.data);
                alert(error.response.data.message || 'Logout failed');
            }
        },
        createGroup() {
            this.$router.push('/create-group');
        },
        joinGroup() {
            this.$router.push('/join-group');
        }
    }
};
</script>

<style>
h1 {
    text-align: center;
    margin: 20px;
}

h2 {
    text-align: center;
    margin: 20px;
}

button {
    display: block;
    margin: 10px auto; /* Added margin for better spacing */
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
