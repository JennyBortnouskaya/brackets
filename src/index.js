module.exports = function check(str, bracketsConfig) {
  // your solution
  let array = str.split(''); 
  let a = array.length;
  let result;
  let b = 0;
 

  function check(){
    for( let i = 0; i < bracketsConfig.length; i++){
    for( let j = 0; j < a; j++){
        if( array[j] ==  bracketsConfig[i][0]){

        if (array[j + 1] ==  bracketsConfig[i][1]) {
          array.splice(j, 1);
          array.splice(j, 1);
          };
        };
      };
     };
    };

while ( b < a){
  check();
  b++;
}
 if (array == ""){
  result = true
  } else {
    result = false
  };
  return result;
}
