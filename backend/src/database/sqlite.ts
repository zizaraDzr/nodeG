const sqlite3 = require('sqlite3').verbose(); // Подключаем библиотеку

// Подключаемся к базе данных
const db = new sqlite3.Database('C:/Program Files/DB Browser for SQLite/Центр крови.db', (err:any) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err.message);
  } else {
    console.log('Успешное подключение к базе данных SQLite');
  }
});
// Закрываем соединени
// db.close((err) => {
//     if (err) {
//       console.error('Ошибка закрытия базы данных:', err.message);
//     } else {
//       console.log('Соединение с базой данных закрыто');
//     }
//   });
export default db