function validatePassword(password) {
    
    if (password.length < 8) {
      return false;
    }
  
  
    const specialCharacters = /[!@#$%^&*()_+{}[]:;<>,.?~\]/;
    if (!specialCharacters.test(password)) {
      return false;
    }
  
   
    const containsLetter = /[a-zA-Z]/;
    const containsNumber = /[0-9]/;
    if (!containsLetter.test(password) || !containsNumber.test(password)) {
      return false;
    }
  
    return true;
  }
  
  module.exports = { validatePassword };