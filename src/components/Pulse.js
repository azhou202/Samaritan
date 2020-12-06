import './Conscious.css';
import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import pulse1 from '../pictures/pulse1.PNG'
import pulse2 from '../pictures/pulse2.PNG'
import Alert from '@material-ui/lab/Alert';

function Pulse() {
  const [open, setOpen] = useState(JSON.parse(localStorage.getItem("open")));
  let history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 300,
      // paddingTop: '56.25%', // 16:9
    },
    button: {
      height: 100,
      width:200,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }));
  const classes = useStyles();

  function yesClick(){
    localStorage.setItem("pulse", true)
    history.push("/results")
  }
  function noClick(){
    localStorage.setItem("pulse", false)
    history.push("/results")
  }
  return (
    <div className="Pulse">
    <Collapse in={!open}>
      <Alert severity="error" >Disclamer: If you suspect a medical emergency, call 911 immediately before or instead of proceeding with this page</Alert>
    </Collapse>
    <Container fixed>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Typography variant="h4" >
        Check for a pulse:
      </Typography>
      <br></br><br></br>
      <Typography variant="h6" >
        How to check for a pulse
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={pulse1}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                FOR CHILD OR ADULT
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              1. Place one hand on the victim’s forehead
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              2. Place 2 fingers on the front of the neck
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              3. Slide the fingers down into the groove at the side of the neck
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={pulse2}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                FOR INFANT
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              1. Place one hand on the infant's forehead
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
              2. Use the other hand to find the brachial pulse on the inside of the upper arm,
                between the infant's elbow and shoulder.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br></br><br></br><br></br><br></br>
      <Button className={classes.button} variant="contained" color="default" value="false" onClick={noClick}>No</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button className={classes.button} variant="contained" color="secondary" value="true" onClick={yesClick}>Yes</Button>

      </Container>
    </div>

  );
}

export default Pulse;