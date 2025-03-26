import { useEffect } from "react";
import { useLocation } from "react-use";
import "./portal.module.css";

export const getEntity = pathname => {
  if (pathname?.includes("question")) {
    return "queryLab";
  }

  return "insights";
};

const PortalComponent = () => {
  const location = useLocation();
  const pageName = getEntity(location?.pathname);

  useEffect(() => {
    // Insert it right after #root (as a sibling)
    const rootDiv = document.getElementById("root");
    if (pageName) {
      rootDiv.setAttribute("data-phokus-page", pageName);
    } else {
      rootDiv.setAttribute("data-phokus-page", pageName);
    }
  }, [pageName]);

  return null;
};

export default PortalComponent;
