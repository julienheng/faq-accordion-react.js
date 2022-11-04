import React, { useState } from "react";
import Header from "./Header";
import FAQ from "./FAQ";

function App() {
  const [faqs, setFaqs] = useState([
    {
      question: "How many team members can I invite?",
      answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
      open: true,
    },
    {
      question: "What is the maximum file upload size? ",
      answer: "No more than 2GB. All files in your account must fit your allotted storage space. ",
      open: false,
    },
    {
      question: "How do I reset my password?",
      answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
      open: false,
    },
    {
      question: "Can I cancel my subscription? ",
      answer: "Yes! Send us a message and we’ll process your request no questions asked.",
      open: false,
    },
    {
      question: "Do you provide additional support?",
      answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  // display to the webpage
  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
