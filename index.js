
var posts = [
    { title: "post1", body: "bla bla111" },
    { title: "post2", body: "bla bla222" }
];

function createpost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: "post3", body: "bla bla333" });
            let error = false;
            if(!error) {
                resolve();
            }else{
                reject("error messege");
            }

        }, 2000);
    })


}

function showposts(){
    document.getElementById("posts").innerHTML = "";
    posts.forEach(p => document.getElementById("posts").innerHTML += `<li>${p.title}</li>`); 
}


async function init() {
    await createpost();
    showposts();
}