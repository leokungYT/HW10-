const postinfo = document.createElementById("post-info");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        data.Foreach(post => {
            const postElement = document.createElement("p");
            
        })
    })