<template>
  <div style="width: 500px">
    <q-form @submit="onSubmit">
      <div class="q-pb-md">
        <div class="text-h5 text-center">Đăng nhập tài khoản</div>
        <div class="text-center">
          hoặc
          <router-link :to="{ name: 'register' }">Đăng ký tại đây</router-link>
        </div>
      </div>
      <q-input
        filled
        type="email"
        v-model="form.email"
        label="Email*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Vui lòng nhập email']"
      />

      <q-input
        class="q-my-xs"
        filled
        type="password"
        v-model="form.password"
        label="Mật khẩu*"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Vui lòng nhập mật khẩu',
        ]"
      />
      <q-btn
        class="full-width block"
        label="Đăng nhập"
        type="submit"
        color="primary"
      />
    </q-form>
  </div>
</template>

<script lang="ts">
import { login } from 'src/api/auth';
import store from 'src/store';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import showAlert from '../../commons/showAlert';
export default {
  setup() {
    const form = reactive({
      email: '',
      password: '',
    });

    const router = useRouter();

    const onSubmit = async () => {
      try {
        const res: any = await login(form);
        store.dispatch('login', res.data);
        showAlert.success(res.message);
        router.push({ name: 'dashboard' });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      form,
      onSubmit,
    };
  },
};
</script>
