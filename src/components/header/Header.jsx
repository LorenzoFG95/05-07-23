import styles from "./Header.module.scss";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuItems = [
    {
      id: 1,
      label: "Primo",
      items: [
        { id: 1, label: "Primo A" },
        { id: 2, label: "Primo B" },
        { id: 3, label: "Primo C" },
      ],
    },
    {
      id: 2,
      label: "Secondo",
      items: [
        { id: 1, label: "Secondo A" },
        { id: 2, label: "Secondo B" },
        { id: 3, label: "Secondo C" },
      ],
    },
    {
      id: 3,
      label: "Terzo",
      items: [
        { id: 1, label: "Terzo A" },
        { id: 2, label: "Terzo B" },
        { id: 3, label: "Terzo C" },
      ],
    },
  ];
  const handleOpenMenu = (item) => {
    if (item === openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(item);
    }
  };
  return (
    <header>
      <div className="container">
        <div
          className={`${styles.contenitore} flex align-items-center justify-content-between`}
        >
          <div className="col-3">Logo</div>
          <div className="col-6">
            <ul className={`${styles.menuItem} flex`}>
              {menuItems?.map((item) => (
                <li
                  key={item?.id}
                  onClick={() => {
                    handleOpenMenu(item?.id);
                  }}
                >
                  <div className={styles.menuItem__label}>
                    <span>{item?.label}</span>{" "}
                    <span>
                      <FaChevronDown />
                    </span>
                  </div>
                  <div
                    className={`${styles.menuItem__dropdown} 
                    
                    ${openMenu && openMenu === item?.id ? styles.open : ""}`}
                  >
                    <ul>
                      {item?.items?.map((subItem) => (
                        <li key={subItem?.id}>
                          <span>{subItem?.label}</span>{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-3">Actions</div>
        </div>
      </div>
    </header>
  );
};
export default Header;
