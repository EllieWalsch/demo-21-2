import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import NavBar from "./components/nav-bar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
