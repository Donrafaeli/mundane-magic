const messages = [
    'Seeing the universe in a ripe plum',
    'Falling on your back while harvesting horseradish - leaves in hand',
    'Chasing geese and watching their wings flap defensively',
    "Yesterday's popcorn bowl filled with soapy water and utensils",
    'Finding a tiny nondescript machine screw in your fuzzy carpet',
    'Being immersed in cold water',
    'The feel of a smooth, balanced garage door',
    'A waft of basement smell while walking down the street',
    'An old building entrance at night, its cracked frosted glass obscuring a silhouette',
    'The smell of farts and ass when opening your pantry - courtesy of a big tub of pickled cabbage',
    'The creaking of Janson when you reference it for some fact about romanticism',
    'Baking a pie for yourself - doing it just right',
    'the slow and meticulous movements of Saturday morning knife maintenance',
    'An inexorable defeat of a last chinup',
    'Smiling by yourself at a seemingly mundane detail of a wall',
    'Touching cork and pressing to feel the feedback',
    "Caressing wood like it's flesh",
    'The last throb of a particularily intense ejaculation',
    'A touch on the shoulder conveying nothing other than "we are humans"',
    'Running your fingers through fine flour',
    'Kneading a highly hidrated dough and feeling it is just as alive as you',
    'Running backwards as you tease your dog to chase you',
    'Almost tumbling down a hill on a whim of treading the untrodden path',
    'Squeezing a friend in a vice grip hug',
    'Admiring the way that light softly seeps through a window',
    'Jamming to the polyrhythm of two crosswalk push buttons',
    'A long exhale after an even longer day',
    'increasingly rare full body goosebumps when a new song unfolds to match a secret pattern',
    'Having homebrewed rakija with a good friend on a Wednesday',
    'Driving with a good friend for the sake of it, drinking beers and hiding them when passing cops',
    'A stranger that tells you something nice they did not have to',
    'The hiss a snuffed candle makes when pinching it with wet fingers',
    'Coming home and seeing a loved one enveloped in a book',
    'The way a hot shower feels like a long slow exhale',
    'the way a cold shower feels like needles and decisiveness',
    'When someone oversteps social norms to say that they enjoy your company',
    'Watching a butterfly intently and forgetting the whole universe for a minute and a half',
    'Coming into bed and acknowledging the fact that I can sleep in a safe, warm and quiet room',
    'To stay up quietly just a bit longer to listen to the room and enjoy the calm',
    'Smelling your finger after fingering a lover, even when they throw the pillow at you for being a creep',
    'The scent of a woman that breezes by you on a busy morning',
    'Sitting at the fountain, having beers with a friend, talking about passing women',
    'Meeting someone and allowing yourself to be dashed by their presence',
    'Rollerblading into town on a warm evening, looking for empty streets',
    'Rollerblading so far from the city that you start to smell the rural air',
    'Discovering a new corner in my town',
    'The way that the inside of a butternut squash smells like cantaloupes',
    'Driving early in the morning to a foggy field and walking through the thicket',
    'Seeing a high school friend and just picking up where you left off',
    'Taking a walk to think, not to travel',
    'The smell wafting from a ripe quince on a kitchen shelf',
    'dozing off in front of my laptop on a quiet Saturday',
    'Waking up with my lover hugging me with one leg',
    'A quiet, simple morning',
    'The soft crunch of day-old snow',
    'Listening to Bright size life and realizing that Pat has something figured out',
    'Becoming aware of the water',
    'Finding a meticulosly crafted FOSS typeface',
    'Thinking of grandma every time I smell horseradish',
    'Getting dirt under my fingernails from digging in the garden',
    "Picking a rose for myself, sneaking so the neighbors don't see", 
];
const $target = document.querySelector("#target");
const $messages = document.querySelector("#messages");

// button cooldown



// get random message and send it ovet to html element
function newMessage () {
    const randomNumber = Math.floor(Math.random() * (messages.length));
    function randomize(){
    document.getElementById("target").innerHTML = messages[randomNumber];
    }
    randomize();
    
}

