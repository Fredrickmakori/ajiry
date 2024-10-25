import "./ui.css";

const Button = ({ type, text }) => {
  const buttonStyle = type === "nav" ? "btn-nav" : "btn-blue";
  const handleClick = (e) => {
    if (type === "submit") {
      e.preventDefault();
    }
  };

  return (
    <button className={buttonStyle} onClick={handleClick}>
      <p className="btn-nav-text">{text}</p>
    </button>
  );
};

export default Button;
