import { motion } from "framer-motion";
import { FaTruck, FaCheckCircle, FaHeadset, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="grid-container">
      {/* Header Section */}
      <motion.div
        className="grid-x grid-padding-x align-center about-header text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="cell small-12">
          <h1 className="primary-title">
            About <span className="highlight">ElectroMart</span>
          </h1>
          <p className="subheader">Your trusted destination for high-quality electronics.</p>
        </div>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="grid-x grid-padding-x align-center">
        <motion.div
          className="cell medium-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2>Our Mission</h2>
          <p>To provide the best electronic gadgets with top-notch customer service.</p>
        </motion.div>

        <motion.div
          className="cell medium-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2>Our Vision</h2>
          <p>To be the leading global electronics marketplace trusted by millions.</p>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose text-center">
        <h2>Why Choose Us?</h2>
        <div className="grid-x grid-margin-x">
          {[
            { icon: <FaCheckCircle />, title: "Quality Assurance", desc: "Only top-rated electronics with warranty." },
            { icon: <FaTruck />, title: "Fast Delivery", desc: "Get your products delivered on time." },
            { icon: <FaHeadset />, title: "24/7 Support", desc: "Our team is available for assistance anytime." },
            { icon: <FaUsers />, title: "Trusted by Thousands", desc: "We serve thousands of happy customers worldwide." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="cell medium-3 small-6"
              whileHover={{ scale: 1.1 }}
            >
              <div className="card">
                <div className="card-section">
                  <div className="feature-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="reviews text-center">
        <h2>What Our Customers Say</h2>
        <div className="grid-x grid-margin-x">
          {[
            { text: "Amazing experience! Quick delivery and great product quality!", author: "Sarah Johnson" },
            { text: "ElectroMart never disappoints. Love their customer service!", author: "Michael Lee" },
            { text: "Best place for electronics shopping. Highly recommended!", author: "Emily Davis" }
          ].map((review, index) => (
            <motion.div
              key={index}
              className="cell medium-4 small-12"
              whileHover={{ scale: 1.05 }}
            >
              <div className="card">
                <div className="card-section">
                  <p className="review-text">"{review.text}"</p>
                  <strong>- {review.author}</strong>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-info text-center">
        <h2>Contact Us</h2>
        <p>Email: support@electromart.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Tech Street, Silicon Valley, CA</p>
      </div>
    </div>
  );
};

export default AboutUs;
