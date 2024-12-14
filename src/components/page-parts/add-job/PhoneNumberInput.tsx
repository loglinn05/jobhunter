import { InputText } from "primereact/inputtext";

interface PhoneNumberInputProps {
  id: string;
  label: string;
  value: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const PhoneNumberInput = ({
  id,
  label,
  value,
  setFieldValue,
}: PhoneNumberInputProps) => {
  const validateInput = (
    event: React.FormEvent<HTMLInputElement>,
    validatePattern: boolean
  ) => {
    const target = event.currentTarget;

    if (validatePattern) {
      if (target.value.length > 0) {
        setFieldValue(id, target.value);
      }
      return;
    }

    if (target.value.length > 0) {
      target.value = value ?? "";
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <InputText
        id={id}
        value={value}
        keyfilter={/^[+]?(\d+)?$/}
        validateOnly
        onInput={(e) => validateInput(e, true)}
        onBlur={(e) => validateInput(e, false)}
        placeholder="+15002334545"
      />
    </div>
  );
};

export default PhoneNumberInput;
