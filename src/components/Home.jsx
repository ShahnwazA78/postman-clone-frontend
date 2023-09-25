import { useContext, useEffect, useState } from "react";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { DataContext } from "../context/DataProvider";
import { checkParams } from "../utils/common-utils";
import { getData, handleSubmitData } from "../service/api";

//components
import Form from "./Form";
import SelectTab from "./SelectTab";
import SnackBar from "./SnackBar";
import Header from "./Header";
import Response from "./Response";
import ErrorScreen from "./ErrorScreen";
import HistoryTab from "./HistoryTab";
import { padding } from "@mui/system";

const useStyles = makeStyles({
  component: {
    width: "100%",
    display: "flex",
    // justifyContent:"center",
    // alignItems: "center",
  },
  form: {
    width: "70%",
    margin: "1rem",
    padding: "1rem",
  },
  HistoryTab: {
    // justifySelf: "flex-start",
    // alignSelf: "flex-start",
    maxWidth: "15rem",
  },
});

const Home = () => {
  const classes = useStyles();

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorResponse, setErrorResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState({});

  const { formData, jsonText, paramData, headerData, setHistoryData } =
    useContext(DataContext);

  const onSendClick = async () => {
    if (!checkParams(formData, jsonText, paramData, headerData, setErrorMsg)) {
      setError(true);
      return false;
    }

    let response = await getData(formData, jsonText, paramData, headerData);
    let response2 = await handleSubmitData(
      formData,
      jsonText,
      paramData,
      headerData
    );

    setHistoryData(JSON.parse(response2).allhistoryData);

    if (response === "error") {
      setErrorResponse(true);
      return;
    } else {
      setApiResponse(JSON.parse(response2));
      setErrorResponse(false);
    }
  };

  useEffect(() => {
    if (apiResponse != null) {
    }
  }, [apiResponse]);
  return (
    <>
      <Header />
      <Box className={classes.component}>
        <Box className={classes.HistoryTab}>
          <HistoryTab />
        </Box>
        <Box className={classes.form}>
          <Form onSendClick={onSendClick} />
          <SelectTab />
          {errorResponse ? <ErrorScreen /> : <Response data={apiResponse} />}
        </Box>
      </Box>
      {error && (
        <SnackBar errorMsg={errorMsg} error={error} setError={setError} />
      )}
    </>
  );
};

export default Home;
