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
    fontWeight: "bold",
  },

  /// Dashboard......///
  cardLabel: {
    textTransform: "uppercase",
    textAlign: "center",
    color: blueGrey[500],
    fontWeight: "600",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  cardTitle: {
    textTransform: "capatilize",
    textAlign: "center",
    color: blueGrey[800],
    fontWeight: "600",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
  ratioBtn: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  cardContent: {
    position: "relative",
  },

  DisplayCardGraph: {
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100% !important",
    height: "45% !important",
  },

  // user Graph Trafic
  DisplayuserGraph:{
    width:"100%",
    minHeight:"300px",
    height:"auto",

  },

  // Center progress bar
  CenterPrograssbar:{
    minHeight:"250px",
    display:'flex',
    flexFlow:"row wrap",
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },

  Footer:{
    backgroundColor:'#feffee',
    padding:theme.spacing(1,1,1,33),
    [theme.breakpoints.down("sm")]:{
      padding:theme.spacing(1,1),
      marginTop:"10px"
    }

  }
}));
