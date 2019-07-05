const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: 'R1V5FOuuWLBjf0Pm5dGMFyqOr',
    consumer_secret: 'dmka4YX4B8izJvmCkWglKdoRzFJJrlPG0kUhH4r1OKoIzsAa3t',
    access_token_key: '1145002727686230023-inbPlHNExYcpfpLqvd4ruVhytUSNJh',
    access_token_secret: 'NwHuLT48nZ8z0S0gcmNXvN3BfFWmLU5xk9sqZI19aX1m6'
});

exports.getSearchData = async (req, res) => {
    res.json({
        status: 'success',
        result: 'getSearchData'
    })
    // client.get('search/tweets', { q: 'node.js' }, function (err, tweets, res) {
    //     console.log('Here comes tweets', tweets);
    // })
}

// exports.getSearchData = async (req, res) => {
//     try {
//         var data='';
//         client.get('search/tweets', { q: 'node.js' }, function(err, tweets, res){
//             // console.log('Here comes tweets', tweets);
//             data = tweets;
//         })

//         res.json({
//             status: 'success',
//             result: data
//         })
//     } catch (err) {
//         console.log('getData error: ', err);
//         res.json({
//             status: 'error',
//             error: err
//         })
//     }
// }