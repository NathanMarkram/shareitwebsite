import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './Logo2.png';
import Favicon from './Favicon1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  return (
    <Section>
      <header>
        <div className="centered-no-bottom">
          <img src={Favicon} alt="ShareIt Favicon" />
          <img src={logo} alt="ShareIt logo" />
        </div>
      </header>
    </Section>
  );
}

function Section({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <div className="section" data-aos="fade-up">{children}</div>;
}

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Section>
          <div className="centered">
            <div className="content-left-text">
              <h1>Welcome to ShareIt!</h1>
              <p>Say goodbye to awkward IOUs and complicated group payments!</p>
              <p>ShareIt is a receipt scanning app that lets you easily split expenses with your friends. </p>
              <p>Simply scan a receipt, add your friends to the receipt, and select the items that each person paid for. </p>
              <p>ShareIt will automatically calculate how much each person owes. </p>
            </div>
            <div className="content-right-image">
              <img src="./Images/HomePage.jpg" alt="ShareIt Homepage Screenshot" className="screenshot" />
            </div>
          </div>
        </Section>

        <Section>
          <h1>Key Features</h1>
          <div className="centered-no-top">
            <div className="content-left-image">
              <img src="./Images/ReceiptItems.jpg" alt="ShareIt Receipt Items Screenshot" className="screenshot" />
            </div>
            <div className="content-right-text">
              <h3>Scan receipts and automatically extract purchase details</h3>
            </div>
          </div>
        </Section>

        <Section>
          <div className="centered">
            <div className="content-left-text">
              <h3>Add friends to a receipt and assign items to each person</h3>
            </div>
            <div className="content-right-image">
              <img src="./Images/ReceiptItemsfilled.jpg" alt="ShareIt Receipt Items Filled Screenshot" className="screenshot" />
            </div>
          </div>
        </Section>

        <Section>
          <div className="centered">
            <div className="content-left-image">
              <img src="./Images/Summary.jpg" alt="ShareIt Summary Page Screenshot" className="screenshot" />
            </div>
            <div className="content-right-text">
              <h3>Split expenses by the actual amount paid</h3>
            </div>
          </div>
          </Section>
        {/* <h2>Get Started</h2>
        <p>Download ShareIt today and start splitting expenses with ease!</p> */}
        <button className="download-button">Coming Soon</button>


      </div>
    </div>
  );
}
// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Get all the sections in the page
  const sections = document.querySelectorAll(".section");

  // Set the opacity of all sections to 0
  sections.forEach(section => {
    section.style.opacity = "0";
  });

  // Set the opacity of the first section to 1
  sections[0].style.opacity = "1";

  // Set a threshold for the IntersectionObserver
  const options = {
    threshold: 0.5
  };

  // Create an IntersectionObserver object
  const observer = new IntersectionObserver(function (entries, observer) {
    // Loop through all the entries
    entries.forEach(entry => {
      // If the entry is intersecting (more than 50% of it is visible)
      if (entry.isIntersecting) {
        // Set the opacity of the entry's target (the section) to 1
        entry.target.style.opacity = "1";
      } else {
        // Set the opacity of the entry's target (the section) to 0
        entry.target.style.opacity = "0";
      }
    });
  }, options);

  // Observe all the sections
  sections.forEach(section => {
    observer.observe(section);
  });
});

ReactDOM.render(<App />, document.getElementById('root'));
