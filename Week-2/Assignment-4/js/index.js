/*
Request 1: Click to Change Text. When user click on "Welcome Message" block, change text to "Have a Good Time!"
*/
const welcomeMessage = document.getElementById('welcomeMessage')
welcomeMessage.addEventListener('click', () => {
  welcomeMessage.innerText = 'Have a Good Time!'
})

/*
Request 2: Click to Show More Content Boxes. 
There are some more content boxes waiting to show. 
When user clicks the Call-to-Action button, show those hidden content boxes.
*/

const button = document.getElementsByClassName('btn')[0]
const hiddenContent = document.getElementsByClassName('content-section2')

function showDisplayContent() {
  for (let i = 0; i < hiddenContent.length; i++) {
    hiddenContent[i].style.display = 'flex'
  }
}

button.addEventListener('click', showDisplayContent)
