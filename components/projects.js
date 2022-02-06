import PetsIcon from '@material-ui/icons/Pets';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import TiktokIcon from './tiktok_icon';
import SpeedIcon from '@material-ui/icons/Speed';
import HttpIcon from '@material-ui/icons/Http';
import FaceIcon from '@material-ui/icons/Face';
import MoodIcon from '@material-ui/icons/Mood';
import FunctionsIcon from '@material-ui/icons/Functions';
import GavelIcon from '@material-ui/icons/Gavel';
import AssessmentIcon from '@material-ui/icons/Assessment';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ProjectCard from './project_card';
import Typography from '@material-ui/core/Typography'
import { Container, Link } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ShareIcon from '@material-ui/icons/Share';

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

const cardInfo = [{
  avatar: <PetsIcon />,
  title: "We Actually Rate Dogs",
  useless: true,
  image: 'ward.PNG',
  text: <><Typography variant="body2" color="textSecondary" component="p">
    We Rate Dogs is an extremely popular twitter account that purports to rate dogs, but actually gives all of them a score >10/10. In an attempt to make this more rigorous, I used a neural network to evaluate the picture of the dog in the tweet, then created a twitter bot to automatically respond with the dog's actual rating.
  </Typography>
    <br />
    <Typography variant="body2" color="textSecondary" component="p">
      The project was… divisive. Has been defunct since the account was blocked by We Rate Dogs October 2020.
  </Typography></>,
  links: [
    { href: 'https://twitter.com/actuallyratedog', icon: <TwitterIcon /> },
    { href: 'https://github.com/Xodarap/we-actually-rate-dogs', icon: <GitHubIcon /> },
    { href: 'https://www.tiktok.com/@benthamite/video/6872167459504311557', icon: <TiktokIcon /> }
  ]
},
{
  avatar: <SpeedIcon />,
  title: "Check His Height",
  useless: true,
  image: 'chh.png',
  text: <Typography variant="body2" color="textSecondary" component="p">
    There was a brief trend on TikTok of creators attempting to measure the height of their Tinder matches by comparing the person to objects in their background. CheckHisHeight.com uses a computer vision system to automate this process.
 </Typography>,
  links: [
    { href: 'https://www.checkhisheight.com/', icon: <HttpIcon /> },
    { href: 'https://www.tiktok.com/@benthamite/video/6842806740942146821', icon: <TiktokIcon /> }
  ]
},
{
  avatar: <MoodIcon />,
  title: "Tiktok Beautiful",
  useless: true,
  image: 'ttb.png',
  text: <><Typography variant="body2" color="textSecondary" component="p">
    I discovered old documentation from TikTok indicating that part of their recommendation algorithm is based on how attractive
    actors in each video are. I adapted a neural network
    from <Link href="https://arxiv.org/pdf/1801.06345.pdf">Liang et al. (2018)</Link> and created a site which let users evaluate
    their own attractiveness.
</Typography>
    <br />
    <Typography variant="body2" color="textSecondary" component="p">
      Some <Link href='https://www.tiktok.com/@benthamite/video/6842683376210644229'>users tried</Link> to use it to optimize their appearance. Has been defunct since receiving a cease-and-desist letter from TikTok in 2020.
 </Typography></>,
  links: [
    { href: 'https://www.tiktok.com/@benthamite/video/6838386972445248773', icon: <TiktokIcon /> }
  ]
},
{
  avatar: <FaceIcon />,
  title: "HairToHelp.us",
  useless: true,
  image: 'hthu.png',
  text: <Typography variant="body2" color="textSecondary" component="p">
    Analyzes your face using facial recognition algorithms, and compares your facial proportions to averages, then recommends hairstyles which exaggerate/minimize features based on that comparison.
</Typography>,
  links: [
    { href: 'https://hairtohelp.us/', icon: <HttpIcon /> },
    { href: 'https://github.com/Xodarap/hair-recommender', icon: <GitHubIcon /> },
  ]
},
{
  avatar: <FaceIcon />,
  title: "2Face2Furious",
  useless: true,
  image: '2f2f.png',
  text: <Typography variant="body2" color="textSecondary" component="p">
    I made a <Link href='https://www.tiktok.com/@benthamite/video/6862752188540767493'>TikTok video</Link> about using machine learning to evaluate cosmetics, which was popular.
        This site lets users run that code on their own images, to identify how well various cosmetic
        products cover up wrinkles and match their skin color.
  </Typography>,
  links: [
    { href: 'https://2face2furious.com/', icon: <HttpIcon /> },
    { href: 'https://github.com/Xodarap/cosmetics-ui', icon: <GitHubIcon /> },
  ]
},
{
  avatar: <FunctionsIcon />,
  title: "Rice Mathematical Purity Test",
  useless: true,
  image: 'mpt.png',
  text: <Typography variant="body2" color="textSecondary" component="p">
    Inspired by the classic Rice Purity Test, this site lets users evaluate their mathematical
    purity.
  </Typography>,
  links: [
    { href: 'https://mathpuritytest.com/', icon: <HttpIcon /> },
    { href: 'https://github.com/Xodarap/math-purity', icon: <GitHubIcon /> },
  ]
},
{
  avatar: <GavelIcon />,
  title: "Pretty Federal Register",
  useless: false,
  image: 'pfr.png',
  text: <Typography variant="body2" color="textSecondary" component="p">
    All US regulations are published in the Federal Register. These are usually plaintext
    documents which are thousands of pages long. Pretty Federal Register is a browser extension that
    adds navigational
    features like a table of contents, and indicates where in the regulatory hierarchy each
    section is.
  </Typography>,
  links: [
    { href: 'https://chrome.google.com/webstore/detail/pretty-federal-register/cgjlhmppbpnbbjlpjjoeondekegbnndc', icon: <HttpIcon /> },
    { href: 'https://github.com/Xodarap/pretty-federal-register', icon: <GitHubIcon /> },
  ]
},
{
  avatar: <VisibilityOffIcon />,
  title: "Paranoid Browsing",
  useless: false,
  image: 'pb.png',
  text: <Typography variant="body2" color="textSecondary" component="p">
    Browser extension which browses the web at random the background, to confuse anyone attempting
to build a profile of your behavior. This project was <Link href='https://www.youtube.com/watch?v=88gTep9Mh_Q'>briefly featured</Link> on the cable news channel RT.
  </Typography>,
  links: [
    { href: 'https://github.com/Xodarap/Paranoid-Browsing', icon: <GitHubIcon /> },
  ]
},
{
  avatar: <AssessmentIcon />,
  title: "Statistok",
  useless: false,
  image: 's.png',
  text: <Typography variant="body2" color="textSecondary" component="p">
    I developed a bunch of tools around TikTok analytics as a result of optimizing my own account.
    Others asked for access to these analytics, and it turned into a company, which currently has one employee (apart from me).
 </Typography>,
  links: [
    { href: 'https://Statistok.com/', icon: <HttpIcon /> },
  ]
},
{
  avatar: <ShareIcon />,
  title: "Social Medias",
  useless: true,
  image: 'tt.jpeg',
  text: <Typography variant="body2" color="textSecondary" component="p">I'm most active on TikTok</Typography>,
  links: [
    { href: 'https://www.tiktok.com/@benthamite', icon: <TiktokIcon /> },
    { href: 'https://www.instagram.com/ben.thamite/', icon: <InstagramIcon /> },
    { href: 'https://www.youtube.com/channel/UCVqG8QBdDmVL3aPOJLmI1Vw', icon: <YouTubeIcon /> },
  ]
},
]