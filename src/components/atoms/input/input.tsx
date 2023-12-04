export type InputProps = {
  type: string;
  value: string;
  onChange: (event: any) => void;
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    />
  );
};

export default Input;
