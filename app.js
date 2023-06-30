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
  
    document.write('You like dogs and your favorite dog breed is ' + response + '.');
  
}


let imageIndex = 1; 

function cycleImages() {
    let imageElement = document.getElementById("displayImage");
    let captionElement = document.getElementById("caption");

    if (imageIndex === 1) {
    imageElement.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HdlpJ3Ex1OvjP5U3OpcqlgHaLI%26pid%3DApi&f=1&ipt=e297afee6d6cba4352e383412a55ff00860990728c6ff7515bc133d86da416c7&ipo=images";
    captionElement.textContent = "Dogs can cook steaks";
    imageIndex = 2;
    } else {
    imageElement.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Pxy4XsmuRJ6tWbwut28ZxwHaJP%26pid%3DApi&f=1&ipt=9d5640dcde1ff4c5c95e30f88327d3a9b18f69f9a0dc879a30dfcc1476748f03&ipo=images";
    captionElement.textContent = "Dogs can rescue kittens";
    imageIndex = 1;
    }
}

function insertRating() {
    const dogRating = ['']
    let output = '';
    let n = 0

    while (n === 0) {
        n = prompt('How much do you like dogs on a scale of 1-10:');
    }

    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * dogRating.length) ;
        const randomDog = dogRating[randomIndex];
        output += randomDog;
    }

  document.write(output)
  console.log(output)

}

