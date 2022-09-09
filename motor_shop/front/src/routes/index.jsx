import { Route, Routes } from "react-router";
import { Profile } from "../page/profile";
import { Home } from "../page/home";
export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
