import { useState } from "react";
import { Dialog } from "@headlessui/react";
import cls from "./ErrorModal.module.css";
interface ErrorModalProps {
  callback: (arg: boolean) => void;
  status: boolean;
}

export const ErrorModal = (props: ErrorModalProps) => {
  const { callback, status } = props;

  return (
    <Dialog
      className={cls.ErrorModal}
      open={status}
      onClose={() => callback(false)}
    >
      <Dialog.Panel>
        <Dialog.Title>Error</Dialog.Title>
        <Dialog.Description>
          Something goes wrong, try again !
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  );
};
