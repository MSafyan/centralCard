import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import FlagIcon from '@material-ui/icons/Flag';
import Button from '@material-ui/core/Button';
import ConCardMenu from './ConCardMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin:'2rem'
  },
  header:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  headerLeft:{
    display:"flex",
    alignItems:'center'
},
  headerTitle:{
    marginRight:'0.5rem'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerLeft}>
          <Button>
            <FlagIcon/>
          </Button>
          <Typography variant="h5" className={classes.headerTitle}>
            Launcing Soon
          </Typography>
        </div>
        <ConCardMenu/>
      </div>
      <CardMedia
        className={classes.media}
        image="asset1.jfif"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button color="primary" variant='contained' >Launch</Button>
      </CardActions>
      </Card>
  );
}
