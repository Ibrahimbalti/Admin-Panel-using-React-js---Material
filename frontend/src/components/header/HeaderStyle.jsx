import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
 const useStyles = makeStyles((theme) => ({
    toolbar:{
      display:'flex',
      flexFlow:'row wrap',
      justifyContent:'space-between'
    },
    navlist:{
        minWidth:'250px',
        maxWidth:'300px'
    },
    navAvatar:{
        width:'32px',
        height:'32px'
    },
    ulAvatar:{
        backgroundColor:blue["A200"],
        color:'white'
    },
    
  }));

  export default useStyles