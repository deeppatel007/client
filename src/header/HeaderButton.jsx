import { Box,Button,makeStyles, Typography,Badge,withStyles } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
            aliginItems:'center'
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
           <Button variant="contained" className={classes.login}>Login</Button>
           <TypoGraphy style={{marginTop:5,fontsize:12}}>More</TypoGraphy>
           <Box className={classes.container}>
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCartIcon style={{marginTop:2}}></ShoppingCartIcon>
               </Badge>
               <TypoGraphy style={{marginTop:5,marginLeft:10, fontsize:12}}> Cart</TypoGraphy>
           </Box>
       </Box>


   ) 
}

export default HeaderButton;