// App.js
import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Resume from "./Components/Resume/Resume";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import Links from "./Components/Links/Links";
import { DetailsContext } from "./Components/Context/DetailsContext";
import Skills from "./Components/Skills/Skills";
import Profile from "./Components/Profile/Profile";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Language from "./Components/Language/Language";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [jobTitle, setJobTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [facebookLink, setFacebookLink] = useState('');
  const [linkedinLink, setLinkedInLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [skills, setSkills] = useState([]);
  const [profile, setProfile] = useState('');
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [languages, setLanguages] = useState([]);
  
  const handleImageChange = (event) => {
    const image = event.target.files[0];
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(image);
    }
  };

  const handleUpload = () => {
    setUploadedImage(selectedImage);
  };

  return (
    <DetailsContext.Provider
      value={{
        selectedImage,
        uploadedImage,
        jobTitle,
        firstName,
        lastName,
        email,
        phone,
        address,
        country,
        city,
        facebookLink,
        linkedinLink,
        githubLink,
        websiteLink,
        skills,
        profile,
        experiences,
        education, 
        languages, 
        handleImageChange,
        handleUpload,
        setJobTitle,
        setFirstName,
        setLastName,
        setEmail,
        setPhone,
        setAddress,
        setCountry,
        setCity,
        setFacebookLink,
        setLinkedInLink,
        setGithubLink,
        setWebsiteLink,
        setSkills,
        setProfile,
        setExperiences,
        setEducation,
        setLanguages,
      }}
    >
      <div className="app">
        <Header />
        <div className="root">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className="paper content1">
                <PersonalDetails />
                <Links />
                <Skills />
                <Profile />
                <Experience />
                <Education />
                <Language />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className="paper content2">
                <Resume />

              </Paper>

            </Grid>
          </Grid>
        </div>
      </div>
    </DetailsContext.Provider>
  );
}

export default App;
