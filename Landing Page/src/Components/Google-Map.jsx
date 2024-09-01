import React from 'react';

const GoogleMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0060394430693!2d72.83461397504053!3d19.10739098210376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1725210087483!5m2!1sen!2sin"
        width="1520"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="SVKM's Dwarkadas J. Sanghvi College of Engineering"
      ></iframe>
    </div>
  );
}

export default GoogleMap;