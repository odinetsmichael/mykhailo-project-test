# Nuxt App

Это проект на **Nuxt.js** с использованием **Nuxt Nitro** — современного фреймворка для разработки высокопроизводительных веб-приложений на Vue 3.

Проект использует современные технологии, включая TypeScript, ESLint, Stylelint, Zod для валидации, Socket.IO для real-time взаимодействия, и Vuex для управления состоянием.

---

## 📌 Описание проекта

Этот проект представляет собой основу веб-приложения с серверным рендерингом и готовой архитектурой для масштабирования.  
Включает в себя:

- **Nuxt 4 + Nitro** — быстрый SSR и API роутинг.
- **Vue 3 + Vue Router** — современный подход к созданию UI.
- **Vuex** — централизованное хранилище данных.
- **Socket.IO** — real-time связь между клиентом и сервером.
- **Vue I18n** — многоязычная поддержка.
- **bcryptjs & jsonwebtoken** — базовая логика аутентификации и безопасности.
- **Bootstrap 5** — адаптивный дизайн.
- **ESLint + Stylelint + Prettier** — стандартизация и форматирование кода.
- **Zod** — строгая валидация данных.

---

## ⚙️ Скрипты проекта

В `package.json` доступны следующие команды:

| Команда               | Описание                                        |
| --------------------- | ----------------------------------------------- |
| `npm run dev`         | Запуск проекта в режиме разработки              |
| `npm run build`       | Сборка проекта для продакшна                    |
| `npm run generate`    | Генерация статических файлов                    |
| `npm run preview`     | Предварительный просмотр собранного проекта     |
| `npm run start`       | Запуск собранного проекта                       |
| `npm run lint`        | Проверка кода на ошибки ESLint и Stylelint      |
| `npm run lint:fix`    | Автоматическое исправление ошибок               |
| `npm run format`      | Форматирование кода Prettier                    |
| `npm run postinstall` | Подготовка проекта после установки зависимостей |

---

## 🛠 Установка и запуск

1. Клонируй проект:

```bash
git clone git@github.com:odinetsmichael/mykhailo-project-test.git
cd mykhailo-project-test

2. Собери Docker-образ:
docker build -t mykhailo-project-test .

3. Запусти контейнер:
docker run -p 3000:3000 -e NUXT_SESSION_PASSWORD=a-random-password-with-at-least-32-characters mykhailo-project-test
```
