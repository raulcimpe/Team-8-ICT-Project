import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    businessName: "",
    businessStage: "",
    businessDescription: "",
    businessIndustry: "",
    taxRegistered: "",
    postcode: "",
    businessContact: "",
    website: "",
    socialMedia: [],
    socialLinks: "",
    supportType: "",
    helpAreas: [],
    additionalDetails: "",
    foundVia: "",
    isStudentOrAlumni: "",
    agreedToTerms: false,
    agreedToSurvey: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleMultiSelect = (e) => {
    const { options } = e.target;
    const selectedValues = Array.from(options).filter((opt) => opt.selected).map((opt) => opt.value);
    setFormData((prevState) => ({
      ...prevState,
      helpAreas: selectedValues,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={handleChange} required />

        <label>Last Name</label>
        <input type="text" name="lastName" onChange={handleChange} required />

        <label>Email Address</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Contact Number</label>
        <input type="tel" name="contactNumber" onChange={handleChange} required />

        <label>Business Name</label>
        <input type="text" name="businessName" onChange={handleChange} required />

        <label>At what stage are you in your business?</label>
        <select name="businessStage" onChange={handleChange} required>
          <option value="">--Select--</option>
          <option value="developing">Currently developing a business idea</option>
          <option value="trading">Started trading but developing model</option>
          <option value="solidModel">Solid business model</option>
        </select>

        <label>Briefly describe your business idea or model</label>
        <textarea name="businessDescription" onChange={handleChange} rows="4" required></textarea>

        <label>Which business industry/sector does your business operate in?</label>
        <input type="text" name="businessIndustry" onChange={handleChange} required />

        <label>Have you registered your business for tax purposes?</label>
        <div className="radio-group">
          <input type="radio" name="taxRegistered" value="yes" onChange={handleChange} required /> Yes
          <input type="radio" name="taxRegistered" value="no" onChange={handleChange} required /> No
        </div>

        <h3>Business Details</h3>
        <label>Registered Business Postcode</label>
        <input type="text" name="postcode" onChange={handleChange} required />

        <label>Business Contact Number</label>
        <input type="tel" name="businessContact" onChange={handleChange} />

        <label>Company Website</label>
        <input type="url" name="website" onChange={handleChange} />

        <label>Do you use any social media channels for your business?</label>
        <div className="checkbox-group">
          {["Facebook", "LinkedIn", "Twitter", "Instagram", "TikTok", "None", "Other"].map((channel) => (
            <div key={channel}>
              <input
                type="checkbox"
                name="socialMedia"
                value={channel}
                onChange={handleMultiSelect}
              />{" "}
              {channel}
            </div>
          ))}
        </div>

        <label>Social Media Links</label>
        <textarea name="socialLinks" onChange={handleChange} rows="3"></textarea>

        <label>What type of help are you looking for?</label>
        <select name="supportType" onChange={handleChange} required>
          <option value="">--Select--</option>
          <option value="hireStudent">I want to hire a student/graduate</option>
          <option value="businessAdvice">I need business advice</option>
        </select>

        <label>Areas you need help with</label>
        <select name="helpAreas" multiple onChange={handleMultiSelect}>
          {[
            "Accounting and Finance",
            "Branding",
            "Business Planning/Strategy",
            "Funding",
            "Market Research",
            "Marketing Strategy",
            "Pitching",
            "Engineering",
            "IT - Option 1",
            "Legal - Option 1",
          ].map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>

        <label>Please specify what you are looking for</label>
        <textarea name="additionalDetails" onChange={handleChange} rows="4" required></textarea>

        <label>Where did you hear about Solutionise?</label>
        <select name="foundVia" onChange={handleChange} required>
          <option value="">--Select--</option>
          <option value="website">LSBU Website</option>
          <option value="socialMedia">Social Media</option>
          <option value="referral">Referral</option>
          <option value="event">On-campus event</option>
          <option value="publication">Publication</option>
        </select>

        <label>Are you a student or alumni of LSBU?</label>
        <div className="radio-group">
          <input type="radio" name="isStudentOrAlumni" value="yes" onChange={handleChange} required /> Yes
          <input type="radio" name="isStudentOrAlumni" value="no" onChange={handleChange} required /> No
        </div>

        <label>
          <input type="checkbox" name="agreedToTerms" onChange={handleChange} required />
          I agree to the Terms and Conditions and the Privacy Policy
        </label>

        <label>
          <input type="checkbox" name="agreedToSurvey" onChange={handleChange} />
          I agree to complete a short survey upon completion of services
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
