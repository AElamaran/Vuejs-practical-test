<template>
  <div class="sidebar bg-dark text-white p-4">
    <h4 class="text-center">Menu</h4>
    <ul class="list-group">
      <li>
        <router-link to="/home/tasks" class="nav-link text-white">Task Screen</router-link>
      </li>
      <li>
        <router-link to="/home/categories" class="nav-link text-white">Category Screen</router-link>
      </li>
      <li>
        <button class="btn btn-link text-white logout-btn" @click="logout">Logout</button>
      </li>
    </ul>
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
