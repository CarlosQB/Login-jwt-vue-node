# Login JWT con Vue + Node + MySQL

Proyecto de autenticación
## Tecnologías

- Vue 3 + Vite
- Node.js + Express
- MySQL + Sequelize
- JWT
- bcryptjs
- Heroicons

## Funciones

- Registro de usuarios
- Inicio de sesión
- Contraseñas encriptadas
- Token JWT
- Ruta protegida `/auth/profile`
- Dashboard protegido
- Cierre de sesión

## Base de datos

Crea una base de datos en MySQL:

```sql
CREATE DATABASE login_jwt;
```

## Configurar backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Edita `.env` con tu usuario y contraseña de MySQL.

## Configurar frontend

```bash
cd frontend
npm install
npm run dev
```

## Rutas principales

```txt
POST /auth/register
POST /auth/login
GET  /auth/profile
```
