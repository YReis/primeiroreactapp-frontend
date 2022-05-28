import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Lista(props) {
  return (
    <List
      sx={{ width: "100%", maxWidth: "700px", bgcolor: "background.paper" }}
    >
      {props.list.map((each, index) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={each.imgsrc} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="subtitle2"
                  color="primary"
                >
                  {each.title}
                </Typography>
              }
              secondary={
                <React.Fragment>
                  {/* <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {each.author}
                  </Typography> */}
                  {each.review}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
}
