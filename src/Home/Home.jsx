import { Box,makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import Banner from "./Banner";

const useStyle = makeStyles({
    component:{
        padding:10,
        background:"#F2F2F2"
    }
}
)
const Home = () =>
{
    const classes = useStyle();
    return(
        <div>
            <NavBar></NavBar>
            <Box className={classes.component}>
            <Banner></Banner>
            </Box>
            
        </div>

    )
}

export default Home;