const topics = [
    {
        category: "Cricket",
        topic: "Sachin Tendulkar",
        hints: [
            "👑 Retired from all forms of cricket in 2013.",
            "🏆 Won the 2011 ICC Cricket World Cup.",
            "🏏 Holds the record for the most runs in international cricket.",
            "🌟 Known as the 'God of Cricket' in India.",
            "🔥 Nicknamed 'Master Blaster'."
        ]
    },
    {
        category: "Movies",
        topic: "3 Idiots",
        hints: [
            "🏫 Set in an engineering college.",
            "🎬 Directed by Rajkumar Hirani.",
            "🌟 Stars Aamir Khan, R. Madhavan, and Sharman Joshi.",
            "Famous dialogue: 'All is well'.",
            "🎬 A Bollywood movie about engineering students."
        ]
    },
    {
        category: "Food",
        topic: "Dosa",
        hints: [
            "🔥 Cooked on a hot griddle.",
            "🍽️ Often served with sambar and coconut chutney.",
            "🥘 Comes in varieties like Masala Dosa, Plain Dosa, etc.",
            "🇮🇳 A staple breakfast item in South India.",
            "🍴 A South Indian dish made from fermented rice and lentils."
        ]
    },
    {
        category: "Desserts",
        topic: "Gulab Jamun",
        hints: [
            "🎉 Often served at festivals and weddings.",
            "🍯 Deep-fried and soaked in sugar syrup.",
            "🔥 Best served warm.",
            "🇮🇳 A favorite sweet across India.",
            "🍬 A popular Indian dessert made from khoya."
        ]
    },
    {
        category: "Movies",
        topic: "Baahubali",
        hints: [
            "🏰 Set in the fictional kingdom of Mahishmati.",
            "👑 Stars Prabhas, Rana Daggubati, and Anushka Shetty.",
            "⚔️ Famous for its visual effects and grand battle scenes.",
            "🤔 The question 'Why did Kattappa kill Baahubali?' became a meme.",
            "🎥 A two-part Indian epic fantasy film directed by S.S. Rajamouli."
        ]
    },
    {
        category: "Personalities",
        topic: "Rajinikanth",
        hints: [
            "🇮🇳 Hails from Tamil Nadu.",
            "🎬 Famous movies: 'Robot', 'Kabali', 'Enthiran'.",
            "🔥 Known for his punch dialogues and larger-than-life roles.",
            "👑 Referred to as 'Thalaiva' by fans.",
            "🌟 Indian superstar known for his style and dialogue delivery."
        ]
    },
    {
        category: "Street Food",
        topic: "Pani Puri",
        hints: [
            "🌶️ Known for its tangy and spicy flavor.",
            "💧 Filled with spicy water, tamarind chutney, and potatoes.",
            "🔥 Best enjoyed fresh and crispy.",
            "🇮🇳 Called 'Golgappa' in North India and 'Puchka' in West Bengal.",
            "🍴 A popular Indian street food."
        ]
    },
    {
        category: "Personalities",
        topic: "Shah Rukh Khan",
        hints: [
            "🏆 Multiple Filmfare Award winner.",
            "🎬 Famous movies: 'Dilwale Dulhania Le Jayenge', 'My Name is Khan'.",
            "❤️ Nicknamed 'King Khan'.",
            "🔥 Known for his romantic roles.",
            "🌟 Known as the 'King of Bollywood'."
        ]
    },
    {
        category: "Food",
        topic: "Biryani",
        hints: [
            "🌶️ Known for its rich aroma and taste.",
            "🍗 Popular varieties: Hyderabadi, Lucknowi, Kolkata.",
            "🔥 Often served with raita and salad.",
            "🇮🇳 A favorite at weddings and celebrations.",
            "🍚 A flavorful rice dish made with spices and meat."
        ]
    },
    {
        category: "Personalities",
        topic: "Amitabh Bachchan",
        hints: [
            "🎤 Hosted the TV show 'Kaun Banega Crorepati'.",
            "🎬 Famous movies: 'Sholay', 'Deewaar', 'Piku'.",
            "🔥 Known as the 'Shahenshah of Bollywood'.",
            "👑 One of the most influential actors in Indian cinema.",
            "🌟 Legendary Bollywood actor."
        ]
    },
    {
        category: "Football",
        topic: "Lionel Messi",
        hints: [
            "🇦🇷 Plays for Argentina.",
            "🏆 Won the FIFA World Cup in 2022.",
            "🌟 Known for his dribbling and playmaking skills.",
            "🔥 Often compared to Diego Maradona.",
            "⚽ Considered one of the greatest footballers of all time."
        ]
    },
    {
        category: "Monuments",
        topic: "Taj Mahal",
        hints: [
            "🏛️ Located in Agra, India.",
            "💔 Built by Shah Jahan in memory of his wife Mumtaz Mahal.",
            "🌟 One of the Seven Wonders of the World.",
            "🔥 A UNESCO World Heritage Site.",
            "🇮🇳 A symbol of love and one of India's most iconic landmarks."
        ]
    },
    {
        category: "Cricket",
        topic: "Virat Kohli",
        hints: [
            "🏏 Former captain of the Indian cricket team.",
            "🔥 Known for his aggressive batting style.",
            "🌟 Holds numerous records in international cricket.",
            "❤️ Married to Anushka Sharma.",
            "👑 One of the most popular cricketers in the world."
        ]
    },
    {
        category: "Beverages",
        topic: "Chai",
        hints: [
            "🌶️ Can be made with ginger, cardamom, or masala.",
            "🔥 Often served with snacks like biscuits or pakoras.",
            "🇮🇳 A staple beverage in Indian households.",
            "🎉 A symbol of hospitality in India.",
            "☕ A popular Indian tea made with milk, spices, and sugar."
        ]
    },
    {
        category: "Monuments",
        topic: "Eiffel Tower",
        hints: [
            "🇫🇷 Located in Paris, France.",
            "🌟 One of the most recognizable structures in the world.",
            "🔥 A symbol of romance and love.",
            "🏛️ Built by Gustave Eiffel for the 1889 World's Fair.",
            "🗼 A major tourist attraction and cultural icon."
        ]
    },
    {
        category: "Football",
        topic: "Cristiano Ronaldo",
        hints: [
            "🇵🇹 Plays for Portugal.",
            "🏆 Won the UEFA European Championship in 2016.",
            "🔥 Known for his goal-scoring ability and athleticism.",
            "🌟 Often compared to Lionel Messi.",
            "⚽ Considered one of the greatest footballers of all time."
        ]
    },
    {
        category: "Mountains",
        topic: "Mount Everest",
        hints: [
            "🏔️ The highest peak in the world.",
            "🇳🇵 Located in the Himalayas on the Nepal-China border.",
            "🔥 A popular destination for mountaineers.",
            "🌟 First successfully climbed by Edmund Hillary and Tenzing Norgay in 1953.",
            "🗻 A symbol of human endurance and adventure."
        ]
    },
    {
        category: "Books",
        topic: "Harry Potter",
        hints: [
            "📚 A series of fantasy novels by J.K. Rowling.",
            "🔥 Follows the journey of a young wizard and his friends.",
            "🌟 Adapted into a successful film series.",
            "🎥 Features iconic characters like Hermione, Ron, and Dumbledore.",
            "⚡ Known for its magical world and themes of friendship and bravery."
        ]
    },
    {
        category: "Architecture",
        topic: "Burj Khalifa",
        hints: [
            "🏙️ Located in Dubai, UAE.",
            "🔥 The tallest building in the world.",
            "🌟 A symbol of modern architecture and engineering.",
            "🎉 Features an observation deck and luxury residences.",
            "🇦🇪 A major tourist attraction in the Middle East."
        ]
    },
    {
        category: "Food",
        topic: "Pizza",
        hints: [
            "🍕 Originated in Italy.",
            "🔥 A popular fast food worldwide.",
            "🌟 Comes in varieties like Margherita, Pepperoni, and Hawaiian.",
            "🇮🇳 Loved by people of all ages in India.",
            "🍴 Made with a base of dough, tomato sauce, and cheese."
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
