
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { IconButton } from 'material-ui'
import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function ProjectCard({ avatar, title, subheader, image, text, links}) {
  const classes = useStyles();

  return <Card className={classes.root}>
    <CardHeader avatar={avatar} title={title} subheader={subheader} />
    {image && <CardMedia className={classes.media} image={`/images/${image}`} />}
    <CardContent>
      {text}
    </CardContent>
    <CardActions disableSpacing>
      {links.map(link => <Link href={link.href} key={link.href}>
        <IconButton >
          {link.icon}
        </IconButton>
      </Link>)}
    </CardActions>
  </Card>
}