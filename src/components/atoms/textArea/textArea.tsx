export type TextAreaProps = {
  value: string;
  onChange: (event: any) => void;
};

const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      value={props.value}
      onChange={props.onChange}
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    ></textarea>
  );
};

export default TextArea;
