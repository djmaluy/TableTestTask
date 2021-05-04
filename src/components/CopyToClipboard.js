import React, { useState, useCallback } from "react";
import { Button, Typography } from "@material-ui/core";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { useCopyToClipboard } from "react-use";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import "./CopyToClipboard.css";

const STATUS_COPY = {
  COPY: "copy",
  COPIED: "copied",
};
const TITLE_BY_STATUS = {
  [STATUS_COPY.COPY]: "copy",
  [STATUS_COPY.COPIED]: "copied",
};
export const CopyToClipboard = ({ text }) => {
  const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);
  const [, copyToClipboard] = useCopyToClipboard();

  const copyToClipBoardHandler = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy(STATUS_COPY.COPIED);
  }, [copyToClipboard, text]);

  const onClickAway = useCallback(() => {
    setStatusCopy(STATUS_COPY.COPY);
  }, [setStatusCopy]);
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Tooltip title={TITLE_BY_STATUS[statusCopy]} placement="top-end">
        <Button className="copyText" onClick={copyToClipBoardHandler}>
          <FileCopyOutlinedIcon fontSize="small" className="copyIcon" />
          <span className="textInner">{text}</span>
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};
