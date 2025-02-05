const fs = require('fs')
fs.writeFile('writeFile.txt', 'Привет, асинхронный мир!', (err) => {
    if (err) {
      console.error('Ошибка при записи файла:', err);
      return;
    }
    console.log('Файл успешно записан.');
  });

fs.mkdirSync('new-folder');
console.log('Папка создана.');

fs.rmdirSync('new-folder');
console.log('Папка удалена.');


// Создаем поток для записи
const writeStream = fs.createWriteStream('createWriteStream.txt');

// Записываем данные
writeStream.write('Первая строка\n');
writeStream.write('Вторая строка\n');
writeStream.end(); // Завершаем запись

writeStream.on('finish', () => {
  console.log('Запись завершена.');
});

writeStream.on('error', (err) => {
  console.error('Ошибка записи:', err);
});

