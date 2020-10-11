// Assignment code here
// add global variables
var lowList = "abcdefghijklmnopqrstuvwxyz";
var lowExists = false;
var upList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upExists = false;
var numList = "0123456789";
var numExists = false;
var specList = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var specExists = false;

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
        list += lowList;
    }
    // add uowercase
    if (passwordCriteria.upper)
    {
        list += upList;
    }
    // add numbers
    if (passwordCriteria.numeric)
    {
        list += numList;
    }
    // add special characers
    if (passwordCriteria.special)
    {
        list += specList;
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
    
    do
    {
        // reset password variable
        text = "";  
        lowExists = false;
        upExists = false;
        numExists = false;
        specExists = false;

        // loop through a character addition process the number of times the user chose for password length
        for (var i = 0; i < passwordCriteria.length; i++)
        {
        // on each iteration, choose a character randomly and add it to the string  
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        console.log(text);


        /////// Quality Check ///////////
        // determine if a lower case character exists
        for (i = 0; i < lowList.length; i++)
        {
            if (text.includes(lowList[i])) { lowExists = true;}
        }

        // determine if a upper case character exists
        for (i = 0; i < upList.length; i++)
        {
            if (text.includes(upList[i])) { upExists = true;}
        }

        // determine if a numerical character exists
        for (i = 0; i < numList.length; i++)
        {
            if (text.includes(numList[i])) { numExists = true;}
        }

        // determine if a special character exists
        for (i = 0; i < specList.length; i++)
        {
            if (text.includes(specList[i])) { specExists = true;}
        }

        console.log("that text includes a lower case character is " + lowExists);
        console.log("that text includes an upper case character is " + upExists);
        console.log("that text includes a numerical character is " + numExists);
        console.log("that text includes a special character is " + specExists);
        
        //text += "a";
        //lowExists = false;
        if (lowExists === false) {console.log("lowExists is false.")};
        debugger;
    }

    while 
    (
        (text.length != passwordCriteria.length) ||

        
        
        
        ((passwordCriteria.lower === true) && (lowExists === false)) ||
        ((passwordCriteria.upper === true) && (upExists === false)) ||
        ((passwordCriteria.numeric === true) && (numExists === false)) ||
        ((passwordCriteria.special === true) && (specExists === false)) 
        
        
    );

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

