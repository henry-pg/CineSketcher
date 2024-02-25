

const Button = ({ text, onClick, classes = '' }) => {
    return (
        <button onClick={onClick} className={`bg-dark hover:bg-gray text-white py-2 px-4 rounded ${classes}`}>
            {text}
        </button>
    );
};
export default Button;