const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  const { GoogleAIFileManager } = require("@google/generative-ai/server");
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const fileManager = new GoogleAIFileManager(apiKey);

  async function uploadToGemini(path, mimeType) {
    const uploadResult = await fileManager.uploadFile(path, {
      mimeType,
      displayName: path,
    });
    const file = uploadResult.file;
    console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
    return file;
  }
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const files = [
      await uploadToGemini("Unknown File", "application/octet-stream"),
    ];
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "model",
          parts: [
            {
              fileData: {
                mimeType: files[0].mimeType,
                fileUri: files[0].uri,
              },
            },
          ],
        },
        {
          role: "user",
          parts: [
            {text: "Generate a travel plan for location Las Vagas, for 3 days for couple with a cheap budget, Give me a hotels options list with HotelName, Hotel Address, Price, rating, hotel image url, geo coordinates, rating, description and suggest itinerary with placename, placeDetails, Place image url, geo coordinates, ticket price planning, time travel each of the location for 3 day plan with best time to wait to JSON format.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I ca nnot directly access and display images or real-time pricing for hotels.  Hotel prices and availability change constantly.  Also, I don't have access to a database of geo-coordinates for every location.  This JSON will provide a framework, and you will need to fill in the missing image URLs, prices (using hotel booking sites like Booking.com, Expedia, etc.), and geo-coordinates using online mapping services (like Google Maps).\n\n```json\n{\n  \"trip\": {\n    \"destination\": \"Las Vegas, Nevada\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotels\": [\n    {\n      \"hotelName\": \"Hotel Name 1 (Example)\",\n      \"hotelAddress\": \"123 Example Street, Las Vegas, NV\",\n      \"price\": \"Placeholder - Check Booking Sites\",\n      \"rating\": \"3.5\",\n      \"hotelImageUrl\": \"Placeholder URL\",\n      \"geoCoordinates\": {\n        \"latitude\": \"Placeholder\",\n        \"longitude\": \"Placeholder\"\n      },\n      \"description\": \"Budget-friendly hotel near the Strip.  Basic amenities.\"\n    },\n    {\n      \"hotelName\": \"Hotel Name 2 (Example)\",\n      \"hotelAddress\": \"456 Another Street, Las Vegas, NV\",\n      \"price\": \"Placeholder - Check Booking Sites\",\n      \"rating\": \"4.0\",\n      \"hotelImageUrl\": \"Placeholder URL\",\n      \"geoCoordinates\": {\n        \"latitude\": \"Placeholder\",\n        \"longitude\": \"Placeholder\"\n      },\n      \"description\": \"Slightly more upscale than Hotel 1, but still budget-conscious.  May offer a pool.\"\n    },\n    {\n      \"hotelName\": \"Hotel Name 3 (Example)\",\n      \"hotelAddress\": \"789 Downtown Las Vegas, NV\",\n      \"price\": \"Placeholder - Check Booking Sites\",\n      \"rating\": \"3.0\",\n      \"hotelImageUrl\": \"Placeholder URL\",\n      \"geoCoordinates\": {\n        \"latitude\": \"Placeholder\",\n        \"longitude\": \"Placeholder\"\n      },\n      \"description\": \"Downtown location, potentially cheaper but further from the Strip.\"\n    }\n\n  ],\n  \"itinerary\": {\n    \"day1\": [\n      {\n        \"placeName\": \"Fremont Street Experience\",\n        \"placeDetails\": \"Free walking experience, street performers, light show.\",\n        \"placeImageUrl\": \"Placeholder URL\",\n        \"geoCoordinates\": {\n          \"latitude\": \"Placeholder\",\n          \"longitude\": \"Placeholder\"\n        },\n        \"ticketPrice\": \"Free\",\n        \"timeToSpend\": \"3-4 hours\"\n      },\n      {\n        \"placeName\": \"Downtown Container Park\",\n        \"placeDetails\": \"Unique shops and restaurants in shipping containers.\",\n        \"placeImageUrl\": \"Placeholder URL\",\n        \"geoCoordinates\": {\n          \"latitude\": \"Placeholder\",\n          \"longitude\": \"Placeholder\"\n        },\n        \"ticketPrice\": \"Free entry (food and drinks extra)\",\n        \"timeToSpend\": \"2 hours\"\n      }\n    ],\n    \"day2\": [\n      {\n        \"placeName\": \"Las Vegas Strip (walking tour)\",\n        \"placeDetails\": \"Walk the Strip, see the hotels and sights.\",\n        \"placeImageUrl\": \"Placeholder URL\",\n        \"geoCoordinates\": {\n          \"latitude\": \"Placeholder\",\n          \"longitude\": \"Placeholder\"\n        },\n        \"ticketPrice\": \"Free (consider bus if needed)\",\n        \"timeToSpend\": \"4-5 hours\"\n      },\n      {\n        \"placeName\": \"Bellagio Fountains\",\n        \"placeDetails\": \"Free water show.\",\n        \"placeImageUrl\": \"Placeholder URL\",\n        \"geoCoordinates\": {\n          \"latitude\": \"Placeholder\",\n          \"longitude\": \"Placeholder\"\n        },\n        \"ticketPrice\": \"Free\",\n        \"timeToSpend\": \"1 hour\"\n      },\n      {\n        \"placeName\": \"In-N-Out Burger (cheap eats!)\",\n        \"placeDetails\": \"Classic West Coast burger joint\",\n        \"placeImageUrl\": \"Placeholder URL\",\n        \"geoCoordinates\": {\n          \"latitude\": \"Placeholder\",\n          \"longitude\": \"Placeholder\"\n        },\n        \"ticketPrice\": \"Budget-friendly meal\",\n        \"timeToSpend\": \"1 hour\"\n      }\n    ],\n    \"day3\": [\n      {\n        \"placeName\": \"Seven Magic Mountains\",\n        \"placeDetails\": \"Outdoor art installation (short drive from the Strip)\",\n        \"placeImageUrl\": \"Placeholder URL\",\n        \"geoCoordinates\": {\n          \"latitude\": \"Placeholder\",\n          \"longitude\": \"Placeholder\"\n        },\n        \"ticketPrice\": \"Free\",\n        \"timeToSpend\": \"2 hours (including travel time)\"\n      },\n      {\n        \"placeName\": \"Neon Museum\",\n        \"placeDetails\": \"Museum of vintage Vegas signs (entry fee applies)\",\n        \"placeImageUrl\": \"Placeholder URL\",\n        \"geoCoordinates\": {\n          \"latitude\": \"Placeholder\",\n          \"longitude\": \"Placeholder\"\n        },\n        \"ticketPrice\": \"Check website for prices\",\n        \"timeToSpend\": \"2 hours\"\n      }\n    ]\n  }\n}\n```\n\nRemember to replace the placeholders with actual data.  Consider using public transportation (buses) to reduce costs.  Look for free activities and happy hour deals to maximize your budget.  Enjoy your trip!\n"},
          ],
        },
      ],
    });
  
