var git = require('simple-git')(".");

function clone(repo){
    return git.clone(repo, "./output/ngnode");
}

function add(){
    git.add(".");
}

function commit(message){
    git.commit(message, function(msg){
        console.log(msg);
    });
}

function push(){
    git.push('origin', 'master', function (msg) {
        console.log(msg);
    });
}

module.exports = {
    clone: clone,
    add: add,
    commit: commit,
    push: push
};
