<template>
    <div class="container mt-5">
      <div class="row justify-content-end">
        <div class="col-md-6">
          <h3 align="center">Forgot Password</h3>
          <div class="form-area">
            <form @submit.prevent="resetPassword" id="forgot-password-form">
              <div class="row">
                <div class="col-md-12">
                  <label>Email</label>
                  <v-text-field
                    v-model="email"
                    label="Email"
                    required
                  ></v-text-field>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-6 text-right">
                  <button type="submit" class="btn btn-primary px-4">Reset Password</button>
                </div>
                <div class="col-md-6">
                  <button type="button" class="btn btn-link p-0" @click="$router.push('/')">Login</button>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <button type="button" class="btn btn-link p-0" @click="$router.push('/register')">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import redaxios from 'redaxios';
  export default {
    data() {
      return { email: '' };
    },
    methods: {
      resetPassword() {
        redaxios
          .post('/api/reset-password', { email: this.email })
          .then(() => alert('Password reset link sent!'))
          .catch(error => console.error(error));
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    padding-top: 50px; /* Adjusts forgot password form's top position */
  }
  
  .form-area {
    padding: 20px;
    background-color: #0b0b0b;
    color: #fffcfc;
  }
  
  .btn-link {
    color: #007bff;
    text-decoration: none;
  }
  
  .btn-link:hover {
    text-decoration: underline;
  }
  </style>
  