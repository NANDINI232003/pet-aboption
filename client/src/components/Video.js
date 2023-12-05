import { useState } from 'react';
import '../App.css';
import { VideoRoom } from '../feature/VideoRoom';

function Video() {
  const [joined, setJoined] = useState(false);
  return (
    <div className="App">
      <h1>Petzone Virtual Call</h1>

      {!joined && (
        <button onClick={() => setJoined(true)}>
          Join Room
        </button>
      )}

      {joined && <VideoRoom />}
    </div>
  );
}

export default Video;