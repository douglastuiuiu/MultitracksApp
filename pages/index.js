import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        LR AUDIO
        <audio className="audio-element" controls>
          <source src="./music/audio1.flac"></source>
        </audio>

        CLICK
        <audio className="audio-element" controls>
          <source src="./music/click.mp3"></source>
        </audio>

        TRACKS
        <audio className="audio-element" controls>
          <source src="./music/tracks.mp3"></source>
        </audio>
      </div>
      
    </div>
  )
}
