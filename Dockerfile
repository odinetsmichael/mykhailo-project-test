# --- Этап 1: сборка приложения ---
FROM node:22-bullseye-slim AS builder

# Рабочая директория
WORKDIR /app

# Устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем исходный код
COPY . .

# Сборка Nuxt-приложения
RUN npm run build

# --- Этап 2: продакшн-контейнер ---
FROM node:22-bullseye-slim AS runner

WORKDIR /app

# Копируем только нужные файлы из builder
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./

# Указываем порт (Nuxt слушает 3000)
EXPOSE 3000

# Запускаем Nuxt
CMD ["node", ".output/server/index.mjs"]