import React from 'react';
import ClapprPlayer from './ClapprPlayer';

function App() {
const streams = [
  { id: 1, name: 'Raum 1', url: 'https://mail.localstreaming.example.com/hls/testroom123.m3u8' },
  { id: 2, name: 'Raum 2', url: 'https://mail.localstreaming.example.com/hls/testroom456.m3u8' },
  { id: 3, name: 'Raum 3', url: 'https://mail.localstreaming.example.com/hls/testroom789.m3u8' },
];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {streams.map((stream) => (
        <div key={stream.id} style={{ margin: '20px' }}>
          <h3>{stream.name}</h3>
          <ClapprPlayer source={stream.url} />
        </div>
      ))}
    </div>
  );
}

export default App;
