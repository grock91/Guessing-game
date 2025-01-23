const topics = [
    {
        topic: "3 Idiots",
        hints: [
            "🎬 A Bollywood movie about engineering students.",
            "Directed by Rajkumar Hirani.",
            "Famous dialogue: 'All is well'.",
            "🏫 Set in an engineering college.",
            "🌟 Stars Aamir Khan, R. Madhavan, and Sharman Joshi."
        ]
    },
    {
        topic: "Dosa",
        hints: [
            "🍽️ A South Indian dish made from fermented rice and lentils.",
            "Often served with sambar and coconut chutney.",
            "🥘 Comes in varieties like Masala Dosa, Plain Dosa, etc.",
            "🔥 Cooked on a hot griddle.",
            "🇮🇳 A staple breakfast item in South India."
        ]
    },
    {
        topic: "Sachin Tendulkar",
        hints: [
            "🏏 Known as the 'God of Cricket' in India.",
            "Holds the record for the most runs in international cricket.",
            "👑 Retired from all forms of cricket in 2013.",
            "🏆 Won the 2011 ICC Cricket World Cup.",
            "🌟 Nicknamed 'Master Blaster'."
        ]
    },
    {
        topic: "Gulab Jamun",
        hints: [
            "🍬 A popular Indian dessert made from khoya.",
            "🍯 Deep-fried and soaked in sugar syrup.",
            "🎉 Often served at festivals and weddings.",
            "🔥 Best served warm.",
            "🇮🇳 A favorite sweet across India."
        ]
    },
    {
        topic: "Baahubali",
        hints: [
            "🎥 A two-part Indian epic fantasy film directed by S.S. Rajamouli.",
            "⚔️ Famous for its visual effects and grand battle scenes.",
            "🤔 The question 'Why did Kattappa kill Baahubali?' became a meme.",
            "👑 Stars Prabhas, Rana Daggubati, and Anushka Shetty.",
            "🏰 Set in the fictional kingdom of Mahishmati."
        ]
    },
    {
        topic: "Rajinikanth",
        hints: [
            "🌟 Indian superstar known for his style and dialogue delivery.",
            "🎬 Famous movies: 'Robot', 'Kabali', 'Enthiran'.",
            "🔥 Known for his punch dialogues and larger-than-life roles.",
            "🇮🇳 Hails from Tamil Nadu.",
            "👑 Referred to as 'Thalaiva' by fans."
        ]
    },
    {
        topic: "Pani Puri",
        hints: [
            "🍴 A popular Indian street food.",
            "💧 Filled with spicy water, tamarind chutney, and potatoes.",
            "🌶️ Known for its tangy and spicy flavor.",
            "🇮🇳 Called 'Golgappa' in North India and 'Puchka' in West Bengal.",
            "🔥 Best enjoyed fresh and crispy."
        ]
    },
    {
        topic: "Shah Rukh Khan",
        hints: [
            "🌟 Known as the 'King of Bollywood'.",
            "🎬 Famous movies: 'Dilwale Dulhania Le Jayenge', 'My Name is Khan'.",
            "❤️ Nicknamed 'King Khan'.",
            "🏆 Multiple Filmfare Award winner.",
            "🔥 Known for his romantic roles."
        ]
    },
    {
        topic: "Biryani",
        hints: [
            "🍚 A flavorful rice dish made with spices and meat.",
            "🍗 Popular varieties: Hyderabadi, Lucknowi, Kolkata.",
            "🔥 Often served with raita and salad.",
            "🇮🇳 A favorite at weddings and celebrations.",
            "🌶️ Known for its rich aroma and taste."
        ]
    },
    {
        topic: "Amitabh Bachchan",
        hints: [
            "🌟 Legendary Bollywood actor.",
            "🎬 Famous movies: 'Sholay', 'Deewaar', 'Piku'.",
            "🎤 Hosted the TV show 'Kaun Banega Crorepati'.",
            "🔥 Known as the 'Shahenshah of Bollywood'.",
            "👑 One of the most influential actors in Indian cinema."
        ]
    }
];

let currentTopicIndex = 0;
let currentHintIndex = 0;

const topicElement = document.getElementById('topic');
const hintElement = document.getElementById('hint');
const nextHintButton = document.getElementById('next-hint');
const revealTopicButton = document.getElementById('reveal-topic');
const nextTopicButton = document.getElementById('next-topic');

function loadTopic() {
    const currentTopic = topics[currentTopicIndex];
    topicElement.textContent = "❓❓❓";
    hintElement.textContent = currentTopic.hints[0];
    currentHintIndex = 0;
    revealTopicButton.style.display = "none";
    nextTopicButton.style.display = "none";
    nextHintButton.style.display = "inline-block";
}

function showNextHint() {
    const currentTopic = topics[currentTopicIndex];
    currentHintIndex++;
    if (currentHintIndex < currentTopic.hints.length) {
        hintElement.textContent = currentTopic.hints[currentHintIndex];
    } else {
        revealTopicButton.style.display = "inline-block";
        nextTopicButton.style.display = "inline-block";
        nextHintButton.style.display = "none";
    }
}

function revealTopic() {
    const currentTopic = topics[currentTopicIndex];
    topicElement.textContent = currentTopic.topic;
    revealTopicButton.style.display = "none";
    nextTopicButton.style.display = "inline-block";
}

function goToNextTopic() {
    currentTopicIndex = (currentTopicIndex + 1) % topics.length;
    loadTopic();
}

nextHintButton.addEventListener('click', showNextHint);
revealTopicButton.addEventListener('click', revealTopic);
nextTopicButton.addEventListener('click', goToNextTopic);

// Load the first topic when the page loads
loadTopic();
