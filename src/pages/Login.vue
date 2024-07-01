<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="username" label="Username" />
        <q-input v-model="password" label="Password" type="password" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Login" color="primary" @click="login" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Login',
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const login = () => {
      // Simulate login
      if (username.value && password.value) {
        router.push('/main');
      }
    };

    return {
      username,
      password,
      login,
    };
  },
});
</script>