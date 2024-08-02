const comments = [
  {
    Name: "Victor Pinto",
    Comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    Date: "11/02/2023",
  },
  {
    Name: "Christina Cabera",
    Comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    Date: "10/28/2023",
  },
  {
    Name: "Isaac Tadesse",
    Comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    Date: "10/20/2023",
  },
];

const commentContainer = document.getElementById("comment-list-container");
const commentForm = document.getElementById("comment-form");



function displayComment(comment) {
    const commentEl = createDiv("comment");
    

    const avatarEl = createDiv("comment__avatar");
    commentEl.append(avatarEl);

    const textEl = createDiv("comment__text");
    commentEl.append(textEl);

    const boxEl = createDiv("comment__text--box");
    textEl.append(boxEl);

    const nameEl = createDiv("comment__text--box--name", comment.Name);

    boxEl.append(nameEl);

    const dateEl = createDiv("comment__text--box--date", comment.Date);

    boxEl.append(dateEl);


    const detailsEl = createDiv("comment__text--details", comment.Comment);

    textEl.append(detailsEl);

    

    commentContainer.append(commentEl);
}

function createDiv(className, text = "") {
    const div = document.createElement("div");
    div.className = className;
    div.innerText = text;
    return div;
    }


function renderComments() { 
    commentContainer.replaceChildren();
    comments.sort((a,b) => new Date(b.Date)- new Date (a.Date));
    comments.forEach(displayComment);
}

renderComments(); 

commentForm.addEventListener ("submit", (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const comment = e.target.comment.value;
    const date = new Date().toLocaleDateString();
    // console.log(date);
    // console.log("Name", name);
    // console.log("Comment", comment);
    const newComment = { Name: name, Comment: comment, Date: date }
    comments.unshift(newComment);


    renderComments(); 
    commentForm.reset();
});


