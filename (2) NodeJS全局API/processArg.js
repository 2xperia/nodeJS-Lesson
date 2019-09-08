const arg = process.argv[2];

if(arg === '-h') {
  help();
} else {
  calc();
}

function help() {
  const msg = '错误' 
  console.log(msg);
}

function calc() {
  console.log(arg + '=%s', eval(arg));
}
