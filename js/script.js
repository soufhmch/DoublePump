// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Faq
function toggleAnswer(question) {
  var answer = question.querySelector('.answer');
  if (answer.style.display === "none") {
      answer.style.display = "block";
  } else {
      answer.style.display = "none";
  }
}


//Avatar
var selectedCharacter;

function openModal(name, series, description) {
    selectedCharacter = { name: name, series: series, description: description };
    document.getElementById('modal-title').innerText = name + ' - ' + series;
    document.getElementById('modal-image').src = 'https://via.placeholder.com/150'; // Placeholder image, replace with actual image URL
    document.getElementById('modal-description').innerText = description;
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function setActiveAvatar() {
    // Implement functionality to set the selected character as the active avatar
    console.log('Setting', selectedCharacter.name, 'as active avatar...');
}

function addToFavorites() {
    // Implement functionality to add the selected character to favorites
    console.log('Adding', selectedCharacter.name, 'to favorites...');
}

function addToBlacklist() {
    // Implement functionality to add the selected character to blacklist
    console.log('Adding', selectedCharacter.name, 'to blacklist...');
}