<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow-sm w-100" style="max-width: 400px;">
      <h3 class="text-center mb-4">Register</h3>
      <form @submit.prevent="register" id="register-form">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <v-text-field
            v-model="email"
            id="email"
            label="Email"
            outlined
            required
          ></v-text-field>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <v-text-field
            v-model="password"
            id="password"
            label="Password"
            type="password"
            outlined
            required
          ></v-text-field>
        </div>
        <div class="d-grid gap-2 mt-4">
          <!-- Register button -->
          <button type="submit" class="btn btn-primary">Register</button>
          <!-- Login button -->
          <button type="button" class="btn btn-link" @click="$router.push('/login')">Login</button>
        </div>
        <div class="mt-3 text-center">
          <!-- Forgot Password link -->
          <button type="button" class="btn btn-link" @click="$router.push('/forgot-password')">Forgot Password?</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import redaxios from 'redaxios';
export default {
  data() {
    return { email: '', password: '' };
  },
  methods: {
    register() {
      redaxios
        .post('/api/register', { email: this.email, password: this.password })
        .then(() => this.$router.push('/login'))
        .catch(error => console.error(error));
    }
  }
};
</script>

<style scoped>
.vh-100 {
  min-height: 100vh;
}

.card {
  background-color: #0b0b0b;
  color: #fffcfc;
  border-radius: 8px;
}

.btn-link {
  color: #007bff;
}

.btn-link:hover {
  text-decoration: underline;
}
</style>
