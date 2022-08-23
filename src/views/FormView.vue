<template>
    <div>
        form
         <div>
            <label for="">Author</label>
            <input type="text" v-model="form.author">
         </div>
         <div>
            <label for="">Todo</label>
            <input type="text" v-model="form.todo">
         </div>
         <div>
            <button type="button" @click="update" v-if="isEdit">Update</button>
            <button type="button" @click="save" v-else>Save</button>
         </div>
    </div>
</template>
<script>
export default {
    props: {
        isEdit: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            form: {
                author: '',
                todo: ''
            }
        }
    },
    mounted() {
        if(this.isEdit) {
            console.log(this.$route.params.id)
            this.getTodo();
        }
    },
    methods: {
        async getTodo() {
            console.log("get todo")
            await fetch(`http://localhost:3000/todos/get/${this.$route.params.id}`)
                .then(res => res.json())
                .then((response) => {
                    console.log(response);
                    this.form = response;
                })
            // this.form = this.$route.params.id;
        },
        async save() {
            await fetch("http://localhost:3000/todos/create", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.form)
            })
            .then(res => res.json())
            .then((response) => {
                console.log(response);
                this.$router.push({name: 'todos'});
            })
        },
        async update() {
            await fetch(`http://localhost:3000/todos/update/${this.$route.params.id}`, {
                method: "PUT",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.form)
            })
            .then(res => res.json())
            .then((response) => {
                console.log(response);
                this.$router.push({name: 'todos'});
            })
        }
    },
}
</script>
<style lang="">
    
</style>