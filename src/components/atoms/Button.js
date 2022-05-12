const Button = (props) => {
  const { 
    className, 
    onClick, 
    text 
} = props.buttonData;

  return (
    <button className={className} onClick={onClick}>
      {text?text:props.children}
    </button>
  );
};

export default Button;
