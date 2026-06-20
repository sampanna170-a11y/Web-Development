function getUser() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("User fetched");

            resolve({
                id: 1,
                name: "Ram"
            });
        }, 1000);

    });
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Posts fetched");

            resolve(["post1", "post2"]);
        }, 1000);

    });
}

function getComments(post) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Comments fetched");

            resolve(["nice", "good"]);
        }, 1000);

    });
}

let userData;
let postData;

getUser()
    .then((user) => {
        userData = user;
        return getPosts(user.id);
    })
    .then((posts) => {
        postData = posts;
        return getComments(posts[0]);
    })
    .then((comments) => {
        console.log("User:", userData);
        console.log("Posts:", postData);
        console.log("Comments:", comments);
    })
    .catch((error) => {
        console.log("Error:", error);
    });