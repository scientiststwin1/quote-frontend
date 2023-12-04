import Input, { InputProps } from "../../atoms/input/input"
import Label, { LabelProps } from "../../atoms/label/label"


type LabeledInputProps = InputProps & LabelProps

const LabeledInput: React.FC<LabeledInputProps> = (props) => {
  return (
    <div>
        <Label text={props.text} />
        <Input type={props.type} onChange={props.onChange} />
    </div>
  )
}

export default LabeledInput