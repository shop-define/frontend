# Сборка и запуск

- Для локальной разработки, доступен по http://localhost:3000/

```sh
npm run dev
```

- Билд

```sh
npm run build
```

# Запуск docker-compose

После запуска доступен по http://localhost:3000/

```sh
docker-compose up
```

Для повторного билда и запуска в случае изменения локальных файлов

```sh
docker-compose up --build
```

# Превью

Ветку `main` можно посмотреть [здесь](https://define-shop.vercel.app)

Превью других веток можно отыскать в соответсвующих пайпланах

# Генерация типов

```sh
npx openapi-typescript https://{сюда вставить url api}/api/openapi --output ./src/domain/api/types/api-types.ts
```
