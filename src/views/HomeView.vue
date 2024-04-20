<script>
import { GoogleLogin } from 'vue3-google-login';
export default {


};

</script>

<template>
  <!-- Inicio de sesion bonito -->
  <GoogleLogin :callback="callback" prompt auto-login></GoogleLogin>
  <!-- Fin de sesion bonito -->
</template>
