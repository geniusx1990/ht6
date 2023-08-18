function multiline(strings) {
  const lines = strings[0].split('\n');
  const result = [];

  for (let i = 1; i < lines.length - 1; i++) {
    const line = lines[i];
    result.push(`${i} ${line}`);
  }

  return result.join('\n');


}

let test = multiline`
  function add(a, b) {  
  return a + b;  
  }
  `;

console.log(test);
