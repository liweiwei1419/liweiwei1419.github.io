const index = require('./sidebar/index.js');
const binarySearch = require('./sidebar/binary-search/binary-search.js');
const dynamicProgramming = require('./sidebar/dynamic-programming/dynamic-programming.js');
const choice = require('./sidebar/choice/choice.js');

module.exports = {
	"/choice/": choice,
	"/binary-search/": binarySearch,
	"/dynamic-programming/": dynamicProgramming,
	// "/two-pointers/": twoPointers,
	// "/backtracking/": backtracking,
	// "/quick-sort/": quickSort,

	// 
	// "/breadth-first-search/": breadthFirstSearch,
	// "/hash-table/": hashTable,
	// "/greedy/": greedy,
	// "/heap/": heap,
	"/": index
}