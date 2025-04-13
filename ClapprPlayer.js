import React, { useEffect, useRef } from 'react';
import Clappr from 'clappr';

const ClapprPlayer = ({ source, width = '640px', height = '360px' }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const player = new Clappr.Player({
      parentId: `#player-${source.replace(/[^a-zA-Z0-9]/g, '-')}`, // Ersetze ungültige Zeichen durch '-'
      source: source,
      width: width,
      height: height,
      autoPlay: true,
      mute: true,
    });

    return () => {
      player.destroy();
    };
  }, [source, width, height]);

  return <div id={`player-${source.replace(/[^a-zA-Z0-9]/g, '-')}`} ref={playerRef}></div>; // gleiche Änderung hier
};

export default ClapprPlayer;
