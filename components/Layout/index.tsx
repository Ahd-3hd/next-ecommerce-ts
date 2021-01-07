import { Wrapper } from "./index.style";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  );
};

export default Layout;
