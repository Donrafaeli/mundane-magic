const messages = [
    'Seeing the universe in a ripe plum',
    'Falling on my back while harvesting horseradish - leaves in hand',
    'Chasing geese and watching their wings flap defensively',
    "Yesterday's popcorn bowl filled with soapy water and utensils",
    'Finding a tiny nondescript machine screw in my fuzzy carpet',
    'The feel of a smooth, balanced garage door',
    'A waft of basement smell while walking down the street',
    'An old building entrance at night, its cracked frosted glass obscuring a silhouette',
    'The faint smell of farts in the pantry - courtesy of a big tub of pickled cabbage',
    'The creaking of Janson when I reference it for some fact about romanticism',
    'Baking a pie for myself - doing it just right',
    'The slow and meticulous movements of Saturday morning knife maintenance',
    'The inexorable defeat of a last chinup',
    'Smiling by myself at a seemingly mundane detail of a wall',
    'Touching cork and pressing to feel the feedback',
    "Caressing wood like it's skin",
    'The last throb of a particularily intense ejaculation',
    'A touch on the shoulder conveying nothing other than "we are humans"',
    'Running my fingers through fine flour',
    'Kneading a highly hidrated dough and feeling it is just as alive as me',
    'Running backwards as I tease my dog to chase me',
    'Running down a hill, racing my feet',
    'Squeezing a friend in a vice grip hug',
    'Admiring the way that light softly seeps through a window',
    'Jamming to the polyrhythm of two crosswalk push buttons',
    'A long exhale after an even longer day',
    'Increasingly rare full body goosebumps when a new song unfolds to match a secret patter',
    'Having homebrewed rakija with a good friend on a Wednesday',
    'Driving around with a good friend, drinking beers and hiding them from passing cops',
    "A stranger telling me something nice they didn't have to",
    "The hiss a snuffed candle makes when pinched with wet fingers",
    'Coming home and seeing a loved one enveloped in a book',
    'The way a hot shower feels like a long slow exhale',
    'The way a cold shower feels like needles and decisiveness',
    'When someone oversteps social norms to say they enjoy my company',
    'Watching a butterfly intently and forgetting the whole universe for a minute and a half',
    'Coming into bed and acknowledging the safety, warmth and quiet',
    'Staying up quietly just a bit longer to listen to the room breathe',
    'Smelling my finger after fingering a lover, even when they throw pillows at me for being a creep',
    'The scent of a lady breezing by on a busy morning',
    'Sitting at the fountain, having beers with a friend, talking about passing women',
    'Meeting someone and allowing myself to be struck by their presence',
    'Rollerblading into town on a warm evening, looking for empty streets',
    'Rollerblading untill I start to smell the rural air',
    'The way that the inside of a butternut squash smells like cantaloupes',
    'Driving early in the morning to a foggy field and walking through the thicket',
    'Seeing a high school friend and just picking up where we left off',
    'Taking a walk to think, not to travel',
    'The smell wafting from a ripe quince on a kitchen shelf',
    'Dozing off in front of my laptop on a quiet Saturday',
    'Waking up with my lover hugging me with one leg',
    'The soft crunch of fresh snow',
    'Listening to Bright size life and realizing Pat has figured it out',
    'Becoming aware of the water',
    'Finding a meticulously crafted FOSS typeface',
    'Remembering grandma every time I smell horseradish',
    'Getting dirty fingernails from digging in the garden',
    "Picking a rose for myself, sneaking so the neighbors don't see",
    "The way the neighbour's facade glistens in the glow of streetlamps",
    'A cat licking my finger, extending a sandpaper greeting',
    'Thinking of a friend that is unrelentingly good and sending them love through the ether',
    'A dying fire - loud crackles of a dry branch',
    'Taking my shoes off and feeling the warmth of the concrete',
    'A first drink of water after a long swim in the sea',
    "Passing a friend's house and seeing a lit window",
    'Driving at night while the other person sleeps - glancing their tiny tics',
    'The lively smells of a Saturday morning market - fish, cabbage and chicken feet',
    'The hypersaturated beak of a blackbird',
    'Nodding to crows - acting like we have an understanding',
    "Catching a glimpse of another person's secret world",    
    'Offering a finger to a bug and it climbing along for the ride',
    'A tiny bean with a sharpie face, found on a busy corridor',
    'Licking fingers stickied by honey'
    ];
const $target = document.getElementById('target');
const $messages = document.getElementById("messages");
const $btn = document.getElementById("btn");
var i = 0;

// button cooldown


// shuffle the messages array
function shuffle(messages) {
    var currentIndex = messages.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = messages[currentIndex];
      messages[currentIndex] = messages[randomIndex];
      messages[randomIndex] = temporaryValue;
    }
  
    return messages;
  }

shuffle(messages);
window.onload = function(){document.getElementById('target').textContent = nextItem()};

// step through array one by one
function nextItem() {
    i = i + 1; // increase i by one
    i = i % messages.length; // if we've gone too high, start from `0` again
    return messages[i]; // give us back the item of where we are now
}

// Fade out text, replace it with next item in shuffled text array, then fade it in
function fade() {
  document.getElementById('target').classList.add('fade-text');
  setTimeout(function(){document.getElementById('target').textContent = nextItem();}, 250);
  setTimeout(function(){document.getElementById('target').classList.remove('fade-text');}, 300);  
}

//show modal
function modalShow(){
  document.getElementById('modal-id').classList.add='visible', 'opacity-100';
}