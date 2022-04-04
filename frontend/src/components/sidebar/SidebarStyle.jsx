import { makeStyles } from "@material-ui/core/styles";
import { blue,blueGrey } from "@material-ui/core/colors";
 const useStyles = makeStyles((theme) => ({
    drawerPaper:{
        width:'250px',
        marginTop:'64px',
        [theme.breakpoints.down("sm")]:{
          marginTop:'0px'
        }
    },
    navlinks:{
      color:blueGrey["A200"],
      
      "&:hover , &:hover div":{
        color:blue["A700"]
      },
      "& div ":{
        color:blueGrey["A400"],
      },
      "& active ":{
        color:blueGrey["A700"],
      },
    },

    activeNavlinks:{
      color:blue["A700"]
    },
    "&.active , &.active div":{
      color:blue["A700"],
      background:'red'
    },
    
    navButton:{
      width:'100%',
      textTransform:'capitalize'
    }
  }));

  export default useStyles