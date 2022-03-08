import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("unknown");

  const handleMoodChangeToHappy = () => {
    queueRerenderWithNewMoodValue("happy");
  };

  const handleMoodChangeToConfused = () => {
    queueRerenderWithNewMoodValue("confused");
  };

  const handleMoodChangeToSad = () => {
     queueRerenderWithNewMoodValue("sad");
  };

  const handleMoodChangeToCool = () => {
    queueRerenderWithNewMoodValue("cool");
  };

  const handleMoodChangeToAnxious = () => {
   queueRerenderWithNewMoodValue("anxious");
  };

  const handleMoodChangeToCowboy = () => {
    queueRerenderWithNewMoodValue("cowboy");
  };

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToCool}>😎</button>
      <button onClick={handleMoodChangeToAnxious}>😬</button>
      <button onClick={handleMoodChangeToCowboy}>🤠</button>
    </>
  );
}

export default MoodPickerDemo;
