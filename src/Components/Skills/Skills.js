import React, { useContext, useEffect } from 'react';
import { DetailsContext } from '../Context/DetailsContext';
import { Grid, TextField, Typography, Button } from '@material-ui/core';

function Skills() {
  const { skills, setSkills } = useContext(DetailsContext);

  useEffect(() => {
    if (skills.length === 0) {
      setSkills([{ skill: '', level: 0 }, { skill: '', level: 0 }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs only once

  const addSkill = () => {
    if (skills.length < 5) {
      setSkills([...skills, { skill: '', level: 0 }]);
    }
  };

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  return (
    <div className="skills">
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      {skills.map((skill, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`Skill ${index + 1}`}
              variant="outlined"
              fullWidth
              value={skill.skill}
              onChange={(e) => handleSkillChange(index, 'skill', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`Skill ${index + 1} Level`}
              variant="outlined"
              fullWidth
              type="number"
              value={skill.level}
              onChange={(e) =>
                handleSkillChange(index, 'level', parseInt(e.target.value, 10) || 0)
              }
            />
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={addSkill}
          disabled={skills.length >= 5}
        >
          Add Skill
        </Button>
      </Grid>
    </div>
  );
}

export default Skills;
