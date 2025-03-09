<template>
    <div class = 'blog-post'>
        <p>
            {{ message }}
        </p>
        <!--Display the id, title, content-->
        <h2> {{ id }} - {{ blogPostTitle }}</h2>
        <h4> {{blogPostContent}}</h4>
        <button @click="changeBlogPostTitle"> Change Blog Post Title</button>

    </div>
</template>

<script setup>
import { ref } from 'vue';
let message = ref('This is the BlogPost component.');
const props = defineProps(['id','blogPostTitle','blogPostContent']); //returns an object with all the props, so we can access it outside the script
console.log(props.blogPostContent);
// defineProps({id:Number, blogPostTitle:String, blogPostContent:String});
function changeBlogPostTitle(){
    props.blogPostTitle = "A different title";
}
</script>

<style scoped>
.blog-post{
    background-color: aqua;
    padding: 10px;
    margin-bottom: 10px;
}

</style>