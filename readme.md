Компиляция:
1. Отсутствует импорт Router из express. Добавлен импорт. 1-ая строка файла ./controllers/usercontroller.js
2. Установка модуля bcrypt через npm install bcrypt
3. Неправильный импорт модели пользователя. Испревлен импорт. 5-ая строка файла ./controllers/usercontroller.js
4. Неправильный импорт модели игры. Испревлен импорт. 2-ая строка файла ./controllers/gamecontroller.js
5. Отсуствует экспорт модели игры. Добавлен экспорт. 4-ая строка файла ./models/game.js
6. Неправильный экспорт роутера из файла. Испревлен экспорт. 117-ая строка файла ./controllers/gamecontroller.js
7. Неправильный импорт модели пользователя. Исправлен импорт модели пользователя. 2-ая строка ./middleware/validate-session.js
8. Отсуствует экспорт из ./db.js. Добавлен экспорт. 25-ая строка файл ./db.js

Логика:
1. Проверка токена аутентификации производилась даже при попытке создать пользователя/войти в аккаунт. Проверка перенесена на доступ к играм. ./app.js 11-ая строка.
2. Неправильное имя свойства passwordHash. Исправлено имя. 12-ая строка ./controllers/usercontroller.js
3. Отсуствует синхронизация с БД. Добавлена синхронизация, так же добавлена асинхронность. 8-ая строка ./controllers/usercontroller.js
4. Исправлен экспорт сущности пользователя. 4-ая строчка ./models/user.js
5. Исправлен экспорт сущности игры. 4-ая строчка ./models/game.js
6. Некорректное обращение к свойствам в теле запроса. Исправлено обращение. 5-ая строка ./controllers/gamecontroller.js
7. Отсуствует синхронизация с БД. Добавлена синхронизация, так же реализована асинхронность. 40-ая строчка ./controllers/gamecontroller.js
8. Не корректное обращение к ответу сервера. Исправлено обращение. 9-ая строка ./controllers/gamecontroller.js
9. Не корректное обращение к id пользователя при запросе. Исправлено обращение. 74-ая строка ./controllers/gamecontroller.js
10. Не корректное обращение к id пользователя при запросе. Исправлено обращение. 98-ая строка ./controllers/gamecontroller.js
11. Не указан порт для прослушки приложением. Передано значение порта. 12-ая строка ./app.js 


Рефактор кода:
1. Замена body-parser на express.json().
2. Замена var на const.
3. Замена некоторых конструкций коллбеков типа "function () {}" на стрелочные функции вида "() => {}"
4. В файле ./middleware/validate-session.js убраные не обязательный else. Для большего понимания кода добавлено имя функции в случае если пользователь не найден. Так же код отформатирован для лучшей читаемости.
5. Для улучшения читаемости кода добавлен импорт валидации. ./app.js 6-ая строка.

