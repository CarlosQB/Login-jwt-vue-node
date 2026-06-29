<script setup>
import {
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  BellIcon,
  ClockIcon
} from "@heroicons/vue/24/outline";

const emit = defineEmits(["cerrar-sesion"]);

const usuario = JSON.parse(localStorage.getItem("usuario")) || {
  nombre: "Usuario",
  correo: "Sin correo"
};

const fecha = new Date().toLocaleDateString("es-MX", {
  day: "2-digit",
  month: "long",
  year: "numeric"
});

const cerrarSesion = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
  emit("cerrar-sesion");
};
</script>

<template>
  <main class="dashboard-page">
    <header class="topbar">
      <div class="brand">
        <UserCircleIcon class="brand-icon" />
        <span>Panel de usuario</span>
      </div>

      <button class="btn-logout" @click="cerrarSesion">
        <ArrowRightOnRectangleIcon class="btn-icon" />
        Cerrar sesión
      </button>
    </header>

    <section class="welcome-card">
      <div>
        <span class="badge">Cuenta activa</span>
        <h1>Hola, {{ usuario.nombre || "Usuario" }}</h1>
        <p>Bienvenido a tu panel personal. Aquí puedes consultar la información de tu cuenta.</p>
      </div>
    </section>

    <section class="account-grid">
      <article class="account-card">
        <UserCircleIcon class="card-icon" />
        <h2>Mi perfil</h2>
        <p>{{ usuario.correo || "Sin correo" }}</p>
      </article>

      <article class="account-card">
        <ShieldCheckIcon class="card-icon" />
        <h2>Seguridad</h2>
        <p>Tu sesión está protegida.</p>
      </article>

      <article class="account-card">
        <BellIcon class="card-icon" />
        <h2>Notificaciones</h2>
        <p>No tienes notificaciones nuevas.</p>
      </article>

      <article class="account-card">
        <Cog6ToothIcon class="card-icon" />
        <h2>Ajustes</h2>
        <p>Configuración general de la cuenta.</p>
      </article>
    </section>

<section class="bottom-grid">
  <article class="profile-card">
    <UserCircleIcon class="profile-avatar" />

    <div>
      <h2>{{ usuario.nombre || "Usuario" }}</h2>
      <p>{{ usuario.correo || "Sin correo" }}</p>
      <span class="status-pill">Activo</span>
    </div>
  </article>

  <article class="actions-card">
    <h2>Acciones rápidas</h2>

    <div class="action-list">
      <button>Editar perfil</button>
      <button>Cambiar contraseña</button>
      <button>Configurar cuenta</button>
    </div>
  </article>
</section>
  </main>
</template>