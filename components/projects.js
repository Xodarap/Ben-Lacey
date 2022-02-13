import ImageIcon from '@material-ui/icons/Image';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import ShortTextIcon from '@material-ui/icons/ShortText';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import HighlightIcon from '@material-ui/icons/Highlight';
import CakeIcon from '@material-ui/icons/Cake';
import FlightIcon from '@material-ui/icons/Flight';
import ProjectCard from './project_card';
import Typography from '@material-ui/core/Typography'
import { Container, Link } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridList: {
    marginTop: '10px',
    '& li': {
      listStyle: 'none'
    }
  },
}));

export default function Projects() {
  const classes = useStyles();

  return <Container maxWidth="lg">
    <Grid container className={classes.gridList} spacing={2} justify='space-between'>
      {cardInfo.map(card =>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <ProjectCard classes={classes} {...card} key={card.title} />
        </Grid>)}
    </Grid></Container>
}

const cardInfo = [
  {
  avatar: <HttpIcon />,
  title: "This Site",
  subheader: 'Valentine\'s Day 2022',
  image: 'recursive.png',
  text: <><Typography variant="body2" color="textSecondary" component="p">
    Site made to record all the presents I give Lacey
   </Typography>
  </>,
  links: [
    { href: '/', icon: <HttpIcon /> },
  ]
},
  {
  avatar: <FlightIcon />,
  title: "Las Vegas",
  subheader: 'Anniversary 2021',
  image: 'anniversary.jpg',
  text: <><Typography variant="body2" color="textSecondary" component="p">
    Trip to Vegas for our second Anniversary
   </Typography>
  </>,
  links: []
},
  {
  avatar: <CakeIcon />,
  title: "Halloween Party",
  subheader: 'Halloween 2021',
  image: 'halloween.jpg',
  text: <><Typography variant="body2" color="textSecondary" component="p">
    Since Lacey was sad that I would be out of town for Halloween I 
    tried to organize a party for us and some friends
   </Typography>
  </>,
  links: []
},
  {
  avatar: <MusicNoteIcon />,
  title: "Interior Crocodile Alligator",
  subheader: 'Lacey\'s Birthday 2021',
  image: 'Crocodile.png',
  text: <><Typography variant="body2" color="textSecondary" component="p">
    Harlem Renaissance jazz style song commissioned for Lacey's' birthday
   </Typography>
  </>,
  links: [
    { href: '/images/Crocodile Alligator.pdf', icon: <ImageIcon /> },
    { href: 'audio/Interior Crocodile Alligator.mp4', icon: <MusicNoteIcon /> },
  ]
},
  {
  avatar: <ImageIcon />,
  title: "Shigella painting",
  subheader: 'Valentine\'s Day 2021',
  image: 'Colorful revised 2 small.png',
  text: <><Typography variant="body2" color="textSecondary" component="p">
    Artwork commissioned to celebrate Valentine's Day. The primary focal point shows Lacey using Python to defeat Shigella 
        (celebrating the CDC updating their treatment guidelines in response to Lacey's research).
        In the background are the number of animals it's estimated that Lacey has saved by being vegetarian.
   </Typography>
  
  </>,
  links: [
    { href: '/images/Colorful revised 2.png', icon: <ImageIcon /> },
  ]
},
  {
  avatar: <FlightIcon />,
  title: "Trip to San Diego",
  subheader: 'Christmas 2020',
  image: 'San Diego.png',
  text: <><Typography variant="body2" color="textSecondary" component="p">
   </Typography>
  
  </>,
  links: [ ]
},
  {
  avatar: <ShortTextIcon />,
  title: "Sonnet 130v2: Vine Girl",
  subheader: 'Lacey\'s Birthday 2020',
  image: '',
  text: <><Typography variant="body2" color="textPrimary" component="p">
My girl has never been to oovoo javer<br/>
Nor has she tasted fre shavoca do<br/>
And yet when we're at home together<br/>
She still tells me: country boy, I love you<br/><br/>
My girl has the most amazing smile<br/>
And she always washes her and her clothes<br/>
You know she steps the fuck up unlike Kyle<br/>
And she is thicker than a bowl of oats<br/><br/>
She would never spill in Valentino<br/>
Like hurricane tortilla she's got speed<br/>
And when I wake her she just says hello<br/>
She's 19 but never learned to read<br/><br/>
But I wrote a sonnet for her birthday<br/>
At her birthday party on her birthday
   </Typography>
  </>,
  links: []
},
  {
  avatar: <HighlightIcon />,
  title: "Otoscope",
  subheader: 'Lacey\'s Birthday 2020',
  image: 'otoscope.jpeg',
  text: <><Typography variant="body2" color="textPrimary" component="p">
Gross
   </Typography>
  </>,
  links: []
},
  {
  avatar: <HttpIcon />,
  title: "Pretty Federal Register",
  subheader: 'Valentine\'s Day 2020',
  image: 'pfrpng.png',
  text: <><Typography variant="body2" color="textSecondary" component="p">
    To celebrate Lacey's love of bureaucracy, I updated my Federal Register extension
    to  wwish her a happy Valentine's Day.
   </Typography>
  </>,
  links: [
    { href: 'https://github.com/Xodarap/pretty-federal-register', icon: <GitHubIcon /> },
    { href: 'https://chrome.google.com/webstore/detail/pretty-federal-register/cgjlhmppbpnbbjlpjjoeondekegbnndc', icon: <HttpIcon /> },
  ]
},
]