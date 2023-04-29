import React from 'react';
import './Podcast.css';
import podcastImg from '../images/podcast.jpg';

function Podcast() {
  return (
    <section className="podcast">
      <h2 className="podcast-title">AI-Generated Podcast</h2>
      <div className="podcast-content">
        <img src={podcastImg} alt="Podcast" className="podcast-img" />
        <div className="podcast-info">
          <p>
            A recent podcast has been created using only AI to generate the content, including the voice, image, and music. This is an excellent example of the power and versatility of AI in content creation.
          </p>
          <a href="https://podcasters.spotify.com/pod/show/oliver-mahoney/episodes/Episode-2-Insights-in-building-and-running-a-successful-startup-e237car" className="spotify-link" target="_blank" rel="noopener noreferrer">
            Listen on Spotify
          </a>
        </div>
      </div>
    </section>
  );
}

export default Podcast;