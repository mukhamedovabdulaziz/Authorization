import { Navigate, Routes, Route } from "react-router-dom";
import { Pages } from "./routes";
import { ERROR_ROUTE } from "../../utils/constants/page.routes";

const AppRouter = () => {
  return (
    <Routes>
      {Pages.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={ERROR_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
