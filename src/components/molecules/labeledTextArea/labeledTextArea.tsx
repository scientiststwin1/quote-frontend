import Label, { LabelProps } from '../../atoms/label/label';
import TextArea, { TextAreaProps } from '../../atoms/textArea/textArea';

type LabeledTextAreaProps = LabelProps & TextAreaProps;

const LabeledTextArea: React.FC<LabeledTextAreaProps> = (props) => {
  return (
    <div>
      <Label text={props.text} />
      <TextArea text="" />
    </div>
  );
};

export default LabeledTextArea;
