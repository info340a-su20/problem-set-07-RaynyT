'use strict';
// 1.
import {default as allTweets} from './uw_ischool_tweets.js';
var simpleTweets = [];
allTweets.map((tweet) => {
	let dict = {};
	dict["text"] = tweet["text"];
	dict["timestamp"] = Date.parse(tweet["created_at"]);
	simpleTweets.push(dict);
});

export function getRecentTweets() {
	var datesSort = simpleTweets.sort((tweet1, tweet2) => {
		if (tweet1.timestamp - tweet2.timestamp > 0) {
			return -1;
		} else if (tweet1.timestamp - tweet2.timestamp < 0) {
			return 1;
		} else {
			return 0;
		}
	});
	return datesSort.slice(0,5);
}

export function searchTweets(searchTerm) {
	var r = [];
	simpleTweets.filter(dict => {
		if (dict.text.toLowerCase().includes(searchTerm)) {
			r.push(dict);
		}
	});
	return r;
}