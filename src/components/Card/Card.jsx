import React from "react";

const Card = ({ title, content, className, children, position = "top" }) => {
  return (
    <div>
      {position === "top" ? (
        <>
          {children}
          <div className={className}>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </>
      ) : (
        <>
          <div className={className}>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>

          {children}
        </>
      )}
    </div>
  );
};

export default Card;
