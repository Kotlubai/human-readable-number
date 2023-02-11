module.exports = function toReadable (number) {
  if (number === 0) return 'zero';
  
  //задем названия единицам, десяткам и числам 10 до 20
  const units = [
    '', //для удобства индексации. ноль идет отдельно будет мешать в 20, 30... 
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ];

  const toTwenty = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];

  const tens = [
    '', //для удобства индексации
    '', //для удобства индексации. 10 вызываем через toTwenty.
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];
  
  //переменные содержащие индексы единиц, десятков и сотен исходного числа
  let hundredsIndex = Math.floor(number / 100);
  let tensIndex = Math.floor((number % 100) / 10);
  let unitsIndex = (number % 100) % 10;

  //записываем сотые в переменную если они есть
  let resultHundreds = '';

  if (hundredsIndex !== 0) resultHundreds = `${units[hundredsIndex]} hundred `; 

  //записываем десятые в переменную если они есть
  let resultTens = '';
    
  if (tensIndex === 1) resultTens = `${toTwenty[unitsIndex]} `;
  else if (tensIndex > 1) resultTens = `${tens[tensIndex]} `;

  //записываем единицы в переменную если они есть
  let resultUnits = '';

  if (tensIndex !== 1) resultUnits = `${units[unitsIndex]} `;

  //общий результат
  let result = `${resultHundreds}${resultTens}${resultUnits}`;
  
  //убираем лишние пробелы вначаде и конце
  result = result.trim();
  
  return result;
}
