<template>
    <div>
       <h1> edit todo </h1>
       <div>
            <TodoForm :isEdit="true"/>
       </div>
    </div>
</template>
<script>
// import route from 'vue-router';
import FormView from '@/views/FormView.vue';
export default {
    components: {
        TodoForm: FormView
    },
}
</script>
<style lang="">
    
</style>