# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/HoqV8tj7UcgY7Ok34GkJqWrVPxFO3n

# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/hI6r09Nhwvoz9bzZJU6VJsplymNeE6

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/RCiictBVYC2UbbdMujYxagtCt0NUfH

# Удаляем контакт
node index.js --action remove --id 3
https://monosnap.com/file/CjPXnmLc8NTx6Y1NcMELXhLjzI55hm