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

Заглушка докер

После запуска доступен по http://localhost:3000/

```sh
docker-compose up
```

Для повторного билда и запуска в случае изменения локальных файлов

```sh
docker-compose up --build
```

# Превью

Ветку `master` можно посмотреть [здесь](https://define-shop.vercel.app)

Превью других веток можно отыскать в соответсвующих пайпланах

# Генерация типов

```sh
npx openapi-typescript https://{сюда вставить url api}/api/openapi --output ./src/domain/api/types/api-types.ts
```

# Разработка

- Ветка называем в формате `#{номер issue}`, к примеру `#1`, для работы ссылок и автоформатирования коммитов
- После установки зависимостейц выполняем команду, для автоматического прогона проверок при коммите

```sh
  npx simple-git-hooks
```
