type LabelProps = {
  text: string;
};

const Label: React.FC<LabelProps> = (props) => {
  return (
    <label
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {props.text}
    </label>
  );
};

export default Label;
