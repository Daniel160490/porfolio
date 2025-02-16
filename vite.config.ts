/// <reference types="node" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 3000, // Usa el puerto de Render o el 3000 por defecto
    host: true, // Hace la app accesible desde fuera
  }
})
