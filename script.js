"use strict";

// Task: Create a webpage that displays the posts from the AWW Subreddit.

// Build Specifications
// Use JavaScript to request data from the https://www.reddit.com/r/aww/.json API.
// Display the results on the page.
// At a minimum, include a title, an image and a working link for each post. (Easiest is to use the thumbnail for the image, but there are other images in the JSON response.)
// Make it look good with some CSS.

// Extended Challenges
// Only show the first ten results.
// Provide an input and button where the user can enter the name of a subreddit to display instead of always aww.

// Tests
// Displays multiple aww results, each including at least the title.
// Each post includes an image (if it has one).
// Each post includes a link to the post on the reddit website.
// At least 20 lines of CSS applied to spruce up the page.


var ourData = fetch("https://www.reddit.com/r/aww/.json")
.then((res) => res.json())
.then((posts) => {
    console.log("this is it", posts.data.children.length);
    for (let i = 0; i < posts.data.children.length; i++) {
        console.log("hey");
        {
            let div = document.createElement("div");
            div.id="postContainer";
            document.body.append(div);
            // var myDiv = document.getElementById("postContainer");
            var myDiv = div;
            let title = document.createElement("h1");
            let image = document.createElement("img");
            let link = document.createElement("a");
            title.innerText = posts.data.children[i].data.title;
            image.src = posts.data.children[i].data.thumbnail;
            link.href = posts.data.children[i].data.url;
            link.innerText = posts.data.children[i].data.url;
            // document.body.append(title);
            // document.body.append(image);
            // document.body.append(link);
            myDiv.append(title);
            myDiv.append(image);
            myDiv.append(link);
            console.log(posts);
          }
      }
});

// for (let posts=0; posts<=ourData.length; posts++) {
    //     title.innerText = posts.data.children[i].data.title;
    //     image.src = posts.data.children[i].data.thumbnail;
//     link.href = posts.data.children[i].data.url;
//     link.innerText = "https://discord.gg/UXfd5Pn";
//     console.log(posts);
// }

// for (let posts=0; posts<=ourData.length; posts++){
//     console.log(posts);

// }


