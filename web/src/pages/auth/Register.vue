<template>
  <div style="width: 500px">
    <q-form @submit="onSubmit">
      <div class="q-pb-md">
        <div class="text-h5 text-center">Đăng ký tài khoản</div>
        <div class="text-center">
          Hoặc
          <router-link :to="{ name: 'login' }">Đăng nhập tại đây</router-link>
        </div>
      </div>
      <q-input
        filled
        type="text"
        v-model="name"
        label="Họ tên*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Vui lòng nhập họ tên']"
      />
      <q-input
        filled
        type="email"
        v-model="email"
        label="Email*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Vui lòng nhập email']"
      />

      <q-input
        class="q-my-xs"
        filled
        type="password"
        v-model="password"
        label="Mật khẩu*"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Vui lòng nhập mật khẩu',
        ]"
      />
      <q-input
        class="q-my-xs"
        filled
        type="password"
        v-model="confirm_password"
        label="Nhập lại mật khẩu*"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Vui lòng nhập lại mật khẩu',
        ]"
      />
      <q-btn
        class="full-width block"
        label="Đăng ký"
        type="submit"
        color="primary"
      />
    </q-form>
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import setNotification from '../../helper/notification';

export default {
  setup() {
    const $q = useQuasar();
    const email = ref('');
    const password = ref('');
    const confirm_password = ref('');
    const name = ref('');
    const onSubmit = () => {
      $q.notify(setNotification('Đăng ký thành công'));
    };

    return {
      email,
      password,
      confirm_password,
      name,
      onSubmit,
    };
  },
};
</script>
