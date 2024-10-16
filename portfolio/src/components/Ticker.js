// src/components/Ticker.js

const Ticker = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">{children}</div>
    </div>
  );
};

export default Ticker;
