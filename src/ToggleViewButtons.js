import React, { useCallback } from "react";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { VIEW_MODE } from "./constants";

export const ToggleViewButtons = ({ viewMode, setViewMode }) => {
  const handleChange = useCallback(
    (_, nextView) => {
      setViewMode(nextView);
    },
    [setViewMode]
  );

  return (
    <ToggleButtonGroup value={viewMode} exclusive onChange={handleChange}>
      <ToggleButton
        value={VIEW_MODE.GRID}
        aria-label={VIEW_MODE.GRID}
        data-testid="contacts-viewmode-grid"
      >
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton
        value={VIEW_MODE.TABLE}
        aria-label={VIEW_MODE.TABLE}
        data-testid="contacts-viewmode-table"
      >
        <ViewListIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
