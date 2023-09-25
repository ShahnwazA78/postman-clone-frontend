import { Typography, Box, TextareaAutosize } from "@mui/material";

const textareaStyle = {
  width: "97%",
  // padding: 10,
  background: `url(http://i.imgur.com/2cOaJ.png)`,
  backgroundAttachment: "local",
  backgroundRepeat: "no-repeat",
  paddingLeft: 30,
  paddingTop: 12,
  borderColor: "#ccc",
};

const Response = ({ data }) => {
  delete data.allhistoryData;
  const newData = JSON.stringify(data, null, 2);
//   let readableobj = "{ \n";
//   for (let key in obj) {
//     readableobj += "\t";
//     readableobj +=
//       typeof obj[key] === "string"
//         ? `${key}: "${obj[key]}"`
//         : `${key}: ${obj[key]}`;
//     if (Object.keys(obj).pop() !== key.toString()) {
//       readableobj += ",\n";
//     }
//   }
//   readableobj += "\n}";

  return (
    <Box>
      <Typography mt={2} mb={2}>
        Response
      </Typography>
      <TextareaAutosize
        minRows={3}
        maxRows={5}
        style={textareaStyle}
        disabled="disabled"
        value={newData}
      />
    </Box>
  );
};

export default Response;
