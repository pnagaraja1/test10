var github = require('octonode');
var simplegit = require('simple-git')();
var client = github.client({
    username: 'musa4u',
    password: ''
});

client.get('/user', {}, function (err, status, body, headers) {
    console.log(body); //json object

// Then we instantiate a client with or without a token (as show in a later section)

    var ghme = client.me();

    ghme.repo({
        "name": "test4",
        "description": "This is your first repo",
    }, function (err,b,h) {


        console.log("repo is created");
        console.log(err);
        console.log(b);

        // starting a new repo
        simplegit
            .init()
            .add('./*')
            .commit("first commit!")
            .addRemote('origin', 'git@github.com:musa4u/test3.git')
            .push('origin', 'master');

        console.log("Done Done;;;;;;;")

    }); //repo


});


