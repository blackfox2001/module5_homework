let map = new Map();

map.set("Лиля", "собака")
map.set("Валя", "кошка")
map.set("Мила", "попугай")
map.set("Саша", "рыбки")


 map.forEach((value, key) => {
    console.log(`Ключ - ${key}, значение - ${value}`);
  });