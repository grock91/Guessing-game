const topics = [
    {
        category: "Cricket",
        topic: "VVS Laxman",
        hints: [
            "🏏 Known for his elegant batting style.",
            "🔥 Famous for his innings of 281 against Australia in 2001.",
            "🌟 Nicknamed 'Very Very Special'.",
            "👑 Played a key role in India's Test victories.",
            "🇮🇳 Retired from international cricket in 2012."
        ]
    },
    {
        category: "Movies",
        topic: "Gangs of Wasseypur",
        hints: [
            "🎬 A two-part Indian crime film.",
            "🔥 Directed by Anurag Kashyap.",
            "🌟 Known for its raw and gritty storytelling.",
            "🎥 Features a large ensemble cast.",
            "🇮🇳 Set in the coal mafia of Dhanbad, Jharkhand."
        ]
    },
    {
        category: "Food",
        topic: "Pav Bhaji",
        hints: [
            "🍽️ A popular street food from Mumbai.",
            "🔥 Made with mashed vegetables and spices.",
            "🌟 Served with buttered pav (bread rolls).",
            "🇮🇳 Often garnished with onions and lemon.",
            "🍴 A favorite snack for all ages."
        ]
    },
    {
        category: "Desserts",
        topic: "Rasmalai",
        hints: [
            "🍬 A soft and spongy dessert.",
            "🍯 Made from cottage cheese and soaked in sweetened milk.",
            "🌟 Often flavored with cardamom and saffron.",
            "🔥 Served chilled.",
            "🇮🇳 A popular sweet in West Bengal and Odisha."
        ]
    },
    {
        category: "Movies",
        topic: "Udaan",
        hints: [
            "🎬 A coming-of-age drama film.",
            "🔥 Directed by Vikramaditya Motwane.",
            "🌟 Won multiple awards at film festivals.",
            "🎥 Explores themes of ambition and rebellion.",
            "🇮🇳 Released in 2010."
        ]
    },
    {
        category: "Personalities",
        topic: "APJ Abdul Kalam",
        hints: [
            "👑 Known as the 'Missile Man of India'.",
            "🌟 Served as the 11th President of India.",
            "🔥 A renowned scientist and aerospace engineer.",
            "🇮🇳 Authored several books, including 'Wings of Fire'.",
            "🎓 A source of inspiration for students."
        ]
    },
    {
        category: "Street Food",
        topic: "Vada Pav",
        hints: [
            "🍴 A popular street food from Maharashtra.",
            "🔥 Consists of a spicy potato fritter in a bread roll.",
            "🌟 Often served with green chutney and fried green chilies.",
            "🇮🇳 Known as the 'Indian Burger'.",
            "🍽️ A staple snack in Mumbai."
        ]
    },
    {
        category: "Personalities",
        topic: "Mary Kom",
        hints: [
            "🥊 A six-time world boxing champion.",
            "🌟 Represented India in multiple Olympics.",
            "🔥 Known as 'Magnificent Mary'.",
            "🇮🇳 Hails from Manipur.",
            "👑 A recipient of the Padma Bhushan."
        ]
    },
    {
        category: "Food",
        topic: "Dhokla",
        hints: [
            "🍽️ A savory snack from Gujarat.",
            "🔥 Made from fermented rice and chickpea batter.",
            "🌟 Often served with green chutney.",
            "🇮🇳 A popular breakfast item.",
            "🍴 Known for its soft and spongy texture."
        ]
    },
    {
        category: "Personalities",
        topic: "Ratan Tata",
        hints: [
            "👑 Former chairman of Tata Sons.",
            "🌟 Known for his philanthropic work.",
            "🔥 Led the acquisition of Jaguar Land Rover.",
            "🇮🇳 A recipient of the Padma Vibhushan.",
            "🎓 An inspiration to entrepreneurs."
        ]
    },
    {
        category: "Football",
        topic: "Zinedine Zidane",
        hints: [
            "⚽ A legendary French footballer.",
            "🔥 Known for his elegance and skill on the ball.",
            "🌟 Scored a famous volley in the 2002 UEFA Champions League final.",
            "👑 Won the FIFA World Cup with France in 1998.",
            "🎥 Later became a successful football manager."
        ]
    },
    {
        category: "Monuments",
        topic: "Qutub Minar",
        hints: [
            "🏛️ Located in Delhi, India.",
            "🔥 The tallest brick minaret in the world.",
            "🌟 Built by Qutb-ud-din Aibak in the 12th century.",
            "🇮🇳 A UNESCO World Heritage Site.",
            "🎥 Featured in several Bollywood movies."
        ]
    },
    {
        category: "Cricket",
        topic: "Rahul Dravid",
        hints: [
            "🏏 Known as 'The Wall' of Indian cricket.",
            "🔥 Famous for his solid defensive technique.",
            "🌟 Played 164 Test matches for India.",
            "👑 Later became the head coach of the Indian cricket team.",
            "🇮🇳 A recipient of the Padma Bhushan."
        ]
    },
    {
        category: "Beverages",
        topic: "Filter Coffee",
        hints: [
            "☕ A popular South Indian coffee.",
            "🔥 Brewed using a traditional metal filter.",
            "🌟 Known for its strong aroma and flavor.",
            "🇮🇳 Often served in a stainless steel tumbler and davara.",
            "🍴 A staple in Tamil Nadu and Karnataka."
        ]
    },
    {
        category: "Monuments",
        topic: "Hawa Mahal",
        hints: [
            "🏛️ Located in Jaipur, Rajasthan.",
            "🔥 Known as the 'Palace of Winds'.",
            "🌟 Built with red and pink sandstone.",
            "🇮🇳 Features 953 small windows (jharokhas).",
            "🎥 A major tourist attraction in India."
        ]
    },
    {
        category: "Football",
        topic: "Diego Maradona",
        hints: [
            "⚽ A legendary Argentine footballer.",
            "🔥 Known for the 'Hand of God' goal in the 1986 World Cup.",
            "🌟 Led Argentina to World Cup victory in 1986.",
            "👑 Considered one of the greatest players of all time.",
            "🎥 Passed away in November 2020."
        ]
    },
    {
        category: "Mountains",
        topic: "K2",
        hints: [
            "🏔️ The second-highest mountain in the world.",
            "🔥 Located on the China-Pakistan border.",
            "🌟 Known as the 'Savage Mountain' due to its difficulty to climb.",
            "🇳🇵 Part of the Karakoram Range.",
            "🗻 A dream destination for mountaineers."
        ]
    },
    {
        category: "Books",
        topic: "The Alchemist",
        hints: [
            "📚 A novel by Paulo Coelho.",
            "🔥 Follows the journey of a shepherd boy named Santiago.",
            "🌟 Explores themes of dreams and destiny.",
            "🇧🇷 Originally written in Portuguese.",
            "🎥 A bestseller worldwide."
        ]
    },
    {
        category: "Architecture",
        topic: "Lotus Temple",
        hints: [
            "🏛️ Located in Delhi, India.",
            "🔥 Shaped like a lotus flower.",
            "🌟 A Bahá'í House of Worship.",
            "🇮🇳 Known for its serene ambiance.",
            "🎥 A major tourist attraction."
        ]
    },
    {
        category: "Food",
        topic: "Rogan Josh",
        hints: [
            "🍽️ A flavorful Kashmiri dish.",
            "🔥 Made with tender lamb and aromatic spices.",
            "🌟 Known for its rich red color.",
            "🇮🇳 A staple in Kashmiri cuisine.",
            "🍴 Often served with rice or naan."
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
const topicList = document.getElementById('topic-list');

// Populate the topic list with categories
topics.forEach((topic, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = topic.category;
    listItem.addEventListener('click', () => loadTopic(index));
    topicList.appendChild(listItem);
});

function loadTopic(index = currentTopicIndex) {
    currentTopicIndex = index;
    const currentTopic = topics[currentTopicIndex];
    topicElement.textContent = "❓❓❓";
    hintElement.textContent = currentTopic.hints[0];
    currentHintIndex = 0;
    revealTopicButton.style.display = "inline-block";
    nextTopicButton.style.display = "none";
    nextHintButton.style.display = "inline-block";
}

function showNextHint() {
    const currentTopic = topics[currentTopicIndex];
    currentHintIndex++;
    if (currentHintIndex < currentTopic.hints.length) {
        hintElement.textContent = currentTopic.hints[currentHintIndex];
    } else {
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
