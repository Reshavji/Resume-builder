import React, { useContext } from 'react';
import { DetailsContext } from '../Context/DetailsContext';
import { Grid, TextField, Typography, Button } from '@material-ui/core';

const Education = () => {
  const { education, setEducation } = useContext(DetailsContext);
  if (education.length === 0) {
    setEducation([
      {
        collegeName: '', course: '', startDate: '', endDate: '',
      },
    ]);
  }
  const handleInputChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    if (education.length < 5) {
      setEducation([
        ...education,
        { collegeName: '', course: '', startDate: '', endDate: '' },
      ]);
    }
  };

  return (
    <Grid item xs={12} style={{ marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Education
        </Typography>
      {education.map((edu, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`College Name ${index + 1}`}
              variant="outlined"
              fullWidth
              value={edu.collegeName || ''}
              onChange={(e) => handleInputChange(index, 'collegeName', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`Course ${index + 1}`}
              variant="outlined"
              fullWidth
              value={edu.course || ''}
              onChange={(e) => handleInputChange(index, 'course', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`Start Date ${index + 1}`}
              variant="outlined"
              fullWidth
              type="month"
              value={edu.startDate || ''}
              onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`End Date ${index + 1}`}
              variant="outlined"
              fullWidth
              type="month"
              value={edu.endDate || ''}
              onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
            />
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={addEducation}
          disabled={education.length >= 5}
        >
          Add Education
        </Button>
      </Grid>
    </Grid>
  );
};

export default Education;
