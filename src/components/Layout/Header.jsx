import React, { useState } from "react";
import { Header as HeaderUI, BoxTextInput } from "pi-ui";
import { NavLink, withRouter } from "react-router-dom";
import Logo from "src/assets/logo.svg";
import styles from "./Header.module.css";

const Header = ({ history }) => {
  const [query, setQuery] = useState("");
  return (
    <HeaderUI className={styles.header}>
      <NavLink to="/">
        <img src={Logo} alt="presentation" />
      </NavLink>
      <div className={styles.headerContainer}>
        <BoxTextInput
          name="search"
          value={query}
          placeholder="Search for hashes"
          searchInput={true}
          rounded={true}
          inputClassName={styles.searchInput}
          className={styles.searchBox}
          onChange={e => setQuery(e.target.value)}
          onSubmit={() => {
            history.push(`results#hashes=${query}`);
            window.location.reload();
          }}
        />
      </div>
    </HeaderUI>
  );
};

export default withRouter(Header);
