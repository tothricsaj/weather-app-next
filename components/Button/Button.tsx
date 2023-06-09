import Icon, { IconTypes } from "../Icon/Icon";

import classes from "./Button.module.css";

export interface ButtonProps {
  text?: string;
  action: () => void
}

export default function Button(props: ButtonProps) {
  const { text, action } = props;

  return (
    <button className={classes.button} onClick={action}>
      {text || null}
      <Icon type={IconTypes.SEARCH} dimension={20} />
    </button>
  );
}