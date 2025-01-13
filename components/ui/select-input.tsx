import { FC } from "react";

interface SelectInputProps {
  id: string;
  text: string;
  type: "checkbox" | "radio";
  selectedOptions: string[];
  setSelectedOptions: (newValue: string[]) => void;
  allowMultiple?: boolean;
}

const SelectInput: FC<SelectInputProps> = ({
  id,
  text,
  type,
  selectedOptions,
  setSelectedOptions,
  allowMultiple,
}) => {
  const handleOptionsChange = (option: string) => {
    if (allowMultiple) {
      const currentIndex = selectedOptions.indexOf(option);
      const newSelectedOptions = [...selectedOptions];
      if (currentIndex === -1) {
        newSelectedOptions.push(option); // add the item
      } else {
        newSelectedOptions.splice(currentIndex, 1); // remove the item
      }
      setSelectedOptions(newSelectedOptions);
    } else {
      const newSelectedOptions = [option];
      setSelectedOptions(newSelectedOptions);
    }
  };
  return (
    <div className="flex items-center gap-x-2">
      <input
        type={type}
        id={id}
        checked={selectedOptions?.includes(id)}
        onChange={(e) => handleOptionsChange(id)}
        className="w-[15px] h-[15px] !rounded-xl !bg-transparent"
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default SelectInput;
