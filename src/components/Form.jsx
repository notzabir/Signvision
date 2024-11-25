import { useState } from 'react';
import BackgroungImg from '../assets/bg.png'

export const Form = () => {
  const [firstName, setFirstName] = useState('');  // First name input
  const [lastName, setLastName] = useState('');  // Last name input
  const [message, setMessage] = useState('');  // The input message
  const [loading, setLoading] = useState(false);  // Loading state during submission
  const [error, setError] = useState('');  // Error state for failed submission

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page refresh on submit
    setLoading(true);  // Show loading state
    setError('');  // Clear previous error messages

    // Basic validation: Ensure name and message are provided
    if (!firstName || !lastName || !message) {
      setError('Please fill out all fields.');
      setLoading(false);
      return;
    }

    // Here you would usually send the data to a server, e.g., using fetch or Axios
    // For now, just simulate success
    setTimeout(() => {
      setLoading(false);
      alert('Message sent successfully!');
      setFirstName('');  // Clear the form fields
      setLastName('');
      setMessage('');
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative" id="form">
        <img src={BackgroungImg} className="top-0 left-0 w-full h-full object-cover"/>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md hover:scale-105 absolute">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6" style={{ fontFamily: "sans-serif" }}>Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName" style={{ fontFamily: "sans-serif" }}>
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full px-3 py-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ fontFamily: "sans-serif" }}  // Update first name state
              placeholder="Enter your first name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="lastName" style={{ fontFamily: "sans-serif" }}>
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full px-3 py-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ fontFamily: "sans-serif" }}  // Update last name state
              placeholder="Enter your last name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message" style={{ fontFamily: "sans-serif" }}>
              Your Message
            </label>
            <textarea
              id="message"
              className="w-full h-24 px-3 py-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ fontFamily: "sans-serif" }}  // Update message state
              placeholder="Type your message here"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}  {/* Show error message */}

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              disabled={loading}
              style={{ fontFamily: "sans-serif" }}  // Disable the button while loading
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
