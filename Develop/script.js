// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// global object to contain password criteria
var passwordCriteria = 
{
    length: 0,
    lower: true,
    upper: true,
    numeric: true,
    special: true
}

// Get Password Criteria Function
var getPasswordCriteria = function()
{
    // Get Password Length
    
    while (passwordCriteria.length < 8 || passwordCriteria.length > 128)
    {
      passwordCriteria.length = window.prompt("Enter how many characters for your password.  Must be between 8 and 128 characters.");
    }
    console.log(passwordCriteria.length);
    

    // Include passwordCriteria.lower?
    passwordCriteria.lower = window.confirm("Should the password contain lower case letters?  Press OK for yes and press Cancel for no.");
    console.log(passwordCriteria.lower);

    // Include passwordCriteria.upper?
    passwordCriteria.upper = window.confirm("Should the password contain upper case letters?  Press OK for yes and press Cancel for no.");
    console.log(passwordCriteria.upper);

    // Include Numbers?
    passwordCriteria.numeric = window.confirm("Should the password contain numbers?  Press OK for yes and press Cancel for no.");
    console.log(passwordCriteria.numeric);

    // Include Special Characers?
    passwordCriteria.special = window.confirm("Should the password contain special characters?  Press OK for yes and press Cancel for no.");
    console.log(passwordCriteria.special);
}

// load all possible characters into a string
var loadPasswordCriteria = function()
{
    var list = "";
    // add lowercase
    if (passwordCriteria.lower)
    {
        list += "abcdefghijklmnopqrstuvwxyz";
    }
    // add uowercase
    if (passwordCriteria.upper)
    {
        list += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    // add numbers
    if (passwordCriteria.numeric)
    {
        list += "0123456789";
    }
    // add special characers
    if (passwordCriteria.special)
    {
        list += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }


    console.log(list);
    return list;
}

// Generate Password Function
var generatePassword = function()
{
    // prompt user for password criteria
    getPasswordCriteria();

    // add the types of characters chosen by the user into the pool of chooseable characters
    var text = "";
    var possible = loadPasswordCriteria();
    
    // verify at least 1 of each required character is in the generated password
    // if the password is not the required length
    // or
    // if lower is required and no lower is present 
    // or
    // if upper is required and no upper is present
    // or
    // if numeric is required and no numeric is present
    // or
    // if special is required and no special is present
    // then run the for loop again
    if 
    (
        text.length < passwordCriteria.length ||
        (passwordCriteria.lower = true && !text.includes("abcdefghijklmnopqrstuvwxyz")) ||
        (passwordCriteria.upper = true && !text.includes("ABCDEFGHIJKLMNOPQRSTUVWXYZ")) ||
        (passwordCriteria.numeric = true && !text.includes("0123456789")) ||
        (passwordCriteria.special = true && !text.includes(" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")) ||
    )
    {
        // reset password variable
        text = "";  

        // loop through a character addition process the number of times the user chose for password length
        for (var i = 0; i < passwordCriteria.length; i++)
        {
        // on each iteration, choose a character randomly and add it to the string  
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        console.log(text);
    };

    // once string is complete, return the string as the password
    return text;
}

// Write password to the #password input
function writePassword() 
{
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
