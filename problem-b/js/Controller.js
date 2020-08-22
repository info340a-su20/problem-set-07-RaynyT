'use strict'

import * as readline from 'readline-sync/lib/readline-sync.js'; //node_module/readline-sync/lib/readline-sync.js'

import * as model from './Model.js';
import {printTweets} from './View.js';

export function runSearch() {
	//console.log("Here are some tweets by @UW_iSchool", model.getRecentTweets());
	var searchTerm = readline.question("Search tweets, or EXIT to quit:").display;
	if (searchTerm != "EXIT") {
		console.log(searchTerm);
		var searchResult = printTweets(model.searchTweets(searchTerm));
		console.log(searchResult);
	}
}