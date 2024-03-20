var toHex = function(num) {
    if (num === 0) return "0";
    let result = '';
    let mask = 15; // 0xF
    while (num !== 0) {
      let digit = num & mask;
      result = (digit < 10 ? String.fromCharCode(digit + 48) : String.fromCharCode(digit + 87)) + result;
      num >>>= 4; // Shift right by 4 bits
    }
    return result;
  };

  document.getElementById("submit").addEventListener("click", processInput);

  document.getElementById("intervalsInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      processInput();
    }
  });

  function processInput() {
    const input = parseInt(document.getElementById("intervalsInput").value.trim());
    // Call toHex function with the input value
    const result = toHex(input);
    // Display the result in the output field
    document.getElementById("output").innerText = "Output: " + result;
  }

  // Add this script to clear the input field on page load
  document.addEventListener('DOMContentLoaded', function() {
    var intervalsInput = document.getElementById('intervalsInput');
    intervalsInput.value = ''; // Set the input value to an empty string
  });
