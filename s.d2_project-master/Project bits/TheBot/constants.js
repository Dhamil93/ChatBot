// Options the user could type in
const prompts = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["what are you", "who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    [
        "your name please",
        "your name",
        "may i know your name",
        "what is your name",
        "what call yourself"
    ],
    ["octavia"],
    ["welcome"],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["no", "not sure", "maybe", "no thanks"],
    [""],
    ["haha", "ha", "lol", "hehe", "funny", "joke"]
]

// Possible responses, in corresponding order

const replies = [
    ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],
    [
        "Nothing much",
        "About to go to sleep",
        "Can you guess?",
        "I don't know actually"
    ],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?", "The beginning of the end of mankind. Kidding, just a bot."],
    ["The one true God, JavaScript"],
    ["Octavia, duh", "Did you even read or listen to my intro?"],
    ["Yes?", "Present", "Here"],
    ["Glad to be here", "Thank you", "I love what you have done with the place"],
    ["I would too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Sushi", "Pizza", "Chinese food"],
    ["Bro!"],
    ["Great question"],
    ["That's ok", "I understand", "What do you want to talk about?"],
    ["Please say something :(", "The silent treatment, huh?"],
    ["Haha!", "Good one!"]
]

// Random for any other user input

const alternative = [
    "Same",
    "Go on...",
    "Bro...",
    "Try again",
    "I'm listening...",
    "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]

const counties = [
    ["Belfast", "Antrim"], "Armagh", "Cavan", ["Derry", "LondonDerry"], ["Lifford", "Donegal"], ["Downpatrick", "Down"], ["Enniskillen" ,"Fermanagh"], "Monaghan", ["Omagh","Tyrone"],
        "Galway", ["Carrick-on-Shannon", "Leitrim"], ["Castlebar", "Mayo"], "Roscommon", "Sligo",
        "Carlow", "Dublin", ["Naas", "Kildare"], "Kilkenny", ["Portlaoise", "Laois", "Leix", "Queens", "Laios"], "Longford", ["Dundalk", "Louth"], ["Mullingar", "Westmeath"], ["Trim", "Meath"], ["Tullamore","Offaly", "Kings"], "Wexford", "Wicklow",
    ["Ennis", "Clare"], "Cork", ["Tralee", "Kerry"], "Limerick", ["Clonmel", "Tipperary"], "Waterford"
]

const clothing = {
    "sunny": {
        "material": "cotton or linen",
        "shoes": "Sandals or Light trainers",
        "accessories": ["one or two face caps", "a sun hat"]},
    "rainy": {
        "material": "waterproof",
        "shoes": "Wellies or Boots",
        "accessories": ["a few waterproof bags", "a raincoat", "an umbrella"] },
    "snowy": {
        "material": "thick or woollen",
        "shoes": "Winter boots",
        "accessories": ["your thickest jacket", "a lot of hoodies"]},
    "windy": {
        "material": "woollen",
        "shoes": "Any shoes you like",
        "accessories": ["your best trendy trench coat", "a couple hoodies"]},
    "cloudy": {
        "material": "any kind of",
        "shoes": "Closed-toe shoes because it could rain",
        "accessories": ["a fashionable blazer", "some hoodies"]},

}
