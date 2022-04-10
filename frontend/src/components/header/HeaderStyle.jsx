import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
 export const useStyles = makeStyles((theme) => ({
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

    ///......................Wraper of Contanier ..............//
    wraping:{
      // height:'190vh',
      backgroundColor:'#efefef',
      padding:theme.spacing(10,2,0,34),
      [theme.breakpoints.down("sm")]:{
        padding:theme.spacing(2,2)
      }
    }
    
  }));

  export default useStyles