var git = require('simple-git') ;

function clone(repo){
    git.clone(repo, ".");
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
