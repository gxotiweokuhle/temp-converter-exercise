// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let f = (celsius * 9) / 5 + 32;
    return f+"F";
    //document.write(celsius + "C" + "is" + f + "F")
    // fahrenheit.value = parseFloat(f.toFixed(2)) 
    
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    let c = ((fahrenheit - 32) * 5) / 9;
    return c + "C";
   // document.write(fahrenheit +"F"+ "is" + c +"C")
    // celsius.value = parseFloat(c.toFixed(2))
  }
  
  // Prompt the user for input
  let temperature = parseFloat(prompt("Enter the temperature:"));
  let conversionType = prompt("Choose the conversion type: (Celsius or Fahrenheit)");
//   let fah = fahrenheit.value;
 // let cel = celsius.value;

  if (conversionType === "Fahrenheit") {
    //call function to display answer on screen
    //    document.getElementById('screen').innerHTML = cel; 
   
   alert(celsiusToFahrenheit(temperature))

  } else if (conversionType === "Celsius") {
    //call function
    // document.getElementById('screen').innerHTML = fah;
    alert(fahrenheitToCelsius(temperature))
  } else {
    alert("Invalid conversion type.");
  }