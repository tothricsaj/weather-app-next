import Button from "../Button/Button";
import classes from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={classes.wrapper}>
      <input type="text" />
      <Button action={ () => console.log('seach button') } />
    </div>
  );
}