<template>
  <div style="background-color: orange; padding: 5px">
    <p>This is the App component</p>
    <h2>{{ blogPostId }} - {{ blogPostTitle }}</h2>
    <h4>
      {{ blogPostContent }}
    </h4>
    <button @click="blogPostTitle = 'A different title'">
      Change Blog Post Title
    </button>
    <!--when a parent data changes, it will flow down, but when child changes, data will not flow up-->
    <BlogPost
      :id="blogPostId"
      :blog-post-title="blogPostTitle"
      :blog-post-content="blogPostContent"
    ></BlogPost>
    <BlogPost
      :id="blogPostId"
      :blog-post-title="blogPostTitle"
      :blog-post-content="blogPostContent"
    ></BlogPost>
  </div>
  <hr />
  <BlogPost
    id="1"
    blogPostTitle="What is a muggle?"
    blogPostContent="A muggle is a person who lacks any sort of magical ability ..."
  >
  </BlogPost>
  <!--use kebab case-->
  <BlogPost
    id="1"
    blog-post-title="What is a muggle?"
    blog-post-content="A muggle is a person who lacks any sort of magical ability"
  ></BlogPost>
  <BlogPost
    :id="blogPostId"
    :blog-post-title="blogPostTitle"
    :blog-post-content="blogPostContent"
  ></BlogPost>

  <BlogPost
    v-for="posts in posts"
    :key="posts.id"
    :id="posts.id"
    :blog-post-title="posts.blogPostTitle"
    :blog-post-content="posts.blogPostContent"
  ></BlogPost>
  <hr />
  <BlogPost v-for="posts in posts" :key="posts.id" v-bind="posts"></BlogPost>
</template>

<script setup>
import BlogPost from "./BlogPost.vue";

import { ref } from "vue";

let blogPostId = ref(2);
let blogPostTitle = ref(
  "HP and the Cursed Child production suspended until April"
);
let blogPostContent = ref(
  "Adding to the earlier post, the production has been ...."
);
let posts = ref([
  {
    id: 1,
    blogPostTitle: "What is a muggle in HP world?",
    blogPostContent:
      "A muggle is a person who lacks any sort of magical ability...",
  },
  {
    id: 2,
    blogPostTitle:
      "HP and the Cursed Child Broadway production suspended until April",
    blogPostContent:
      "Adding to the earlier post, the Broadway production of Harry Potter and the Cursed Child has been...",
  },
  {
    id: 3,
    blogPostTitle: "Potter DIY: Make Your Own “Harry Potter Puppet Pal”",
    blogPostContent:
      "We all remember those iconic YouTube videos of Harry and the gang and probably couldn’t get “The Mysterious...",
  },
  {
    id: 4,
    blogPostTitle: "Fan Project Brings Life to “Harry Potter” in Translation",
    blogPostContent:
      "It’s no secret that the Harry Potter series is a global phenomenon, having been translated into over 80 languages to date....",
  },
]);
</script>

<style scoped></style>
