<template>
  <div class="container">
    <h3 align="center" class="mt-5">Task Management</h3>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="form-area">
          <form @submit.prevent="save" id="check-register-form">
            <div class="row">
              <div class="col-md-6">
                <label>Task Name</label>
                <v-text-field
                  v-model="task.name"
                  label="Task Name"
                  required
                ></v-text-field>
              </div>

              <div class="col-md-6">
                <label>Description</label>
                <v-text-field
                  v-model="task.description"
                  label="Description"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <label>Category</label>
                <v-select
                  v-model="task.category_id"
                  :items="categories"
                  item-text="name"
                  item-value="id"
                  label="Category"
                  required
                ></v-select>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-3">
                <v-btn type="submit" color="success" form="check-register-form">Save</v-btn>
              </div>
            </div>
          </form>
        </div>

        <v-table theme="dark">
          <thead>
            <tr>
              <th class="text-left">Task ID</th>
              <th class="text-left">Task Name</th>
              <th class="text-left">Description</th>
              <th class="text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Task in result" :key="Task.id">
              <td>{{ Task.id }}</td>
              <td>{{ Task.name }}</td>
              <td>{{ Task.description }}</td>
              <td>{{ Task.category_id }}</td>
              <td>
                <v-btn type="button" color="info" @click="edit(Task)">Edit</v-btn>
                <v-btn type="button" color="danger" @click="remove(Task)">Delete</v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'redaxios';

export default {
  name: 'Task',
  data() {
    return {
      result: [],
      categories: [], // Add this line
      task: {
        id: '',
        name: '',
        description: '',
        category_id: ''
      }
    };
  },
  created() {
    this.TaskLoad();
    this.loadCategories(); // Fetch categories on component creation
  },
  methods: {
    loadCategories() {
      axios.get("http://127.0.0.1:8000/api/category") // Adjust this endpoint as needed
        .then(({ data }) => {
          this.categories = data; // Store the fetched categories
        });
    },
    TaskLoad() {
      axios.get("http://127.0.0.1:8000/api/tasks")
        .then(({ data }) => {
          this.result = data;
        });
    },
    save() {
      if (this.task.id === '') {
        this.saveData();
      } else {
        this.updateData();
      }
    },
    saveData() {
      axios.post("http://127.0.0.1:8000/api/Task", this.task)
        .then(() => {
          this.TaskLoad();
          this.task.name = '';
          this.task.description = '';
          this.task.category_id = '';
        });
    },
    edit(Task) {
      this.task = { ...Task }; // Use the spread operator to copy Task
    },
    updateData() {
      const editrecords = `http://127.0.0.1:8000/api/Task/${this.task.id}`;
      axios.put(editrecords, this.task)
        .then(() => {
          this.task.name = '';
          this.task.description = '';
          this.task.category_id = '';
          alert("Updated!!!");
          this.TaskLoad();
        });
    },
    remove(task) {
      const url = `http://127.0.0.1:8000/api/task/${task.id}`;
      axios.delete(url)
        .then(() => {
          alert("Deleted");
          this.TaskLoad();
        });
    }
  }
};
</script>

<style scoped>
.form-area {
  padding: 20px;
  margin-top: 20px;
  background-color: #0b0b0b;
  color: #fffcfc;
}
.bi-trash-fill {
  color: red;
  font-size: 18px;
}
.bi-pencil {
  color: green;
  font-size: 18px;
  margin-left: 20px;
}
</style>
