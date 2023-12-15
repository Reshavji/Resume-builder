import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Resume from "./Components/Resume/Resume";
import PersonalDetails from "./PersonalDetails/PersonalDetails";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [jobTitle, setJobTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

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

  const handleDetailsSubmit = () => {
    console.log({
      jobTitle,
      firstName,
      lastName,
      email,
      phone,
      country,
      city,
    });
  };

  return (
    <div className="app">
      <Header />
      <div className="root">
        <Grid container spacing={3}>
            {/* Pass necessary props to the PersonalDetails component */}
            <PersonalDetails
              selectedImage={selectedImage}
              handleImageChange={handleImageChange}
              handleUpload={handleUpload}
              setJobTitle={setJobTitle}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setPhone={setPhone}
              setCountry={setCountry}
              setCity={setCity}
             
            />
          <Grid item xs={12} sm={6}>
            <Paper className="paper content2">
              <Resume
                uploadedImage={uploadedImage}
                firstName={firstName}
                lastName={lastName}
                jobTitle={jobTitle}
                phone={phone}
                email={email}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
