import React, { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false); // State to manage hover effect

  const serviceList = [
    { emoji: "🩺", name: "Medical/Paramedical" },
    { emoji: "🛠", name: "Engineering" },
    { emoji: "💻", name: "Information Technology" },
    { emoji: "📈", name: "Business & Management" },
    { emoji: "👗", name: "Fashion Designing" },
    { emoji: "👗", name: "Modeling" },
    { emoji: "🎨", name: "Arts & Design" },
    { emoji: "🧑‍🏫", name: "Teacher" },
    { emoji: "🧑🏼‍✈️", name: "Airlines" },
  ];

  const subOptions = {
    "Medical/Paramedical": ["MBBS", "Dentist", "Nursing - BSc", "GNM", "ANM", "Lab Technician", "Pharma - B.Pharm", "D.Pharm"],
    "Engineering": ["Mechanical", "Civil", "Electrical", "Computer Science", "Electronics", "Automobile", "Aerospace"],
    "Teacher": ["B-ed", "D-ed"],
    "Airlines": ["Cabin-crew", "Pilot", "ground staff"],
    "Business & Management": ["BBA", "BCom", "MBA", "MCom", "CA"],
    "Fashion Designing": ["B.Des", "M.Des", "B.Ftech", "M.Ftech"],
    "Arts & Design": ["BFA", "MFA", "BVA"],
    "Modeling": ["Diploma in Modeling", "Bachelor of Arts in Fashion Modeling", "Certificate Course in Modeling", "Advanced Diploma in Modeling", "Master's in Fashion and Modeling"],
    "Information Technology": ["B.Tech in Information Technology", "BCA (Bachelor of Computer Applications)", "B.Sc in Information Technology", "M.Tech in Information Technology", "MCA (Master of Computer Applications)"]
  };

  const handleSelect = (name) => {
    setSelectedService(selectedService === name ? null : name);
  };

  const handleSubOptionClick = (option) => {
    setPopupMessage(`For detailed guidance about ${option}, feel free to contact us!`);
  };

  const closePopup = () => {
    setPopupMessage("");
  };

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <p
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={isHovered ? "hovered-text" : ""}
      >
        <u>Admission/Placement</u>
      </p>

      <div className="service-buttons">
        {serviceList.map((service, index) => (
          <button
            key={index}
            className={`service-button ${selectedService === service.name ? "selected" : ""}`}
            onClick={() => handleSelect(service.name)}
          >
            {service.emoji} {service.name}
          </button>
        ))}
      </div>

      {selectedService && (
        <div className="sub-options">
          {subOptions[selectedService]?.map((option, index) => (
            <div key={index} className="sub-option" onClick={() => handleSubOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}

      {popupMessage && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>{popupMessage}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
