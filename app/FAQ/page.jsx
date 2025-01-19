"use client"
import React,{ useState }from 'react'

const page = () => {
    const [faqOpen, setFaqOpen] = useState(null);

    const toggleFaq = (index) => {
      setFaqOpen(faqOpen === index ? null : index);
    };
  
  return (
    <div className=''>
         <section className="py-12 text-center bg-[#D9EFF8]">
        <h2 className="text-4xl font-semibold font-newsreader tracking-normal">Frequently Asked Questions</h2>

        <div className="mt-6 w-3/4 mx-auto ">
          {[
            {
              question: "What is Workwise?",
              answer: "Workwise is a platform that streamlines procurement and contract management for businesses."
            },
            {
              question: "How can Workwise help my business grow?",
              answer: "By offering tools to optimize procurement processes, secure better contracts, and increase efficiency."
            },
            {
              question: "How secure is my data on Workwise?",
              answer: "We use advanced encryption and data protection measures to ensure your data is safe."
            },
            {
              question: "How do I get started with Workwise?",
              answer: "Sign up on our platform, explore the features, and start optimizing your procurement."
            },
            {
              question: "Is Workwise suitable for small businesses?",
              answer: "Absolutely! Workwise is designed to support businesses of all sizes."
            }
          ].map((faq, index) => (
            <div key={index} className="border-b py-4">
              <button
                className="w-full text-left flex justify-between items-center font-newsreader text-xl font-semibold"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span>{faqOpen === index ? '-' : '+'}</span>
              </button>
              {faqOpen === index && (
                <p className="mt-2 text-gray-700 font-newsreader text-lg text-left">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default page
