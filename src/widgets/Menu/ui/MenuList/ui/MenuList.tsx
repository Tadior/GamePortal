import { Fragment, useState } from "react";
import { Listbox } from "@headlessui/react";
import { ReactComponent as CheckIcon } from "../../../../../assets/check.svg";
import cls from "./MenuList.module.css";
import { CategoriesType } from "../../../../../consts/CATEGORIES";
import { SortByType } from "../../../../../consts/SORT_BY";

interface MenuListProps {
  currentValue: CategoriesType | SortByType;
  optionsData: ReadonlyArray<CategoriesType | SortByType>;
  callback: ((value: CategoriesType) => void) | ((value: SortByType) => void);
}

export const MenuList = (props: MenuListProps) => {
  const { currentValue, optionsData, callback } = props;
  const [selectedItem, setSelectedItem] = useState(currentValue);

  return (
    <Listbox
      value={selectedItem}
      onChange={(value) => {
        setSelectedItem(value);
        callback(value);
      }}
    >
      <Listbox.Button className={cls.ListButton}>{selectedItem}</Listbox.Button>
      <Listbox.Options className={cls.ListOptions}>
        {optionsData.map((category) => (
          /* Use the `active` state to conditionally style the active option. */
          /* Use the `selected` state to conditionally style the selected option. */
          <Listbox.Option key={category} value={category} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={[`${active && cls.Active}`, `${cls.Item}`].join(" ")}
              >
                {/* <div className={cls.Wrapper}> */}
                {selected && <CheckIcon className={cls.Icon} />}
                {category}
                {/* </div> */}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
