export const SelectTravelsList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole travels in explorations",
    icon: "->",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travels in tandem",
    icon: "🥂",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "🍾",
    people: "5 to 10 people",
  },
];

export const SelectedBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💴",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep coston the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location : {Location} for {totalDays} Days for {traveller} with a {budget} budget, give me hotels options list with HoteName, Hotel Address, Price, rating, hotel image url, geo coordinates, rating, description and suggest itinerary with placename, placeDetails, Place image url, geo coordinates, ticket price planning, time travel each of the location for 3 day plan with best time to wait to JSON format.";
