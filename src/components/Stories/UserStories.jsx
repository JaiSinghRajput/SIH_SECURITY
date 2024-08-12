// src/components/UserStories.js
import React, { useState } from "react";
import { storiesData } from "../../data";
import StorySubmissionForm from "./StorySubmissionForm";
import StoryList from "./StoryList";

const UserStories = () => {
  const [stories, setStories] = useState(storiesData);

  const handleStorySubmit = (newStory) => {
    const storyWithId = {
      ...newStory,
      id: stories.length + 1,
      helpfulCount: 0,
      approved: false, // New stories need approval
    };
    setStories([...stories, storyWithId]);
    alert("Your story has been submitted for review!");
  };

  return (
    <div className="space-y-8">
      <StorySubmissionForm onSubmit={handleStorySubmit} />
      <StoryList stories={stories} />
    </div>
  );
};

export default UserStories;
