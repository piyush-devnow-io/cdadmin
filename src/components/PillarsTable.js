import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import * as Constants from './constants';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const preventDefault = (event) => event.preventDefault();

  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={3}>
      {props.pillarsData.map((pillar) => (
                <Grid item xs={4}>
                <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                   {pillar.pillarName.charAt(0)}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                    
                  </IconButton>
                }
                title={pillar.pillarName}
                subheader={pillar.dateCreated}
              />
              <CardMedia
                className={classes.media}
                image={pillar.imageUrl}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
              
              <CardActions disableSpacing>
                <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label="Details" value="recents" icon={<RestoreIcon />} href={"/pillar/detail/" + pillar.pillarId} />
                <BottomNavigationAction label="Lessons" value="favorites" icon={<FavoriteIcon />} href={"/pillar/lessons/" + pillar.pillarId} />
                <BottomNavigationAction label="Quotes" value="nearby" icon={<LocationOnIcon />} href={"/pillar/quotes/" + pillar.pillarId} />
                <BottomNavigationAction label="Behaviours" value="folder" icon={<FolderIcon />} href={"/pillar/behaviours/" + pillar.pillarId} />
                </BottomNavigation>
                
                
              </CardActions>  
              
            </Card>
            
                </Grid>
                
      ))}
      </Grid>

    
  );
}
