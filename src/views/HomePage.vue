<template>
    <div>
      <h1>POSTS</h1>
     <button @click="logout">Logout</button>

      <div class="posts-container">
        <div v-for="post in displayedPosts" :key="post.id" class="post">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: [],
        displayLimit: 9 // Set the limit for number of posts to display
      };
    },
    computed: {
      displayedPosts() {
        return this.posts.slice(0, this.displayLimit); // Slice the posts array to only include the first 10 posts
      }
    },
    mounted() {
      this.fetchPosts();
    },
    methods: {
      fetchPosts() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            this.posts = response.data;
          })
          .catch(error => {
            console.error('Error fetching posts:', error);
          });
      },
      logout() {
      localStorage.removeItem('token'); // Remove token from local storage
      // Optionally redirect the user to the login page or any other route
      this.$router.push('/login');
    }
    },
    beforeRouteEnter(to, from, next) {
  console.log('beforeRouteEnter guard triggered');
  
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem('token');

  console.log('isAuthenticated:', isAuthenticated);

  if (!isAuthenticated) {
    console.log('User is not authenticated, redirecting to login page');
    // If not authenticated, redirect to the login page
    console.log('failed')
    next('/login');
  } else {
    // If authenticated, proceed to enter the route
    console.log('User is authenticated, proceeding to enter the route');
    next();
  }
}

  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
  }
  
  .posts-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; /* Adjust the gap between columns */
    margin: 20px;
  }
  
  .post {
    border: 1px solid;
    padding: 10px;
  }
  </style>
  