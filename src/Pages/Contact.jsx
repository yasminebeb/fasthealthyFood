// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });

//   const [errors, setErrors] = useState({});

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};

//     // ✅ Name validation (no numbers)
//     if (/\d/.test(formData.name)) {
//       newErrors.name = "Name should not contain numbers.";
//     }

//     // ✅ Email validation (must contain "@")
//     if (!formData.email.includes("@")) {
//       newErrors.email = "Email must include '@'.";
//     }

//     setErrors(newErrors);

//     // If no errors → submit (for now just console)
//     if (Object.keys(newErrors).length === 0) {
//       console.log("Form submitted:", formData);
//       alert("Message sent successfully!");
//       // Optionally reset form
//       setFormData({ name: "", email: "", phone: "", message: "" });
//     }
//   };

//   return (
//     <>
//       <div className="max-w-6xl mx-auto p-4 py-12 text-amber-50">
//         <h2 className="text-3xl font-bold mb-8 text-center text-amber-50">
//           Contact Us
//         </h2>

//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#1c6056] p-8 rounded-2xl shadow-lg"
//         >
//           {/* Name */}
//           <div className="flex flex-col">
//             <label className="mb-2 font-semibold text-amber-200">Name</label>
//             <input
//               name="name"
//               type="text"
//               placeholder="Enter your name"
//               value={formData.name}
//               onChange={handleChange}
//               className="p-3 rounded-lg bg-[#10413a] text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
//               required
//             />
//             {errors.name && (
//               <p className="text-red-400 text-sm mt-1">{errors.name}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div className="flex flex-col">
//             <label className="mb-2 font-semibold text-amber-200">Email</label>
//             <input
//               name="email"
//               type="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               className="p-3 rounded-lg bg-[#10413a] text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
//               required
//             />
//             {errors.email && (
//               <p className="text-red-400 text-sm mt-1">{errors.email}</p>
//             )}
//           </div>

//           {/* Phone */}
//           <div className="flex flex-col sm:col-span-2">
//             <label className="mb-2 font-semibold text-amber-200">Phone</label>
//             <input
//               name="phone"
//               type="tel"
//               placeholder="Enter your phone number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="p-3 rounded-lg bg-[#10413a] text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
//             />
//           </div>

//           {/* Message */}
//           <div className="flex flex-col sm:col-span-2">
//             <label className="mb-2 font-semibold text-amber-200">Message</label>
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Write your message here..."
//               value={formData.message}
//               onChange={handleChange}
//               className="p-3 rounded-lg bg-[#10413a] text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
//               required
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div className="sm:col-span-2 flex justify-center">
//             <button
//               type="submit"
//               className="bg-[#86ff58] font-bold py-2 mt-2 px-6 rounded text-green-950 hover:bg-[#a8ff7a] transition duration-300"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Contact;
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-[800px] mx-auto text-amber-50 p-6 pt-12">
      <h2 className="text-3xl font-semibold pb-6 text-center">Contact Us</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          className="p-3 rounded-lg bg-[#ccf2df] text-[#1c6056] placeholder-[#1c6056]"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="p-3 rounded-lg bg-[#ccf2df] text-[#1c6056] placeholder-[#1c6056]"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="p-3 rounded-lg bg-[#ccf2df] text-[#1c6056] placeholder-[#1c6056]"
          type="tel"
          placeholder="Your Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          className="p-3 rounded-lg bg-[#ccf2df] text-[#1c6056] placeholder-[#1c6056]"
          rows="4"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          className="bg-[#1c6056] text-white py-2  mb-7 px-6 rounded-lg hover:bg-[#174f45] transition"
        >
          Send Message
        </button   >
      </form>

      {submitted && (
        <div className="mt-8 bg-[#ccf2df] text-[#1c6056] p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Message Sent Successfully!</h3>
          <p>
            Your name is <strong>{name}</strong>, your email is{" "}
            <strong>{email}</strong>, and your phone number is{" "}
            <strong>{phone || "not provided"}</strong>.
          </p>
          <p className="mt-3">
            You wrote to us the following message:
            <br />
            <em>"{message}"</em>
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;