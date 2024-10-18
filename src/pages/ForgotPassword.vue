<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card p-4 shadow-sm " >
        <h3 class="text-center mb-4">Forgot Password</h3>
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
                <div class="col-md-12 text-center">
                  <button type="submit" class="btn btn-primary px-4">Reset Password</button>
                </div>
              </div>
              <div class="row mt-2">
              <div class="col-md-12 d-flex justify-content-center">
                <button type="button" class="btn btn-link p-0" @click="$router.push('/')">Login</button>
              </div>
            </div>
            </form>
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
    padding-top: 50px; 
    display: flex;
    
  }
  
  .card {
    padding: 20px;
    background-color: #0b0b0b;
    color: #fffcfc;
    width: 400px;
  }
  
  .btn-link {
    color: #007bff;
    text-decoration: none;
  }
  
  .btn-link:hover {
    text-decoration: underline;
  }
  </style>
  