import { useState, useEffect } from "react";
import { VIEW_MODE } from "../../constants";

const getInitialViewMode = () => {
  return localStorage.getItem("viewMode") || VIEW_MODE.TABLE;
};

export const useViewMode = () => {
  const [viewMode, setViewMode] = useState(getInitialViewMode);

  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  return [viewMode, setViewMode];
};
