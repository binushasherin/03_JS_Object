var player1;

player1 = {
	  name: "Max",
	  score: 100
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 10;

console.log(player1.name + " has scored " + player1.score);

player2 = {
	name: "Alice",
	score: 200
};
let totalScore = player1.score + player2.score;

console.log(`${player1.name} and ${player2.name} have a combined score of ${totalScore}.`);

