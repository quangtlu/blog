<template>
  <q-form @submit="onSubmit" style="width: 500px">
    <div class="text-h5 text-center q-pa-md">Quên mật khẩu</div>
    <q-input
      filled
      type="email"
      v-model="email"
      label="Email*"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Vui lòng nhập email']"
    />
    <q-btn
      class="full-width block q-mt-md"
      label="Gửi"
      type="submit"
      color="primary"
    />
  </q-form>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import setNotification from 'src/helper/notification';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();
    const email = ref('');
    const onSubmit = () => {
      $q.notify(setNotification('Gửi email thành công'));
    };

    return {
      email,
      onSubmit,
    };
  },
};
</script>
