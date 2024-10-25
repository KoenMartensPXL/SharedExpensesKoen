<template>
    <div class="join-container">
        <h2>Join Group</h2>
        <form @submit.prevent="joinGroup">
            <input v-model="groupId" type="text" placeholder="Group Code" required />
            <button type="submit">Join Group</button>
        </form>
    </div>
</template>

<script>
import apiClient from '../services/axios';

export default {
    data() {
        return {
            groupId: ''
        };
    },
    methods: {
        async joinGroup() {
            try {
                await apiClient.post('https://localhost:7094/api/Groups/join', {
                    groupId: this.groupId
                });
                alert('Successfully joined the group!');
                this.$router.push('/view-groups');
            } catch (error) {
                console.error('Failed to join group', error.response.data);
                alert(error.response.data.message || 'Failed to join group');
            }
        }
    }
};
</script>

<style scoped>
.join-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f9f9f9;
}

h2 {
    text-align: center;
}

input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
