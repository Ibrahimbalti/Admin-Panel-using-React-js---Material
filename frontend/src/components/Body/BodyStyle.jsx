
import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

 export const useStyles = makeStyles((theme) => ({
    section: {
      margin: theme.spacing(3, 0),
    },
    pageSubtitle: {
      color: blueGrey[500],
      marginBottom: theme.spacing(1),
      textTransform: "uppercase",
    },
    pageTitle: {
      color: blueGrey[800],
      margin: theme.spacing(0, 0),
      textTransform: "capatilize",
      fontWeight:'bold'
    },
  }));