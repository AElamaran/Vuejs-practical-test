
<template>
  <div class="login-container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow-sm ">
      <h3 class="text-center mb-4">Login</h3>
      <form @submit.prevent="login" id="login-form">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <v-text-field
            v-model="email"
            label="Email"
            outlined
            required
          ></v-text-field>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            outlined
            required
          ></v-text-field>
        </div>
        <div class="d-grid gap-2">
         
          <button type="submit" class="btn btn-primary">Login</button>
          <!-- <button type="button" class="btn btn-primary" @click="$router.push('/home')">Login</button> -->
          
          <button type="button" class="btn btn-link" @click="$router.push('/register')">Register</button>
        </div>
        <div class="mt-2 text-center">
          
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
    login() {
      redaxios
        .post('http://127.0.0.1:8000/api/login', { email: this.email, password: this.password })
        .then(() => this.$router.push('/home'))
        .catch(error => console.error(error));
    }
  }
};
</script>

<style scoped>
.vh-100 {
  min-height: 100vh;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background-color: #0b0b0b;
  color: #fffcfc;
  border-radius: 8px;
  width: 500px;
  display: block !important;
}

.btn-link {
  color: #007bff;
  text-decoration: none;
}

.btn-link:hover {
  text-decoration: underline;
}

.container {
    display: block !important;
    width: 100%;
}
</style>
