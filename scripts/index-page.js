const comments = [
    {Name: 'Victor Pinto', Comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." , Date: "11/02/2023"},
    {Name: 'Christina Cabera', Comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.", Date: "10/28/2023"},
    {Name: 'Isaac Tadesse', Comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.", Date: "10/20/2023"},
]

function createCard(commenter) {
    // <article class="player">
    //     <h3>Jajuan</h3>
    //     <span>Goat</span>
    // </article>

	// create parent container article and adds class='player'
    const cardEl = document.createElement('article');
    cardEl.classList.add('commenter');

	// creates heading with player name
    const heading = document.createElement('span')
    heading.innerText = commenter.commenterName;

	// creates span with player nickname
    const commentEl = document.createElement('p');
    commentEl.innerText = commenter.comment;

	// places heading in article container
    cardEl.appendChild(heading);

	// places nicknameEl in article container
    cardEl.appendChild(commentEl);

	// returns 1 individual card at a time
    return cardEl
}

function renderCommenters() {
	// retrieve #my-players element
    const myCommentersEl = document.querySelector('#my-commenters')

	// clear current html in myPlayerEl
    myCommentersEl.innerHTML = ""

	// use players array and create a player card for each player
    commenters.forEach((commenter) => {
		// player = {playerName: 'Michael Jordan', nickname: "His Airness"}
        const card = createCommenterCard(Commenter);
        myCommentersEl.appendChild(card)
    })
}

function handleFormSubmit(event) {
	// How do we prevent the default behavior of a form
	event.preventDefault();
	// Use log to check values
	console.log(event.target.commenterName.value);
	console.log(event.target.comment.value);


	const cardData = {
		playerName: event.target.commenterName.value,
		nickname: event.target.comment.value
	}

	// updated our players array 
	commenter.push(cardData);
	console.log(commenter);
	renderCommenters();

	// Lets use the event object to see what are value are so far ie: event.target.fullName.value
	// Organized data into a new object called cardData 

	// push the cardData object onto the existing players array

	// Basic Validation 
	// Add a checkbox to your html 
	// use an if statement to see if the user has agreed to our terms and conditions
	// Validate PW if time

}


const formEl = document.getElementById('commenter-form');

formEl.addEventListener('submit', handleFormSubmit);

renderCommenters();