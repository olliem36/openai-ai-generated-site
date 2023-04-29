import React from 'react';
import './Content.css';
import chatGPTImg from '../images/chatgpt.jpg';
import dalle2Img from '../images/dalle2.jpg';

function Content() {
  return (
    <section className="content">
      <h2 className="content-title">OpenAI Tools</h2>
      <div className="tool-cards">
        <div className="tool-card">
          <img src={chatGPTImg} alt="ChatGPT" className="tool-img" />
          <h3>ChatGPT</h3>
          <p>ChatGPT is an advanced language model that can generate human-like text, answer questions, and assist in various tasks.</p>
        </div>
        <div className="tool-card">
          <img src={dalle2Img} alt="DALLE-2" className="tool-img" />
          <h3>DALLE-2</h3>
          <p>DALLE-2 is a cutting-edge AI model that can generate high-quality images from textual descriptions.</p>
        </div>
      </div>
    </section>
  );
}

export default Content;