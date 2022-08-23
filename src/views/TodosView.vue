<template>
    <div>
        <router-link to="/create"> Create New Todo</router-link>
        <h1>List of Todos</h1>
        <table>
            <thead>
                <th style="padding:30px">ID</th>
                <th style="padding:30px">Author</th>
                <th style="padding:30px">Todo</th>
                <th style="padding:30px">Action</th>
            </thead>
            <tbody>
                <tr v-for="item in todos" :key="item._id">
                    <td style="padding:30px">{{item._id}}</td>
                    <td style="padding:30px">{{item.author}}</td>
                    <td style="padding:30px">{{item.todo}}</td>
                    <td>
                        <button type="button" @click="editItem(item._id)" style="margin-right:8px">Edit</button>
                        <button type="button" @click="deleteItem(item._id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
// import router from 'vue-router';
export default {
    data() {
        return {
            todos:[],
            name: "Michael Angelo"
        }
    },
    async mounted() {
        await this.getAllTodos();
    },
    methods: {
        async getAllTodos() {
            await fetch("http://localhost:3000/todos")
                .then(res => res.json())
                .then((response) => {
                    this.todos = response;
                });
        },
        editItem(todoId) {
            console.log(todoId);
            this.$router.push({name: 'get-todo', params: { id:todoId }})
        },
        async deleteItem(todoId) {
            if(confirm(`Delete this${todoId}`)){
                await fetch(`http://localhost:3000/todos/delete/${todoId}`, { method: "DELETE"})
                .then(res => res.json())
                .then((response) => {
                    console.log(response)
                    this.getAllTodos();
                })
            }
        } 
    },
}
</script>