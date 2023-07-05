import { useState } from "react";
import useSound from "use-sound";
import sound2 from "../../assets/sounds/suono3.mp3";

import styles from "./InputToggle.module.scss";

const InputToggle = ({ toggled }) => {
  const [isToggled, setIsToggled] = useState(toggled);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    play2;
  };

  const [play2] = useSound(sound2);

  return (
    <label className={styles.InputToggle}>
      <input
        className={styles.input}
        type="checkbox"
        defaultChecked={isToggled}
        onClick={() => handleToggle()}
      />
      <span className={styles.toggle} />
    </label>
  );
};

export default InputToggle;
