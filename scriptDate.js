let date = new Date();
let options = {weekday: 'long', year: 'numeric', 
                month: 'long', day: 'numeric',
                hour: 'numeric', minute: 'numeric', second: 'numeric'};
document.write(date.toLocaleDateString('pt-BR', options));
//document.write(date.toLocaleDateString('en-US', options));
/*ReferĂȘncia
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/
Reference/Global_Objects/Date/toLocaleDateString */
