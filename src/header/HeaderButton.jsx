import { Box,Button,makeStyles, Typography,Badge,withStyles } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from  'react-router-dom';
const useStyle = makeStyles({
    login:{
        background:'#FFFFFF',
        color:'#7874f0',
        textTransform:'none',
        fontWeight: 600,
        borderRadius:2,
        padding:'5px 40px',
        boxShadow:'none'
    },
    wapper:{
        margin:'0 5% 0 auto',
        display:'flex',
        fontSize:12,
        '&>*':{
            marginRight: 50,
            aliginItems:'center',
            textDecoration: 'none',
            color:'#fff'
             
        }

    },
    container:{
        display:'flex',

    }
})
const TypoGraphy = withStyles({
    root: {
      fontSize:12
    },
  })(Typography);
const HeaderButton = ()=>{
    const classes = useStyle();
   return (
       
       <Box className={classes.wapper}>
           <Link><Button variant="contained" className={classes.login}>Login</Button></Link>
           <Link><TypoGraphy style={{marginTop:5,fontsize:12}}>More</TypoGraphy></Link>
           <Link to="/Cart" className={classes.container}>
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCartIcon style={{marginTop:2}}></ShoppingCartIcon>
               </Badge>
               <TypoGraphy style={{marginTop:5,marginLeft:10, fontsize:12}}>Cart</TypoGraphy>
           </Link>
       </Box>


   ) 
}

export default HeaderButton;