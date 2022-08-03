function HomePage() {
  const game_vars = ["rock", "paper", "scissors", "lizard", "spork"];
  return (
    <div className="outline-box">
      <div>
        <h2 className="title-text">ROCK PAPER SCISSORS LIZARD SPORK</h2>
      </div>
      <div className="score-box">
        <p className="score-title">SCORE</p>
        <p className="score-text">12</p>
      </div>
      <style jsx>{`
        .outline-box {
          padding: 15px;
          border: 2px solid hsl(217, 16%, 45%);
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
        }
        .title-text {
          margin: 0px;
          word-spacing: 999999px;
          color: white;
          font-weight: 600;
          line-height: 0.8;
          max-width: 100px;
        }
        .score-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          background: white;
          border-radius: 5px;
          width: 120px;
          flex-gap: 5px;
        }
        .score-title {
          color: hsl(229, 64%, 46%);
          margin: 0px;
        }
        .score-text {
          color: hsl(217, 16%, 45%);
          margin: 0px;
          font-size: 54px;
        }
      `}</style>
    </div>
  );
}

export default HomePage