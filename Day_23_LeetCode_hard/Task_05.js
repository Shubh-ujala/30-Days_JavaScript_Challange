//Task 5: Solve the "Word Ladder" problem on LeetCode.
function wordLadder(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];

    const queue = [[beginWord]];
    const visited = new Set([beginWord]);

    while (queue.length > 0) {
        const path = queue.shift();
        const word = path[path.length - 1];

        if (word === endWord) return path;

        for (let i = 0; i < word.length; i++) {
            for (let char = 'a'.charCodeAt(0); char <= 'z'.charCodeAt(0); char++) {
                const newWord = word.slice(0, i) + String.fromCharCode(char) + word.slice(i + 1);
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([...path, newWord]);
                }
            }
        }
    }

    return [];
}


function logWordLadder(beginWord, endWord, wordList) {
    const result = wordLadder(beginWord, endWord, wordList);
    console.log(`Start Word: ${beginWord}`);
    console.log(`End Word: ${endWord}`);
    console.log(`Word List: [${wordList}]`);
    console.log(`Transformation Path: [${result.join(' -> ')}]`);
}

// Test case 1
const beginWord1 = "hit";
const endWord1 = "cog";
const wordList1 = ["hot", "dot", "dog", "lot", "log", "cog"];
logWordLadder(beginWord1, endWord1, wordList1);