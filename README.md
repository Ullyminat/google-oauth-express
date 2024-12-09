# Google OAuth Authentication with Express and MongoDB

```markdown
                         _                          _   _                                         
  __ _  ___   ___   __ _| | ___    ___   __ _ _   _| |_| |__     _____  ___ __  _ __ ___  ___ ___ 
 / _` |/ _ \ / _ \ / _` | |/ _ \  / _ \ / _` | | | | __| '_ \   / _ \ \/ / '_ \| '__/ _ \/ __/ __|
| (_| | (_) | (_) | (_| | |  __/ | (_) | (_| | |_| | |_| | | | |  __/>  <| |_) | | |  __/\__ \__ \
 \__, |\___/ \___/ \__, |_|\___|  \___/ \__,_|\__,_|\__|_| |_|  \___/_/\_\ .__/|_|  \___||___/___/
 |___/             |___/                                                 |_|                      
 
```

## Описание

Этот проект представляет собой пример реализации аутентификации через Google OAuth с использованием **Node.js**, **Express.js**, **MongoDB** и **Passport.js**. Проект позволяет пользователям аутентифицироваться через Google, сохранять их данные в базе данных MongoDB, и предоставлять доступ к защищенным маршрутам на основе их ролей (пользователь, администратор).

## Возможности

- Аутентификация через Google OAuth.
- Сохранение данных пользователя в MongoDB.
- Защищенные маршруты для профиля пользователя и администратора.
- Проверка роли пользователя для доступа к определенным маршрутам.
- Использование **Helmet** для повышения безопасности приложения.

## Установка

### Необходимые компоненты

- **Node.js** — Серверная платформа.
- **MongoDB** — База данных.
- **Google OAuth 2.0** — Ключи доступа для аутентификации.

### Шаги установки

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/yourusername/google-oauth-express.git
    cd google-oauth-express
    ```

2. Установите зависимости:

    ```bash
    npm install
    ```

3. Настройте файл `.env`:

    Создайте файл `.env` в корне проекта и укажите строку подключения к базе данных MongoDB, порт для запуска сервера, секретный ключ сессии и ключи Google OAuth:

    ```env
    DB=mongodb://localhost:27017/google-oauth
    PORT=3000
    SECRET=your_session_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    ```

4. Запустите сервер:

    ```bash
    npm run dev
    ```

    Сервер будет доступен по адресу: `http://localhost:3000`.

## API Эндпоинты

### Базовый URL: `/`

#### Аутентификация

- **Начало аутентификации через Google**
  - **URL:** `/auth/google`
  - **Метод:** `GET`

- **Обработка обратного вызова от Google**
  - **URL:** `/auth/google/callback`
  - **Метод:** `GET`

#### Профили

- **Профиль пользователя**
  - **URL:** `/profile`
  - **Метод:** `GET`
  - **Описание:** Доступно только аутентифицированным пользователям.

- **Профиль администратора**
  - **URL:** `/profile/admin`
  - **Метод:** `GET`
  - **Описание:** Доступно только пользователям с ролью `admin`.

## Структура проекта

```bash
📂 backend
├── 📂 config
│   ├── db_connect.mjs       # Подключение к базе данных MongoDB
│   └── passport.mjs         # Конфигурация Passport.js для Google OAuth
├── 📂 controller
│   └── authController.mjs   # Логика обработки запросов для аутентификации
├── 📂 model
│   └── user.mjs             # Модель данных для пользователей
├── 📂 routes
│   └── index.mjs            # Роутинг для обработки запросов
├── 📂 middleware
│   ├── Token.mjs            # Middleware для проверки аутентификации
│   └── roleCheck.mjs        # Middleware для проверки роли пользователя
├── .env                      # Конфигурация окружения
├── index.mjs                 # Главный файл приложения
├── package.json              # Пакетный менеджер
└── README.md                 # Документация