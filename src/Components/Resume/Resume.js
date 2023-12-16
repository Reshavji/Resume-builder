import React, { useContext } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";
import { DetailsContext } from "../Context/DetailsContext";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 10,
  },
  sectionLeft: {
    width: "30%",
    marginRight: 10,
    display: "flex",
    alignItems: "center",
    color: "#fff",
    padding: 20,
    backgroundColor: "#131d36c9",
  },
  sectionRight: {
    width: "70%",
    padding:15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bolder',
    marginBottom: 5, 
  },
  jobtitle:{
    fontSize: 12,
    fontWeight: "bolder",
    color:"#fff",
    marginRight:5,
    marginBottom:5,
  },
  text: {
    fontSize: 11,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: "5px 0", 
    alignItems: "flex-start", 
  },
  subHeading: {
    fontSize: 15,
    fontWeight: "bold",
    color:"#000",
    marginRight:5,
    marginTop:10,
    marginBottom:5,
  },
  subText: {
    fontSize: 12,
    fontWeight: "bold",
    color:'#babdc8',
  },
  profileImage: {
    marginBottom:10,
    height: 80,
    width: 80,
    borderRadius: "50%",
  },
  link: {
    textDecoration: 'underline',
    color: 'blue',
    cursor: 'pointer',
  },
  progressBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  progressBar: {
    width: '100px',
    height: 5,
    backgroundColor: '#fff2',
    marginBottom: 5,
  },
  progress: {
    height: '5px',
    backgroundColor: '#191970',
  },
  '@media max-width: 768px': {
    sectionLeft: {
      width: '100%',
      marginRight: 0, 
    },
    sectionRight: {
      width: '100%', 
    },
    page: {
      flexDirection: 'column', 
    },
    profileImage: {
      height: 60,
      width: 60,
      borderRadius: '50%', 
    },}
  

});
const MyDocument = ({
  uploadedImage,
  firstName,
  lastName,
  jobTitle,
  phone,
  email,
  address,
  country,
  city,
  facebookLink,
        linkedinLink,
        githubLink,
        websiteLink,
        skills,
        profile,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.sectionLeft}>
        {uploadedImage ? (
          <Image src={uploadedImage} style={styles.profileImage} />
        ) : (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
            style={styles.profileImage}
          />
        )}
        <View style={styles.section}>
          <Text style={styles.Heading}>
            {firstName || "Name"} {lastName}
          </Text>
          <Text style={styles.jobtitle}>{jobTitle || "JobTitle"}</Text>
          <Text style={styles.subHeading}>Details</Text>
          <Text style={styles.subText}>Address</Text>
          <Text style={styles.text}>
            {`${address} ${city} ${country}` || "Address"}
          </Text>

          <Text style={styles.subText}>Phone</Text>
          <Text style={styles.text}>{phone}</Text>
          <Text style={styles.subText}>Email</Text>
          <Text style={styles.text}>{email}</Text>
          <Text style={styles.subHeading}>Links</Text>
         
          <Text style={styles.text}> <Image
    src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"
    alt="Facebook Logo"
    style={{ width: 20}} // Adjust the width or styles as needed
  />{facebookLink || "Facebook"}</Text>
          <Text style={styles.text}> <Image
    src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png"
    alt="Facebook Logo"
    style={{ width: 20}} // Adjust the width or styles as needed
  />{linkedinLink || "Linkedin"}</Text>
  <Text style={styles.text}> <Image
    src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
    alt="Facebook Logo"
    style={{ width: 20}} // Adjust the width or styles as needed
  />{githubLink || "Github"}</Text>
  <Text style={styles.text}> <Image
    
    src="https://cdn4.iconfinder.com/data/icons/software-line/32/software-line-02-512.png"
    alt="Facebook Logo"
    style={{ width: 20}} // Adjust the width or styles as needed
  />{websiteLink || "Website"}</Text>
<Text style={styles.subHeading}>Skills</Text>
  <View style={styles.progressBarContainer}>
  {skills.map((skill, index) => (
    <View key={index}>
      <Text style={styles.text}>{skill.skill}</Text>
      <View style={styles.progressBar}>
        <View
          style={{
            ...styles.progress,
            width: `${skill.level}px`,
          }}
        />
      </View>
    </View>
  ))}
</View>

        </View>
        {/* Additional personal details can be added here */}
        
        
      </View>
      <View style={styles.sectionRight}>
        <View style={styles.section}>
          <Text style={styles.heading}>Profile</Text>
          <Text style={styles.text}>
            {profile}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          <Text style={styles.text}>
            A highly motivated individual with a passion for technology and a
            proven track record in web development.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <Text style={styles.text}>
            - React.js, JavaScript, HTML, CSS{"\n"}- Node.js, Express.js{"\n"}-
            Database Management (SQL, MongoDB){"\n"}- Responsive Web Design
            {"\n"}- Problem-solving and Analytical Skills
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <Text style={styles.text}>
            - React.js, JavaScript, HTML, CSS{"\n"}- Node.js, Express.js{"\n"}-
            Database Management (SQL, MongoDB){"\n"}- Responsive Web Design
            {"\n"}- Problem-solving and Analytical Skills
          </Text>
        </View>
        {/* Add more sections like Experience, Projects, Hobbies, etc. */}
      </View>
    </Page>
  </Document>
);

const Resume = () => {
  const {
    uploadedImage,
    firstName,
    lastName,
    jobTitle,
    phone,
    email,
    address,
    country,
    city,
    facebookLink,
        linkedinLink,
        githubLink,
        websiteLink,
       skills,
       profile,
    // Add other state values if needed
  } = useContext(DetailsContext);
  return (
      <PDFViewer width="100%" height="100%">
        <MyDocument
          uploadedImage={uploadedImage}
          firstName={firstName}
          lastName={lastName}
          jobTitle={jobTitle}
          phone={phone}
          email={email}
          address={address}
          country={country}
          city={city}
          facebookLink={facebookLink}
        linkedinLink ={linkedinLink}
        githubLink ={githubLink}
        websiteLink ={websiteLink}
        skills={skills}
        profile={profile}
        />
      </PDFViewer>
  );
};

export default Resume;
