const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: 'R1V5FOuuWLBjf0Pm5dGMFyqOr',
    consumer_secret: 'dmka4YX4B8izJvmCkWglKdoRzFJJrlPG0kUhH4r1OKoIzsAa3t',
    access_token_key: '1145002727686230023-inbPlHNExYcpfpLqvd4ruVhytUSNJh',
    access_token_secret: 'NwHuLT48nZ8z0S0gcmNXvN3BfFWmLU5xk9sqZI19aX1m6'
});

exports.getSearchData = async (req, res) => {
    var data = 'data is empty';
    var key_word = req.params.key;
    client.get('search/tweets', { q: 'Measles' }, function (twitterErr, tweets, twitterRes) {
        if (twitterErr) {
            data = twitterErr;
            return res.status(400).send('Sorry, can\'t find tweets with this keywords');
        }
        data = {
            tweets: tweets
        };
        res.json({
            status: 'success',
            result: data
        })
    })
}