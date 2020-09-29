
// Assignment Code
var generateBtn = document.querySelector("#generate");


      
// Write password to the #password input
function writePassword() 
{
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{
  var complexity = '';

  var spec = confirm('Do you want special characters in your password?'); 

  var cap = confirm('Do you want capital letters in your password?')

  var small = confirm ('Do you want small letters in your password')

  var num =  confirm('Do you want numbers in your password')

  var passLenght = parseInt(prompt('Please enter length of password'))
  
  


  if(passLenght<8 || passLenght> 128 || passLenght == '')
  {
    return('Password must be 8 to 128 characters in length and it cannot be blank')
  }


  // creating character set for different types of characters

  var charset_spec  =" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var charset_cap   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var charset_small = "abcdefghijklmnopqrstuvwxyz";
  var charset_num   = "1234567890";

  if(spec)
  {
    complexity= complexity+ charset_spec
    // console.log(complexity)
  }
  if(cap)
  {
    complexity = complexity+ charset_cap;
    // console.log(complexity)

  }
  if(small)
  {
    complexity = complexity+ charset_small
    // console.log(complexity)
  }
  if(num)
  {
    complexity = complexity+ charset_num
    // console.log(complexity)
  }

  if(!spec && !cap && !small && !num )
  {
    return('Password cannot be blank')

  }
  else if(!cap && !small)
  {
    return('You must select atleast one type of characters')

  }
  else if(!spec && !num)
  {
    return('You must select either number or special characters')

  }
  // console.log(complexity);
  final_result='';
  for( var i=0;i<passLenght;i++)
  {
    var complexity_idx=Math.floor(Math.random()*(complexity.length));
    var final_result=final_result +complexity[complexity_idx]  
  }

  return(final_result)

  




}
