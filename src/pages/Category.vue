<template>
  <div class="container">
    <h3 class="text-center mt-5">Category</h3>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="form-area p-4 rounded shadow-sm">
          <form @submit.prevent="save" id="check-register-form">
            <div class="mb-3">
              <label for="categoryName" class="form-label">Category</label>
              <v-text-field
                v-model="category.name"
                id="categoryName"
                label="Category"
                required
              ></v-text-field>
            </div>
            <div class="text-end">
              <v-btn type="submit" color="success">Save</v-btn>
            </div>
          </form>
        </div>

        <table class="table table-dark mt-5">
          <thead>
            <tr>
              <th scope="col">Category ID</th>
              <th scope="col">Category Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in result" :key="category.id">
              <td>{{ category.id }}</td>
              <td>{{ category.name }}</td>
              <td>
                <v-btn type="button" color="info" @click="edit(category)">Edit</v-btn>
                <v-btn type="button" color="danger" @click="remove(category)">Delete</v-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'redaxios';

export default {
  name: 'Category',
  data() {
    return {
      result: [],
      category: {
        id: '',
        name: '',
      },
    };
  },
  created() {
    this.categoryLoad();
  },
  methods: {
    categoryLoad() {
      axios.get("http://127.0.0.1:8000/api/categories").then(({ data }) => {
        this.result = data;
      });
    },
    save() {
      axios.post("http://127.0.0.1:8000/api/category", this.category).then(() => {
        this.categoryLoad();
        this.category.name = '';
        this.category.id = '';
      });
    },
    edit(category) {
      this.category = { ...category };
    },
    remove(category) {
      axios.delete(`http://127.0.0.1:8000/api/category/${category.id}`).then(() => {
        this.categoryLoad();
      });
    },
  },
};
</script>

<style scoped>
.form-area {
  background-color: #0b0b0b;
  color: #fffcfc;
}

.table th, .table td {
  vertical-align: middle;
}

.text-end {
  text-align: right;
}
</style>
