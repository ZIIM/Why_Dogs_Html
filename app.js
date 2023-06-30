function dogoPeople() {
    let likesDogs = confirm("Do you like Dogs?");
    return likesDogs;
}
  
function forDogoPeople() {
    const defaultAnswer = "";
  
    let response = prompt('What is your favorite dog breed?', defaultAnswer);
  
    while (response.length == 0) {
      response = prompt('Enter for your favorite dog breed. Please and Thank you.', defaultAnswer);
    }
  
    document.write('You like dogs, and your favorite dog breed is ' + response + '.');
  
}



