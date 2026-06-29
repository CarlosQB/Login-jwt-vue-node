<script setup>
import { ref } from "vue";
import "./assets/auth.css";
import "./assets/dashboard.css";
import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import DashboardView from "./views/DashboardView.vue";

import "./assets/clientes.css";
import "./assets/auth.css";

const token = ref(localStorage.getItem("token"));
const vista = ref("login");

const loginCorrecto = () => {
  token.value = localStorage.getItem("token");
};

const cerrarSesion = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
  token.value = null;
  vista.value = "login";
};
</script>

<template>
  <!-- Login -->
  <LoginView
    v-if="!token && vista === 'login'"
    @login-correcto="loginCorrecto"
    @ir-registro="vista = 'registro'"
  />

  <!-- Registro -->
  <RegisterView
    v-else-if="!token && vista === 'registro'"
    @ir-login="vista = 'login'"
  />

  <!-- Dashboard -->
  <DashboardView
    v-else
    @cerrar-sesion="cerrarSesion"
  />
</template>