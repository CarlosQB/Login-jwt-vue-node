# Sistema de Autenticación con Vue.js, Express, JWT y MySQL

## Descripción

Aplicación Full Stack que implementa un sistema de autenticación de usuarios utilizando **Vue.js** en el frontend y **Node.js + Express** en el backend.

El proyecto permite el registro e inicio de sesión de usuarios mediante **JSON Web Tokens (JWT)**, almacenamiento seguro de contraseñas con **bcrypt** y persistencia de datos en **MySQL** utilizando **Sequelize ORM**.

Fue desarrollado con fines de aprendizaje y como parte de un portafolio personal para demostrar conocimientos en desarrollo Full Stack.

---

# Tecnologías utilizadas

## Frontend

* Vue.js 3
* Axios
* Heroicons
* CSS3

## Backend

* Node.js
* Express.js
* Sequelize ORM
* JWT (JSON Web Token)
* bcrypt

## Base de datos

* MySQL

---

# Funcionalidades

* Registro de usuarios
* Inicio de sesión
* Cierre de sesión
* Autenticación mediante JWT
* Contraseñas cifradas con bcrypt
* Dashboard protegido
* Persistencia de sesión mediante LocalStorage
* Interfaz moderna y responsive

---

# Capturas del proyecto

## Login

<img width="452" height="460" alt="image" src="https://github.com/user-attachments/assets/1d95f143-954d-4050-a877-e08f3644cf10" />


---

## Registro

<img width="430" height="541" alt="image" src="https://github.com/user-attachments/assets/7692795b-e07b-4e8b-999f-bbe63b31be56" />


---

## Dashboard

<img width="1600" height="775" alt="image" src="https://github.com/user-attachments/assets/6e2da389-102f-4239-b2b1-0a475d862750" />


---

# Estructura del proyecto

```text
login-jwt-vue-node/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   │
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── services/
│   │   ├── views/
│   │   ├── App.vue
│   │   └── main.js
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/login-jwt-vue-node.git
```

---

## 2. Backend

Entrar a la carpeta:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Crear un archivo `.env` utilizando como referencia `.env.example`.

Iniciar el servidor:

```bash
npm run dev
```

---

## 3. Frontend

Entrar a la carpeta:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

---

# Variables de entorno

Crear un archivo `.env` dentro del directorio **backend**.

Ejemplo:

```env
DB_NAME=login_jwt_db
DB_USER=root
DB_PASSWORD=tu_password
DB_HOST=localhost
PORT=5000
JWT_SECRET=tu_clave_secreta
```

---

# Próximas mejoras

* Recuperación de contraseña
* Confirmación de correo electrónico
* Roles de usuario (Administrador / Usuario)
* Protección avanzada de rutas
* Edición de perfil
* Despliegue en Render y Vercel

---

# Autor

**Jose Carlos Quezada Benavides**

Ingeniero en Ciencias Computacionales

GitHub:

https://github.com/CarlosQB
