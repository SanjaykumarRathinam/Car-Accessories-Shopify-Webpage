const { NlpManager } = require("node-nlp");

// Create an instance of NlpManager
const manager = new NlpManager({ languages: ["en"] });

// Train the NlpManager with sample data
manager.addDocument("en", "hello", "greeting");
manager.addDocument("en", "hi", "greeting");
manager.addDocument("en", "how are you", "health");
manager.addDocument("en", "fine ", "reply");
manager.addAnswer("en", "greeting", "Hello!");
manager.addAnswer("en", "health", "I am fine and you ");
manager.addAnswer("en", "reply", "Thankyou!");
manager.addDocument("en", "tell me about your tours", "tour_info");
manager.addDocument("en", "what destinations do you offer", "tour_info");
manager.addDocument(
  "en",
  "can you recommend a vacation package",
  "tour_recommendation"
);
manager.addDocument("en", "how can I book a tour", "tour_booking");
manager.addDocument(
  "en",
  "what are the cancellation policies",
  "tour_cancellation"
);
manager.addDocument("en", "do you provide travel insurance", "tour_insurance");

manager.addAnswer(
  "en",
  "tour_info",
  "We offer a variety of tours to amazing destinations."
);
manager.addAnswer(
  "en",
  "tour_info",
  "Our tours cover both domestic and international locations."
);
manager.addAnswer(
  "en",
  "tour_recommendation",
  "Based on your preferences, I recommend our 'Exotic Beach Getaways' package."
);
manager.addAnswer(
  "en",
  "tour_recommendation",
  "For an adventurous trip, our 'Wilderness Expedition' tour is highly recommended."
);
manager.addAnswer(
  "en",
  "tour_booking",
  "To book a tour, you can visit our website or contact our customer service."
);
manager.addAnswer(
  "en",
  "tour_booking",
  "You can easily book a tour online through our secure booking system."
);
manager.addAnswer(
  "en",
  "tour_cancellation",
  "Our cancellation policies vary based on the tour package. Please refer to our website or contact us for more details."
);
manager.addAnswer(
  "en",
  "tour_insurance",
  "Yes, we offer travel insurance options to ensure a safe and worry-free trip."
);

// Add more questions and answers related to tours and travel
manager.addDocument(
  "en",
  "what are the popular tourist attractions in Paris",
  "paris_attractions"
);
manager.addDocument(
  "en",
  "can you suggest a family-friendly vacation spot",
  "family_friendly_destination"
);
manager.addDocument("en", "how long are your guided tours", "tour_duration");
manager.addDocument(
  "en",
  "do you offer customizable tour packages",
  "customizable_tours"
);

manager.addAnswer(
  "en",
  "paris_attractions",
  "Paris is famous for attractions like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral."
);
manager.addAnswer(
  "en",
  "paris_attractions",
  "Don't miss visiting iconic landmarks such as the Arc de Triomphe and the Champs-Élysées in Paris."
);
manager.addAnswer(
  "en",
  "family_friendly_destination",
  "Our 'Family Fun Retreat' tour package is designed for families with kids and offers a range of child-friendly activities."
);
manager.addAnswer(
  "en",
  "family_friendly_destination",
  "Consider exploring destinations like Orlando, Florida, or Bali, Indonesia, which are known for their family-friendly attractions."
);
manager.addAnswer(
  "en",
  "tour_duration",
  "The duration of our guided tours ranges from 3 days to 2 weeks, depending on the destination and package."
);
manager.addAnswer(
  "en",
  "tour_duration",
  "Our tours typically last for around 7-10 days, allowing you to fully experience the destination."
);
manager.addAnswer(
  "en",
  "customizable_tours",
  "Yes, we provide customizable tour packages where you can tailor the itinerary to suit your preferences and interests."
);
manager.addAnswer(
  "en",
  "customizable_tours",
  "We offer the flexibility to customize your tour by adding or removing activities, extending or shortening the duration, and more."
);

// Train and save the NlpManager
(async () => {
  await manager.train();
  manager.save();
})();

// Process the message using the trained NlpManager
const processMessage = async (message) => {
  try {
    const response = await manager.process("en", message);
    return response.answer;
  } catch (error) {
    console.error("Error executing NLP:", error);
    throw new Error("Error executing NLP");
  }
};

module.exports = { processMessage };
