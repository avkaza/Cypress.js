# Cypress.js
Автотесты JS Cypress

# Автотесты для формы логина и пароля на https://login.qa.studio/

Важно: у поля логин есть логика
- Если не указать @, то после отправки логина и пароля получим ошибку валидации.
- Поле для ввода имейла на клиенте должны приводить к строчным буквам.

1. [Проверка на позитивный кейс авторизации]([url](https://github.com/avkaza/Cypress.js/blob/main/cypress/e2e/login.cy.js)):

- Ввод правильного логина
- Ввод правильного пароля
- Нажать войти
- Проверка получения нужного текста и наличия кнопки "крестик"

2. Проверка логики восстановления пароля:

- Нажать «Забыли пароль»
- Ввести любой имейл
- Проверка получения нужного текста и наличия кнопки "крестик"

3. Проверка на негативный кейс авторизации:

- Ввод правильного логина
- Ввод **НЕ**правильного пароля
- Нажать войти
- Проверка получения нужного текста и наличия кнопки "крестик"

4. Проверка на негативный кейс авторизации:

- Ввод **НЕ**правильного логина
- Ввод правильного пароля
- Нажать войти
- Проверка получения нужного текста и наличия кнопки "крестик"

5. Проверка на негативный кейс валидации:

- Ввод логин без @
- Ввод правильного пароля
- Нажать войти
- Проверка, что получаем текст с ошибкой

6. Проверка на привидение к строчным буквам в логине:

- Ввод логина с заглавными буквами
- Ввод правильного пароля
- Нажать войти
- Проверить, что авторизация успешна (нужный текст и наличие кнопки крестик)


# Автотест для https://testqastudio.me/

1. Проверка покупки товара на сайте:

- Открытие карточки товара
- Изменение количества
- Добавление в корзину
- Ввод данных для офомления заказа 
- Завершение покупки
- Проверка успешной покупки
