function Button({ type, children, onClick, onDoubleClick }) {
  return (
    <button
      type={type}
      className="button"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {children}
    </button>
  );
}

export default Button;
