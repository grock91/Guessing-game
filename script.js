const topics = [
    {
        category: "Cricket",
        topics: [
            {
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
                topic: "Kapil Dev",
                hints: [
                    "🏏 Led India to its first World Cup victory in 1983.",
                    "🔥 Known for his all-round abilities.",
                    "🌟 Took 434 Test wickets in his career.",
                    "👑 A recipient of the Padma Bhushan.",
                    "🇮🇳 Retired from cricket in 1994."
                ]
            },
            {
                topic: "MS Dhoni",
                hints: [
                    "🏏 Former captain of the Indian cricket team.",
                    "🔥 Known for his cool and calm demeanor.",
                    "🌟 Led India to victory in the 2007 T20 World Cup and 2011 ICC World Cup.",
                    "👑 Nicknamed 'Captain Cool'.",
                    "🇮🇳 One of the most popular cricketers in the world."
                ]
            },
            {
                topic: "Anil Kumble",
                hints: [
                    "🏏 Known for his leg-spin bowling.",
                    "🔥 Took 619 Test wickets in his career.",
                    "🌟 Only the second bowler to take all 10 wickets in a Test innings.",
                    "👑 A recipient of the Padma Shri.",
                    "🇮🇳 Later became the head coach of the Indian cricket team."
                ]
            }
        ]
    },
    {
        category: "Movies",
        topics: [
            {
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
                topic: "Paan Singh Tomar",
                hints: [
                    "🎬 A biographical sports drama.",
                    "🔥 Starred Irrfan Khan in the lead role.",
                    "🌟 Based on the life of athlete Paan Singh Tomar.",
                    "🎥 Won the National Film Award for Best Feature Film.",
                    "🇮🇳 Released in 2012."
                ]
            },
            {
                topic: "The Lunchbox",
                hints: [
                    "🎬 A romantic drama film.",
                    "🔥 Starred Irrfan Khan and Nimrat Kaur.",
                    "🌟 Known for its unique storyline involving a lunchbox delivery mix-up.",
                    "🎥 Premiered at the Cannes Film Festival.",
                    "🇮🇳 Released in 2013."
                ]
            },
            {
                topic: "Tumbbad",
                hints: [
                    "🎬 A horror fantasy film.",
                    "🔥 Known for its dark and atmospheric storytelling.",
                    "🌟 Set in the village of Tumbbad in Maharashtra.",
                    "🎥 Praised for its visual effects and cinematography.",
                    "🇮🇳 Released in 2018."
                ]
            }
        ]
    },
    {
        category: "Food",
        topics: [
            {
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
                topic: "Rogan Josh",
                hints: [
                    "🍽️ A flavorful Kashmiri dish.",
                    "🔥 Made with tender lamb and aromatic spices.",
                    "🌟 Known for its rich red color.",
                    "🇮🇳 A staple in Kashmiri cuisine.",
                    "🍴 Often served with rice or naan."
                ]
            },
            {
                topic: "Pongal",
                hints: [
                    "🍽️ A traditional South Indian dish.",
                    "🔥 Made with rice, lentils, and ghee.",
                    "🌟 Often prepared during the harvest festival of Pongal.",
                    "🇮🇳 Served with coconut chutney and sambar.",
                    "🍴 A symbol of prosperity and abundance."
                ]
            },
            {
                topic: "Chole Bhature",
                hints: [
                    "🍽️ A popular North Indian dish.",
                    "🔥 Consists of spicy chickpeas and fried bread.",
                    "🌟 Often served with pickles and onions.",
                    "🇮🇳 A favorite breakfast or lunch option.",
                    "🍴 Known for its rich and hearty flavors."
                ]
            }
        ]
    },
    {
        category: "Personalities",
        topics: [
            {
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
                topic: "Sundar Pichai",
                hints: [
                    "👑 CEO of Alphabet Inc. and Google.",
                    "🌟 Known for his leadership in the tech industry.",
                    "🔥 Born in Chennai, India.",
                    "🇮🇳 A graduate of IIT Kharagpur.",
                    "🎓 A role model for aspiring engineers."
                ]
            },
            {
                topic: "Narendra Modi",
                hints: [
                    "👑 Current Prime Minister of India.",
                    "🌟 Known for his leadership and governance.",
                    "🔥 Previously served as the Chief Minister of Gujarat.",
                    "🇮🇳 A prominent figure in Indian politics.",
                    "🎓 A recipient of the Padma Vibhushan."
                ]
            }
        ]
    }
];

let currentCategoryIndex = 0;
let currentTopicIndex = 0;
let currentHintIndex = 0;

const topicElement = document.getElementById('topic');
const hintElement = document.getElementById('hint');
const nextHintButton = document.getElementById('next-hint');
const revealTopicButton = document.getElementById('reveal-topic');
const nextTopicButton = document.getElementById('next-topic');
const topicList = document.getElementById('topic-list');

// Populate the topic list with categories and sub-topics
topics.forEach((category, catIndex) => {
    const categoryItem = document.createElement('li');
    categoryItem.textContent = category.category;
    const subTopicList = document.createElement('ul');
    category.topics.forEach((topic, topicIndex) => {
        const subTopicItem = document.createElement('li');
        subTopicItem.textContent = `Topic ${topicIndex + 1}`;
        subTopicItem.addEventListener('click', () => loadTopic(catIndex, topicIndex));
        subTopicList.appendChild(subTopicItem);
    });
    categoryItem.appendChild(subTopicList);
    topicList.appendChild(categoryItem);
});

function loadTopic(catIndex = currentCategoryIndex, topicIndex = currentTopicIndex) {
    currentCategoryIndex = catIndex;
    currentTopicIndex = topicIndex;
    const currentTopic = topics[currentCategoryIndex].topics[currentTopicIndex];
    topicElement.textContent = "❓❓❓";
    hintElement.textContent = currentTopic.hints[0];
    currentHintIndex = 0;
    revealTopicButton.style.display = "inline-block";
    nextTopicButton.style.display = "none";
    nextHintButton.style.display = "inline-block";
}

function showNextHint() {
    const currentTopic = topics[currentCategoryIndex].topics[currentTopicIndex];
    currentHintIndex++;
    if (currentHintIndex < currentTopic.hints.length) {
        hintElement.textContent = currentTopic.hints[currentHintIndex];
    } else {
        nextTopicButton.style.display = "inline-block";
        nextHintButton.style.display = "none";
    }
}

function revealTopic() {
    const currentTopic = topics[currentCategoryIndex].topics[currentTopicIndex];
    topicElement.textContent = currentTopic.topic;
    revealTopicButton.style.display = "none";
    nextTopicButton.style.display = "inline-block";
}

function goToNextTopic() {
    currentTopicIndex = (currentTopicIndex + 1) % topics[currentCategoryIndex].topics.length;
    loadTopic(currentCategoryIndex, currentTopicIndex);
}

nextHintButton.addEventListener('click', showNextHint);
revealTopicButton.addEventListener('click', revealTopic);
nextTopicButton.addEventListener('click', goToNextTopic);

// Load the first topic when the page loads
loadTopic();
