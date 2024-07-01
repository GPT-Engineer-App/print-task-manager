<template>
  <q-page class="q-pa-md">
    <q-list bordered>
      <q-item v-for="task in tasks" :key="task.id">
        <q-item-section avatar>
          <q-img :src="task.image" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.name }}</q-item-label>
          <q-item-label caption>{{ task.status }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn label="Print" color="primary" @click="printTask(task.id)" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Main',
  setup() {
    const tasks = ref([]);

    const fetchTasks = async () => {
      const response = await axios.get('/api/print-tasks');
      tasks.value = response.data;
    };

    const printTask = async (taskId: number) => {
      await axios.post(`/api/print-tasks/${taskId}/print`);
      fetchTasks();
    };

    onMounted(() => {
      fetchTasks();
    });

    return {
      tasks,
      printTask,
    };
  },
});
</script>