//Section 2
const userAction = async (simpleLink) => {
    const response = await fetch('https://www.youtube.com/oembed?url=' + simpleLink + '&format=json');
    const myJson = await response.json();
    return myJson;
}

//Section 1
function searchFromHistory(title, embedLink){
    document.getElementById("video-view").setAttribute("src", embedLink);
    document.getElementById("like-button").setAttribute("onclick", "like('"+title+"')");
}

//Section 3
function like(title){
    if (title){
        let ul = document.getElementById("bookmarks");
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.appendChild(document.createTextNode(title));
        button.setAttribute("class", "btn btn-outline-danger my-2 my-sm-0 info-button");
        li.appendChild(button);
        ul.appendChild(li);
    }
}

//Section 2
async function search (){
    let simpleLink = document.querySelector("#search-text").value;
    document.querySelector("#search-text").value = "";
    //Get the embed link to de video
    let myJson = await userAction(simpleLink);
    let iframe = myJson.html;
    let title = myJson.title;
    let embedLink = iframe.slice(38,94);
    document.getElementById("video-view").setAttribute("src", embedLink);
    //Set the functionality of the like button
    document.getElementById("like-button").setAttribute("onclick", "like('"+title+"')");
    //Add the video to the history
    let ul = document.getElementById("history");
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.appendChild(document.createTextNode(title));
    button.setAttribute("onclick", "searchFromHistory('"+title+"','"+embedLink+"')");
    button.setAttribute("class", "btn btn-outline-success my-2 my-sm-0 info-button");
    li.appendChild(button);
    ul.appendChild(li);
}


