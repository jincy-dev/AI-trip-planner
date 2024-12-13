import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectedBudgetOptions,
  SelectTravelsList,
} from "@/constants/options";
import { chatSession } from "@/service/AIModel";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";

function CreateTrip() {
  const [places, setPlaces] = useState();
  const [formData, setFormData] = useState([]);

  const handleInpuChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const onGenerateTrip = await() => {
    if (
      (formData?.noOfDays > 5 && !formData?.location) ||
      !formData?.budget ||
      !formData.traveller
    ) {
      toast("Please fill all details");
      return;
    }
  };
  const FINAL_PROMPT = AI_PROMPT.replace(
    "{location}",
    formData?.location?.label
  )
    .replace("{totalDays}", formData?.noOfDays)
    .replace("{ traveller}", formData?.traveller)
    .replace("{budget}", formData?.budget)
    .replace("{totalDays}", formData?.noOfDays);

  console.log(FINAL_PROMPT);

  const result=await chatSession.sendMessage(FINAL_PROMPT);
  console.log(result?.response?.text());

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your Travel Preferences⛺🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="mt-20 flex flex-col">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination of choice ?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              places,
              onChange: (e) => {
                setPlaces(e);
                handleInpuChange("Location", v);
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning?
          </h2>
          <Input
            placeholder={"Ex.3"}
            type="number"
            onChange={(e) => handleInpuChange("numberOfDays", e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What is your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectedBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInpuChange("budget", item.title)}
                className={`p-4 border cursor-pointer 
                rounded-lg hover:shadow-lg ${
                  formData?.budget == item.title && "shadow-lg border-black"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            Whom do you plan to travel with you on your next adventure?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelsList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInpuChange("traveller", item.people)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                  formData?.traveller == item.people && "shadow-lg border-black"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 justify-end flex">
        <Button onClick={onGenerateTrip}>Generate trip</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
