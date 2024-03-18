/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    let temp = Math.abs(num);
let rev_a = []
while (temp > 0) {
    rev_a.push(parseInt(temp % 16))
    temp = parseInt(temp / 16);
}
let a = [];
for (let i = rev_a.length; i <= 7; i++) {
    rev_a.push(0)
}
for (let i = rev_a.length - 1; i >= 0; i--) {
    a.push(rev_a[i])
}
if (num < 0) {
    for (let i = 0; i <= 7; i++) {
        a[i] = 15 - a[i]
    }
    let c = 1;
    let i = 7;
    while ( i >= 0) {
        if (a[i] < 15) {
            a[i] = a[i] + c;
            break;
        }
        else {
            temp = a[i];
            a[i] = (a[i] + c) % 16;
            c = parseInt((temp + c) / 16);
            i = i - 1;
        }
    }
}
i = 0;
while (i < 7 && a[i] == 0) {
    i = i + 1;
}
let str = "";
for (let j = i; j <= 7; j++) {
    if (a[j] <= 9) {
        str = str + a[j];
    }
   
    else if (a[j] == 10) {
        str = str + "a";
    }
    else if (a[j] == 11) {
        str = str + "b"
    }
    else if (a[j] == 12) {
        str = str + "c"
    }
    else if (a[j] == 13) {
        str = str + "d"
    }
    else if (a[j] == 14) {
        str = str + "e"
    }
    else if (a[j] == 15) {
        str = str + "f"
    }
}
if(num==0)
{
    return "0"
}
return(str);

    
};


document.getElementById("submit").addEventListener("click", function() {
    // Retrieve input value
    const input = parseInt(document.getElementById("intervalsInput").value.trim());
    // Call toHex function with the input value
    const result = toHex(input);
    // Display the result in the output field
    document.getElementById("output").innerText = "Output: " + result;
  });

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

// Add this script to clear the input field on page load
document.addEventListener('DOMContentLoaded', function() {
    var intervalsInput = document.getElementById('intervalsInput');
    intervalsInput.value = ''; // Set the input value to an empty string
});