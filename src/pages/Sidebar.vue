<template>
  <div class="sidebar bg-dark text-white p-4">
    <h4 class="text-center">Menu</h4>
    <div>
      <p>
        <router-link to="/home/tasks" class="nav-link text-white">Task Screen</router-link>
      </p>
      <p>
        <router-link to="/home/categories" class="nav-link text-white">Category Screen</router-link>
      </p>
      <p>
        <router-link to="/home/categories" class="nav-link text-white" @click="logout">Logout</router-link>
      </p>
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // Handle logout logic here
      console.log('User logged out');
      this.$router.push('/'); // Redirect to the login page after logout
    }
  }
}
</script>

<style scoped>
.sidebar {
  height: 100vh; /* Full height */
  width: 250px; /* Width of the sidebar */
  position: fixed; /* Fixed positioning */
  transition: transform 0.3s ease; /* Smooth transition */
  z-index: 1000; /* Ensure sidebar is above other content */
}

.nav-link {
  padding: 10px 15px; /* Padding for links */
  border-radius: 4px; /* Rounded corners for better UX */
  margin: 0;
  font-size: 16px;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Highlight on hover */
}

.logout-btn {
  font-weight: bold; /* Bold text */
  text-decoration: none; /* No underline */
}

.logout-btn:hover {
  text-decoration: underline; /* Underline on hover */
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .sidebar {
    width: 200px; /* Adjust sidebar width for smaller screens */
  }
}

@media (max-width: 576px) {
  .sidebar {
    width: 150px; /* Further adjust sidebar width for very small screens */
  }
}
</style>
