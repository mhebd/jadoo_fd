import React from 'react';

function SectionHeading({ tag, heading }) {
  return (
    <div className="sec-heading">
      <p className="tag-line">${tag}</p>
      <h2 className="heading">{heading}</h2>
    </div>
  );
}

export default SectionHeading;
