function getUser(callback) {
    setTimeout(() => {
        console.log("User fetched");

        callback({
            id: 1,
            name: "Ram"
        });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log("Posts fetched");

        callback(["post1", "post2"]);
    }, 1000);
}

function getComments(post, callback) {
    setTimeout(() => {
        console.log("Comments fetched");

        callback(["nice", "good"]);
    }, 1000);
}

// Callback Hell

getUser(function(user) {

    getPosts(user.id, function(posts) {

        getComments(posts[0], function(comments) {

            console.log("User:", user);
            console.log("Posts:", posts);
            console.log("Comments:", comments);

        });

    });

});