let a = prompt("Введите какое-нибудь значение:")
if (typeof(+a) === 'number' && !isNaN(a)) +a % 2 === 1 ? console.log ("Нечетное") : console.log ("Четное");
else console.log ("Упс, кажется, вы ошиблись");
