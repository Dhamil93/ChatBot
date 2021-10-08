document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
    });
});

function output(input) {
    let product;

    // Regex remove non word/space chars
    // Trim trailing whitespce
    // Remove digits - not sure if this is best
    // But solves problem of entering something like 'hi1'

    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
        .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .replace(/ octavia/g, "")
        .replace(/r u/g, "are you");

    if (compare(prompts, replies, text)) {
        // Search for exact match in `prompts`
        product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
        product = "You're welcome!"
    } else if (text.match(/(corona|covid|virus)/gi)) {
        // If no match, check if message contains `coronavirus`
        product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else if (text.match(/(weather)/gi)) {
        // if no match, check if messages is asking about weather
        if (find_location(text) === "nomatch") {
            text = text.replace(/ /g, "+");
            product = "Sorry I could not match the location. Would you like to ask <a href=https://google.com?q=" + text + " target=_blank>Google</a>?"
        } else {
            let location = find_location(text);
            product = "Here's what I found for weather in " + location[1];
            getData(location[0], "");
        }
    } else {
        // If all else fails: random alternative
        product = alternative[Math.floor(Math.random() * alternative.length)];
    }

    // Update DOM
    addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
        for (let y = 0; y < promptsArray[x].length; y++) {
            if (promptsArray[x][y] === string) {
                let replies = repliesArray[x];
                reply = replies[Math.floor(Math.random() * replies.length)];
                replyFound = true;
                // Stop inner loop when input value matches prompts
                break;
            }
        }
        if (replyFound) {
            // Stop outer loop when reply is found instead of interacting through the entire array
            break;
        }
    }
    return reply;
}

function addChat(input, product) {
    const messagesContainer = document.getElementById("messages");

    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<img src="img/user.png" class="avatar"><span>${input}</span>`;
    messagesContainer.appendChild(userDiv);

    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.src = "img/OctaviaIcon.png";
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerHTML = "Typing...";
    botDiv.appendChild(botText);
    botDiv.appendChild(botImg);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

    // Fake delay to seem "real"
    setTimeout(() => {
            botText.innerHTML = `${product}`;
            textToSpeech(botText.innerText)
        }, 1000
    )
}

//location isolator from weather question
function find_location(string) {
    let rgxp = "";

    for (let i = 0; i < counties.length; i++) {
        if (!Array.isArray(counties[i])) {
            rgxp = new RegExp(counties[i], "i");
            if ((string).match(rgxp)) {
                return [rgxp.source, rgxp.source];
            }
        } else {
            for (const key in counties[i]) {
                rgxp = new RegExp(counties[i][key], "i");
                if ((string).match(rgxp)) {
                    return counties[i];
                }
            }
        }
    }
    return "nomatch";
}

//image sourcing function
function imgSource(string) {
    if (string === 'Clouds') {
        return 'img/cloudy.png'
    } else if (string === 'Clear') {
        return 'img/sunny.png'
    } else if (string === 'Rain') {
        return 'img/rainy.png'
    } else if (string === 'Snow') {
        return 'img/snow.png'
    } else if (string === 'Windy' || 'Wind') {
        return 'img/windy.png'
    } else if (string === 'Storm') {
        return 'img/storm.png'
    } else {return 'img/sunny.png'}
}

//add chat for just bot
function addBotChat(string) {
    const messagesContainer = document.getElementById("messages");

    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.src = "img/OctaviaIcon.png";
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerHTML = "Typing...";
    botDiv.appendChild(botText);
    botDiv.appendChild(botImg);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
console.log(string);
    // Fake delay to seem "real"
    setTimeout(() => {
            botText.innerHTML = string;
            textToSpeech(botText.innerText)
        }, 2000
    )
}

//outfit suggestion chat function
function addWears(weather, temp) {
    let kit = clothing.cloudy;
    let weath = "";

    if (weather === "Sunny" || weather === "Clear") {
        kit = clothing.sunny;
        weath = "clear skies"
    } else if (weather === "Rain") {
        kit = clothing.rainy;
        weath = "going to rain"
    } else if (weather === "Snow") {
        kit = clothing.snowy
        weath = "going to snow"
    } else if (weather === "Windy" || "Wind") {
        kit = clothing.windy
        weath = "will be quite windy"
    } else if (weather === "Clouds") {
        kit = clothing.cloudy;
        weath = "grey skies"
    }

    const message1 = [
        `Take ${kit.material} clothing.`,
        `Bring along ${kit.material} clothing.`,
        `Pack ${kit.material} clothing.`]

    const message2 = [
        `You should have ${kit.shoes} on your feet.`,
        `You'll need to be wearing ${kit.shoes}.`,
        `${kit.shoes} would work.`
    ]

    let message3 = "Also, bring ";
    let i = 0;
    while(i < kit.accessories.length-1) {
        message3+= `${kit.accessories[i]}, `
        i++;
    }
    message3+= `and ${kit.accessories[i]}.`
    let string;

    setTimeout(() => {
        string = message1[Math.floor(Math.random()*message1.length)];
        addBotChat(string);
    }, 3000);


    setTimeout(() => {
        string = message2[Math.floor(Math.random()*message2.length)];
        addBotChat(string);
    }, 5500);

    setTimeout(() => {
        string = message3;
        addBotChat(string);
    }, 8000);
}
