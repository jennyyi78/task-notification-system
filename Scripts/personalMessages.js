var personality = 'John';

function changePersonality(name){
    personality = name;
    alert("personality is now " + name);
}

function getPersonality(){
    return personality;
}

function getTaskMessage(taskName){
    var toughMsgs = [ // Rock
    "Hey, you have #TASK to complete. You have the smell of failure all over you; get rid of it!",
    "If you don’t smarten up and get #TASK done, you’d be about as sharp as the edge of a marble.",
    "Get #TASK done. Not getting to work will make me believe in reincarnations. No one can be this stupid in one lifetime.",
    "Hear that? That’s the sound of how productive you’re being. Go get #TASK done!",
    "It’s not that difficult to do #TASK! It’s not like I asked you to eat apples and poop a salad!",
    "Do #TASK. Don’t thank me. Thank the world that they haven’t hit your unproductive self with truck-kun yet.",
    "Do you know what the speed of light is? It’s the speed you’re not doing #TASK. Now get out of my face and get #TASK done!",
    "I’m calling you ice cream, ‘cause there’s too many flavors of unproductive you’re being. Go get #TASK done already!",
    "I have pimples older and wiser than the you who isn’t getting #TASK done.",
    "Your lack of performance is proving that evolution is a lie. Do #TASK and finally become a human already.",
    "Ok, this is a live exercise in life! I want to see your face in work dirt. Get your mugs into #TASK. Keep your head down and smothered in work!",
    "#TASK. Go! GO! GO!!",
    "#TASK. Move it! MOvE It! MOVE IT!",
    "Better be doing #TASK like you’ve got a purpose in life!",
    "Get your head in #TASK or it’ll get blown off by your incompetence.",
    "On your mark! Get set! #TASK! GO! GO! GO!",
    "#TASK. Get your sorry self moving!",
    "#TASK. Hurry it up!",
    "My dear sweet grandmother can get #TASK done faster than you, lazy dirtbag.",
    "#TASK. Get over it!",
    "I thought you were a functioning human being. You still haven’t done #TASK. Are you trying to embarrass me?",
    "#TASK. Don’t be another disappointment.",
    "Human beings come equipped with the ability to do #TASK. What are you then?",
    "Get done with target #TASK. Or do you want to be the next moving target?",
    "Unbelievable! You can actually read! If you could do #TASK I’d actually consider you a person.",
    "What’s your problem? Get back up and do #TASK!",
    "I’m almost impressed! You are actually paying attention to something! So why aren’t you paying attention to #TASK?",
    "#TASK. You best get your head on straight, lazy lump!",
    "What? Is #TASK hard? Is it a little difficult? Well suck it up and DO IT!"
    ];

    var posMsgs = [ // Cecilia
        "You can also stand with the great! Take that first step by getting #TASK done!",
        "Don’t forget to devote time into loving yourself. Also, don’t forget to devote time into #TASK",
        "14.	Love needs a target to bloom. Your target is #TASK. Let your work bloom. "
    ];

    var basicMsgs = [ // John
        "Reminder: you have yet to do #TASK",
        "Reminder: #TASK",
        "You have yet to finish #TASK"
    ]

    var scaryMsgs = [ // Silas
        "You didn’t do #TASK yet? I must break you.",
        "#TASK should be going swimmingly, right? Else you’d be swimming with the fishes",
        "Why haven’t you done #TASK? This isn’t the first time I’ve had to cover up the murder of a lazy client."
    ]

    var personality = getPersonality();
    var randomIndex;
    var personalizedMsg;
    switch(personality){
        case 'Silas':            
            randomIndex = Math.floor(Math.random() * scaryMsgs.length); 
            personalizedMsg = scaryMsgs[randomIndex].replace("#TASK", taskName);
        break;
        case 'Rock':
            randomIndex = Math.floor(Math.random() * toughMsgs.length);
            personalizedMsg = toughMsgs[randomIndex].replace("#TASK", taskName);
        break;
        case 'Cecilia':
            randomIndex = Math.floor(Math.random() * posMsgs.length);
            personalizedMsg = posMsgs[randomIndex].replace("#TASK", taskName);
        break;
        default: // John            
            randomIndex = Math.floor(Math.random() * basicMsgs.length);
            personalizedMsg = basicMsgs[randomIndex].replace("#TASK", taskName);       
    }   
       
    return personalizedMsg;
}