import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Projects from '../components/projects';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  hero: {
    minHeight: '50vh',
    backgroundColor: '#f5f5f5'
  },
  main: {
    overflow: 'auto',
    width: '100%'
  },
  footer:{
    borderTop: '1px solid #ccc',
    marginTop: '5px',
    textAlign:'center',
    backgroundColor: '#3a404a',
    color: '#ddd',
    '& a': {
      color: '#ddd',
      fontWeight: 'bold'
    }
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>Ben ♡'s Lacey</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        <Hero classes={classes} />
        <Projects/>
        <footer  className={classes.footer}>
          <Typography>Made with ♡ by <Link href="https://www.tiktok.com/@benthamite">@benthamite</Link> •{' '}
            <Link href="https://github.com/xodarap">GitHub</Link>
          </Typography>
        </footer>
      </main>

    </div>
  )
}

function Hero({ classes }) {
  return <Container maxWidth="lg">
    <Grid container style={{ height: '100%' }} className={classes.hero}>
      <Grid item xs={12} md={6} style={{ justifyContent: 'center', display: 'flex' }}>
        <div style={{ alignSelf: 'center', padding: '10px' }}>
          <Typography variant='h3' style={{ marginTop: '30px' }}> Ben ♡ Lacey</Typography><br />
          <Typography variant='body1' style={{ marginTop: '30px' }}>
            Gifts that Ben has given Lacey.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={6} style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
        <img src="/images/us.jpg" style={{ height: '85%', maxWidth: '100%' }} />
      </Grid>
    </Grid></Container>
}
