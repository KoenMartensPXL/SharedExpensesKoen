<template>
    <div class="view-container">
        <h2>Your Groups</h2>
        <ul>
            <li v-for="group in groups" :key="group.id">{{ group.name }} (Code: {{ group.code }})</li>
        </ul>
    </div>
</template>

<script>
import apiClient from '../services/axios';

export default {
    data() {
        return {
            groups: []
        };
    },
    created() {
        this.fetchGroups();
    },
    methods: {
        async fetchGroups() {
            try {
                const response = await apiClient.get('https://localhost:7094/api/Groups');
                this.groups = response.data;
            } catch (error) {
                console.error('Failed to fetch groups', error.response.data);
            }
        }
    }
};
</script>

