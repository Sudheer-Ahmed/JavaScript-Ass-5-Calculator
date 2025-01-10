
function btnCalculator(newChar) {
    let cal = document.getElementById("cal");
    let lastChar = cal.value.slice(-1);
  
    
    if (newChar === "=") {
      if (cal.value && /^[\d.+\-*/() ]+$/.test(cal.value)) {
        cal.value = eval(cal.value); 
      } else {
        cal.value = "Invalid Expression";
      }
      return; 
    }
  
   
    if (newChar === "C") {
      cal.value = ""; 
      return;
    }
  

    if (
      ["+", "-", "*", "/"].includes(lastChar) &&
      ["+", "-", "*", "/"].includes(newChar)
    ) {
      cal.value = cal.value.slice(0, -1) + newChar; 
    } else {
      cal.value += newChar; 
    }
  
    console.log(cal.value); 
  }
  