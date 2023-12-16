import React, { useContext } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { DetailsContext } from "../Context/DetailsContext";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    width: "100%",
  },
  sectionLeft: {
    width: "30%",
    marginRight: 30,
    display: "flex",
    alignItems: "center",
    color: "#fff",
    padding: 10,
    backgroundColor: "#6e91b6",
  },
  sectionRight: {
    width: "70%",
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5, // Added margin bottom for consistent spacing
  },
  text: {
    fontSize: 12,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: "5px 0", // Use a string value for padding with object notation
    alignItems: "flex-start", // Align text content to the start
  },
  subHeading: {
    fontSize: 15,
    fontWeight: "bold",
    color:"#000",
    marginBottom: 3, // Added margin bottom for consistent spacing
  },
  subText: {
    fontSize: 13,
    fontWeight: "bold",
    color:"#000",
    marginBottom: 3, // Added margin bottom for consistent spacing
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: "50%",
  },
  link: {
    textDecoration: 'underline',
    color: 'blue',
    cursor: 'pointer',
  },
  '@media max-width: 768px': {
    sectionLeft: {
      width: '100%', // Occupy full width on smaller screens
      marginRight: 0, // Remove right margin on smaller screens
    },
    sectionRight: {
      width: '100%', // Occupy full width on smaller screens
    },
    page: {
      flexDirection: 'column', // Stack content in a column on smaller screens
    },
    profileImage: {
      height: 60,
      width: 60,
      borderRadius: '50%', // Adjust profile image size for smaller screens
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
          <Text style={styles.text}>{jobTitle || "JobTitle"}</Text>
          <Text style={styles.subHeading}>Details</Text>
          <Text style={styles.subText}>Address</Text>
          <Text style={styles.text}>
            {`${address} ${city} ${country}` || "Address"}
          </Text>

          <Text style={styles.subText}>Phone</Text>
          <Text style={styles.text}>{phone || "Phone"}</Text>
          <Text style={styles.subText}>Email</Text>
          <Text style={styles.text}>{email || "Email"}</Text>
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
        </View>
        {/* Additional personal details can be added here */}
        
        
      </View>
      <View style={styles.sectionRight}>
        <View style={styles.section}>
          <Text style={styles.heading}>Profile</Text>
          <Text style={styles.text}>
            A highly motivated individual with a passion for technology and a
            proven track record in web development.
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
    // Add other state values if needed
  } = useContext(DetailsContext);
  return (
    <div>
      <PDFDownloadLink
        document={
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
          />
        }
        fileName="resume.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
      <PDFViewer width="100%" height="600">
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
        />
      </PDFViewer>
    </div>
  );
};

export default Resume;
