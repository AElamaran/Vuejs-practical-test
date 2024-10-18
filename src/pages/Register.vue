<template>
  <div class="container">
    <h3 class="text-center mt-5">Register</h3>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="form-area p-4 rounded shadow-sm">
          <form @submit.prevent="register" id="register-form">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <v-text-field
                v-model="form.name"
                id="name"
                label="Name"
                required
              ></v-text-field>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <v-text-field
                v-model="form.email"
                id="email"
                label="Email"
                required
              ></v-text-field>
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <v-text-field
                v-model="form.password"
                id="password"
                type="password"
                label="Password"
                required
              ></v-text-field>
            </div>

            <div class="mb-3">
              <label for="password_confirmation" class="form-label">Confirm Password</label>
              <v-text-field
                v-model="form.password_confirmation"
                id="password_confirmation"
                type="password"
                label="Confirm Password"
                required
              ></v-text-field>
            </div>

            <div class="text-end">
              <v-btn type="submit" color="success">Register</v-btn>
            </div>
          </form>

          <!-- Show error message if any -->
          <p v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'redaxios';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      
      },
      errorMessage: '',
    };
  },
  methods: {
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null; // Return null if cookie not found
    },
    register() {
      const csrfToken = this.getCookie('XSRF-TOKEN'); 
      axios
      .post('http://127.0.0.1:8000/api/register', {
      // Your registration data should be included here
       name: this.form.name,
          email: this.form.email,
          password: this.form.password,
          password_confirmation: this.form.password_confirmation,
    }, {
      headers: {
        'X-XSRF-TOKEN': csrfToken, // Include the CSRF token
        'Authorization': `Bearer ${localStorage.getItem('apiToken')}`, // Authorization token if needed
      },
    })
        .then(() => {
          this.$router.push('/');
          this.errorMessage = '';
        })
        .catch(error => {
          if (error.response && error.response.data) {
            this.errorMessage = error.response.data.message || 'Registration failed!';
          } else {
            this.errorMessage = 'An error occurred during registration. Please try again.';
          }
        });
    }
  }
};
</script>

<style scoped>
.form-area {
  background-color: #0b0b0b;
  color: #fffcfc;
}

.alert {
  margin-top: 10px;
}
</style>
