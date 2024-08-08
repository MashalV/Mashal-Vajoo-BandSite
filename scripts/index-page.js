const commentList = []; 
const commentContainer = document.getElementById("comment-list-container");
const commentForm = document.getElementById("comment-form");

const api = new BandSiteAPI("a265f27c-0b7a-40cc-8749-eb2b4ced6032"); 

async function asyncCall (){

    try {
      const data = await api.getComments();
      data.forEach (data => {
        const commentInfo = {
          name: data.name,
          comment: data.comment,
          timestamp: data.timestamp,
        };
        commentList.push(commentInfo);
      });
      renderComments();
      
    } catch (error) {
      console.error(error);
    }

  };

asyncCall (); 


function displayComment(data) {
    const commentEl = createDiv("comment");
    

    const avatarEl = createDiv("comment__avatar");
    commentEl.append(avatarEl);

    const textEl = createDiv("comment__text");
    commentEl.append(textEl);

    const boxEl = createDiv("comment__text--box");
    textEl.append(boxEl);

    const nameEl = createDiv("comment__text--box--name", data.name);

    boxEl.append(nameEl);

    const dateEl = createDiv("comment__text--box--date", new Date (data.timestamp).toLocaleDateString());

    boxEl.append(dateEl);


    const detailsEl = createDiv("comment__text--details", data.comment);

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
    commentContainer.innerHTML = '';
    commentList.sort((a,b) => new Date(b.Date)- new Date (a.Date));
    commentList.forEach(displayComment);
}


commentForm.addEventListener ("submit", async (event) => {
  event.preventDefault();

    const name = event.target.name.value;
    const comment = event.target.comment.value;
    const newComment = { name, comment };
    

    try {
      const response = await api.postComments(newComment);
      const createdComment = { 
        name: response.name,
        comment: response.comment,
        timestamp: new Date().toLocaleDateString()
      };
      commentList.unshift(createdComment);
      renderComments();

    }catch (error) {
      console.error(error);
    }


    commentForm.reset();
});


