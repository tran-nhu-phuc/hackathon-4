import "./header.css";
import { FaCommentMedical } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CgDarkMode } from "react-icons/cg";
import React, { useState } from "react";
interface Props {
  handleClickDark: Function;
  searchContent: Function;
}
const Header: React.FC<Props> = (props: Props) => {
  const [node, setNode] = useState<string>("");
  props.searchContent(node);
  return (
    <header className="container-header">
      <div className="head">
        <h2>
          Reviews TA Béc Cọp !!!
          <FaCommentMedical className="dark" />
        </h2>
        <button>
          .
          <CgDarkMode onClick={() => props.handleClickDark()} />
        </button>
      </div>
      <div className="search-header">
        <div className="box-search">
          <CiSearch className="icon-search" />
          <input
            type="search"
            placeholder="search here.."
            onChange={(e) => setNode(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
