import  { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const faqData = [
  {
    question: "How do I register for a tournament?",
    answer: `
    You can register by clicking the “Register Now” button on the Chess or Pool 
    tournament pages, or by navigating to the /register route. From there, you’ll 
    fill out a short form with your details, choose a username, and submit. 
    You’ll receive a confirmation email or message once your registration is complete.
    `,
  },
  {
    question: "Is there a registration fee to join a tournament?",
    answer: `
    It depends on the specific tournament. Many of our online events are free, but 
    certain high-stakes tournaments may require a small entry fee. The tournament 
    listing will clearly indicate whether a fee is required and how to make payment.
    `,
  },
  {
    question: "Can I join multiple tournaments at the same time?",
    answer: `
    Absolutely! As long as the tournament schedules do not conflict, you are free 
    to participate in multiple events. Keep an eye on the match timings to ensure 
    you can attend all your scheduled games.
    `,
  },
  {
    question: "What are the rules for Chess tournaments?",
    answer: `
    Our Chess tournaments follow standard FIDE rules. This includes time controls 
    (e.g., blitz or classical formats), piece movement, and scoring. We also maintain 
    a fair-play policy that disallows external engine assistance or coaching during 
    live games.
    `,
  },
  {
    question: "What are the rules for Pool tournaments?",
    answer: `
    Pool tournaments can vary based on the game format (8-ball, 9-ball, etc.). 
    Generally, we use standard WPA (World Pool-Billiard Association) rules for 
    fouls, breaks, and scoring. Specific rules will be outlined in each event's 
    description before you sign up.
    `,
  },
  {
    question: "How do I find out who I am playing against?",
    answer: `
    Once the tournament brackets are generated, you’ll see a list of matchups on 
    the tournament page. Each player’s name or username is displayed alongside 
    the scheduled time of the match. You can also check your personal dashboard 
    to see your upcoming opponents.
    `,
  },
  {
    question: "Are there any prizes?",
    answer: `
    Yes! Prizes vary by tournament. They can include trophies, cash rewards, 
    merchandise, or even digital rewards like gift cards. Check the tournament 
    details page to see what’s up for grabs. 
    `,
  },
  {
    question: "Can beginners participate?",
    answer: `
    Definitely. Our tournaments welcome players of all skill levels. Many events 
    include multiple brackets or divisions, ensuring fair competition for everyone 
    from newcomers to seasoned pros.
    `,
  },
  {
    question: "How do I report a match result or dispute?",
    answer: `
    If a match result seems incorrect or if there's a dispute, you can contact 
    our support team through the “Contact Us” page. Provide your match ID, the 
    nature of the dispute, and any evidence (e.g., screenshots). We’ll review 
    the situation and resolve it as quickly as possible.
    `,
  },
  {
    question: "What if I need to withdraw or forfeit?",
    answer: `
    If you need to withdraw from a tournament, navigate to your dashboard and 
    look for the “Withdraw” option next to your current tournament listing. 
    If you are mid-tournament, you may need to formally forfeit your current 
    match. Please note that in some cases, entry fees may not be refundable.
    `,
  },
];

export default function FAQPage() {
  // Keep track of which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    // If the same question is clicked, close it; otherwise open the new one
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white px-4 py-16 flex flex-col items-center"
        style={{ backgroundImage: 'url(/src/assets/images/P2.webp)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' }}>
        <div className="max-w-3xl w-full">
            <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

            {faqData.map((item, index) => (
            <FAQItem
                key={index}
                index={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={handleToggle}
            />
            ))}
        </div>
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onToggle, index }) {
  return (
    <div className="bg-gray-700 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => onToggle(index)}
        className="w-full flex justify-between items-center p-4 focus:outline-none"
      >
        <span className="text-left font-semibold">{question}</span>
        {isOpen ? (
          <AiOutlineMinus className="text-2xl" />
        ) : (
          <AiOutlinePlus className="text-2xl" />
        )}
      </button>

      {isOpen && (
        <div className="p-4 pt-0 text-gray-200 border-t border-gray-600 leading-relaxed break-words">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
