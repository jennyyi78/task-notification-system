var tough_love = ["Hey, you have #TASK to complete. You have the smell of failure all over you; get rid of it!",
"If you don’t smarten up and get #TASK done, you’d be about as sharp as the edge of a marble.",
"Get #TASK done. Not getting to work will make me believe in reincarnations. No one can be this stupid in one lifetime."
];

// whatever task is imminent given the time/countdown
var exampleTask = "Take a shower";

// return number from 0-last index of tough_love
var randIndex = Math.floor(Math.random() * tough_love.length) 

var motivatingMessage = tough_love[randIndex].replace("#TASK", exampleTask)
alert(motivatingMessage);