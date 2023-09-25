import { Box, Button, Tooltip, Typography } from "@mui/material/node";
import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { height } from "@mui/system";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { DataContext } from "../context/DataProvider";
const useStyels = makeStyles({
  histroryTabInner: {
    width: "100%",
    border: "1px solid #ccc",
    height: "100%",
  },
});
const getIcons = (type) => {
  if (type == "get") {
    return <CompareArrowsIcon />;
  }
  if (type == "post") return <PostAddIcon />;
  if (type == "put") return <SystemUpdateAltIcon />;
  if (type == "delete") return <DeleteIcon />;
};
const HistoryTab = () => {
  const { historyData, setFormData, setParamData, setHeaderData } =
    useContext(DataContext);
  const classes = useStyels();
  const historyTab = [
    {
      id: 1,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/login",
      type: "post",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 2,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/me",
      type: "get",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 3,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/update/me",
      type: "put",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 4,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/delete/me",
      type: "delete",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 1,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/login",
      type: "post",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 2,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/me",
      type: "get",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 3,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/update/me",
      type: "put",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 4,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/delete/me",
      type: "delete",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 1,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/login",
      type: "post",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 2,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/me",
      type: "get",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 3,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/update/me",
      type: "put",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 4,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/delete/me",
      type: "delete",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 1,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/login",
      type: "post",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 2,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/me",
      type: "get",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 3,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/update/me",
      type: "put",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 4,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/delete/me",
      type: "delete",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 1,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/login",
      type: "post",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 2,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/me",
      type: "get",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 3,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/update/me",
      type: "put",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
    {
      id: 4,
      url: "https://social-media-backend-pearl.vercel.app/api/v1/delete/me",
      type: "delete",
      params: {},
      header: {
        "Content-Type": "Application/json",
      },
      body: {
        email: "testing@gmail.com",
        password: "testing",
      },
    },
  ];
  const handleClickHistory = (newFormdata) => {
    const data = {
      url: newFormdata.url,
      type: newFormdata.method.toUpperCase(),
    };
    setFormData(data);
  };
  return (
    <>
      <Box className={classes.histroryTabInner}>
        <Typography
          my={1}
          p={2}
          sx={{
            font: "bold 1.2rem monospace",
            borderBottom: "4px solid #F26B3A",
          }}
        >
          History Tab
        </Typography>
        <Box
          className="history_tabs"
          sx={{ overflow: "auto", maxHeight: "32rem" }}
        >
          {historyData &&
            historyData.reverse().map((element) => (
              <Tooltip title={element.method} arrow>
                <Button
                  onClick={() => handleClickHistory(element)}
                  size="small"
                  variant="noStyle"
                  sx={{
                    textTransform: "none",
                    padding: 1,
                    margin: "0",
                    textAlign: "left",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                  startIcon={getIcons(element.method)}
                >
                  {element.url}
                </Button>
              </Tooltip>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default HistoryTab;
