import './App.css';
import Header from './Components/Header/Header';
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const handleDownload = () => {
    
  };
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
          <Grid item xs={12} sm={6}>
            <Paper className="paper content1">
              <Typography variant="h6" gutterBottom>
                Personal Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Wanted job title"
                    variant="outlined"
                    fullWidth
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input
                    type="file"
                    style={{ display: 'none' }}
                    id="upload-button"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="upload-button" style={{ display: 'block' }}>
                    <Button
                      variant="contained"
                      component="span"
                      className='upload-btn'
                     
                    >
                      {selectedImage ? (
                        <img
                          src={selectedImage}
                          alt="Selected"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <CloudUploadIcon />
                      )}
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleUpload}
                      disabled={!selectedImage}
                      style={{ width: '50%' }}
                    >
                      Upload
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Country"
                    variant="outlined"
                    fullWidth
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="City"
                    variant="outlined"
                    fullWidth
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <Button variant="contained" onClick={handleDetailsSubmit}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            
            <Paper className="paper content2">
              <div className='contain'>
                <div className='part, part1'>
                {uploadedImage ? (
  <img
    src={uploadedImage}
    alt="Uploaded"
    id='profile-img'
  />
) : (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
    alt="Uploaded"
    id='profile-img'
  />
)}

              <div>
              <p>{ jobTitle ||"JobTitle"}</p>
              <p>{firstName || "Name"} {lastName}</p>
                <p>{email || "Email"}</p>
                <p>Phone: {phone}</p>
                <p>Country: {country}</p>
                <p>City: {city}</p>
              </div>
                </div>
              <div className='part'>
                <h1>Information</h1>
              </div>
              </div>
              <button className='Download' onClick={handleDownload}>
        Download Resume
      </button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
