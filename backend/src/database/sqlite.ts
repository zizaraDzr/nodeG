import sqlite3 from 'sqlite3';
import path from 'path';

// Формируем путь к базе данных
const dbPath = path.resolve('./database/center_krovi.db');
console.log(dbPath)
// Подключаемся к базе данных
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных:', err.message);
    } else {
        console.log('Успешное подключение к базе данных SQLite');
    }
});
process.on('SIGINT', () => {
  console.log('Выход')
  db.close((err) => {
      if (err) {
          console.error('Ошибка закрытия базы данных:', err.message);
      } else {
          console.log('Соединение с базой данных закрыто');
      }
      process.exit(0); // Завершаем процесс
  });
});

// Экспортируем подключение к базе данных
export default db;
