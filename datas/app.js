// é uma função construtora - 
// uma função construtora sempre começa com a letra maiúscula

// Date(a, m, d, h, M, s, ms)


const data = new Date();

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()+1); // 0 - Janeiro - 11 Dezembro
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo,6 - Sábado
console.log(Date.now());

console.log(Date());