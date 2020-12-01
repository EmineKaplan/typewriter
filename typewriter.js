/* const sentence = "hello there from lighthouse labs";
function animation(sentence){
  let delay=0;
  for(let i = 0; i<sentence.length-1; i++){
    
    setTimeout(() => {process.stdout.write("s")},delay);
    delay+=50;
  }
   
      setTimeout(() => {process.stdout.write('\n')},delay);
    }
    

        animation(sentence); 

        function typewriter(sentence){  
          let delay=0;  
          for (const char of sentence) {   
             setTimeout(() => {      process.stdout.write(char);    }, delay); 
                 delay+=50;  
                }  
                 setTimeout(() => {    process.stdout.write("\n");  }, delay);  
                }
        typewriter("hello there from lighthouse labs");
*/



const sentence = "hello there from lighthouse labs \n";
let time = 50;
for (const char of sentence) {
  setTimeout(() => {process.stdout.write(char); 
}, time);
time +=50;
  
}
