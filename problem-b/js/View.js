'use strict'

export function printTweets(tweets) {
	if (tweets.length == 0) {
		console.log("No tweets found");
	}
	tweets.forEach(tweet => {
		console.log("- \"".concat(tweet.text, "\" (", new Date(tweet.timestamp).toLocaleString("en-US"), ")"));
	});
}