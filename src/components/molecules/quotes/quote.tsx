import { memo, useState } from 'react';
import Button from '../../atoms/button/button';

export type QuoteProps = {
  id: string;
  text: string;
  author: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string, author: string) => void;
};

const Quote: React.FC<QuoteProps> = (props) => {
  const [isTextHovered, setTextHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setTextHovered(true)}
      onMouseLeave={() => setTextHovered(false)}
      className="flex flex-col justify-center items-center w-full border-b-indigo-600 border-b"
    >
      <p className="w-full text-gray-800">{props.text}</p>
      <span className="self-end font-semibold">{props.author}</span>

      {isTextHovered && (
        <div className="w-full space-x-2 mb-3">
          <Button text="Delete" onClick={() => props.onDelete(props.id)} />
          <Button text="Edit" onClick={() => props.onEdit(props.id, props.text, props.author)} />
        </div>
      )}
    </li>
  );
};

export default memo(Quote);
