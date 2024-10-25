<template>
    <div class="group-container">
        <h2>Create Group</h2>
        <form @submit.prevent="createGroup">
            <input v-model="groupName" type="text" placeholder="Group Name" required />
            <button type="submit">Create Group</button>
        </form>
    </div>
</template>

<script>
import apiClient from '../services/axios';

export default {
    data() {
        return {
            groupName: ''
        };
    },
    methods: {
        async createGroup() {
            try {
                const response = await apiClient.post('https://localhost:7094/api/Groups/create', {
                    name: this.groupName
                });

                alert(`Group created! Code: ${response.data.code}`);
                this.$router.push('/view-groups');
            } catch (error) {
                console.error('Failed to create group', error.response.data);
                alert(error.response.data.message || 'Failed to create group');
            }
        }
    }
};
</script>

<style scoped>
.group-container {
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
    background-color: #28a745;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}
</style>
