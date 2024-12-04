function divideStringValue(str, divisor) {
    try {
      // Omdan strengen til et tal
      let number = parseFloat(str);
      
      // Hvis number er NaN, betyder det, at strengen ikke kunne omdannes til et tal
      if (isNaN(number)) {
        throw new Error("Strengen kan ikke omdannes til et tal.");
      }
      
      // Divider med divisor, og håndter division med nul
      if (divisor === 0) {
        throw new Error("Kan ikke dividere med nul.");
      }
      
      // Udregn resultatet
      let result = number / divisor;
      console.log(result);  // Udskriv resultatet
      
    } catch (error) {
      // Hvis der opstår en fejl, bliver denne blok kørt
      console.log("Der opstod en fejl: " + error.message);  // Udskriv fejlmeddelelsen
    }
  }
  
  // Test med forskellige input
  divideStringValue("10", 2);  // Skal give 5
  divideStringValue("abc", 2);  // Skal fange fejl, da 'abc' ikke er et tal
  divideStringValue("10", 0);  // Skal fange fejl ved division med nul