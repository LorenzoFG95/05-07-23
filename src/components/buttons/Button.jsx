import React, { useState, useEffect } from "react";

import styles from "./Button.module.scss";

import useSound from "use-sound";

import sound3 from "../../assets/sounds/suono3.mp3";

import { FaArrowRight } from "react-icons/fa6";

const Button = (props) => {
  const [play3] = useSound(sound3);
  const {
    icon,
    iconLeft,
    label,
    outline,
    size,
    square,
    pill,
    rounded,
    text1,
    text2,
  } = props || null;

  return (
    <div
      onClick={play3}
      className={`
        ${styles.Button}
        ${iconLeft ? styles.iconLeft : ""}
        ${outline ? styles.outline : styles.fill}
        ${size ? styles[size] : styles.md}
        ${square ? styles.square : styles.default}
        ${pill && styles.pill}
        ${rounded && styles.rounded}
        ${text1 && styles.text1}
        ${text2 && styles.text2}
     `}
    >
      {label && !square && label}
      {icon && <FaArrowRight />}
    </div>
  );
};

export default Button;
