import React, { useRef, useState } from "react";

import {
  Play,
  Pause,
  SpeakerHigh,
  SpeakerSlash,
  CornersOut,
  GearSix,
} from "phosphor-react";

// hooks
import { useVideoPlayer } from "../../hooks/useVideoPlayer";

//styles
import * as S from "./styles";

const video =
  "https://rr2---sn-4voux-uixs.googlevideo.com/videoplayback?expire=1672219217&ei=0ZmrY8eUJeP0zLUP0fWo6Ak&ip=2804:28c8:c330:4601:e413:af57:998f:cd69&id=7e5872b9b785c6c0&itag=18&source=blogger&mh=Ob&mm=31&mn=sn-4voux-uixs&ms=au&mv=m&mvi=2&pl=43&susc=bl&eaua=bF5a0V42SMY&mime=video/mp4&vprv=1&dur=1476.487&lmt=1672073947567279&mt=1672189993&txp=1311224&sparams=expire,ei,ip,id,itag,source,susc,eaua,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAK5NyFhFUErEw73jhkXLQax0mWW7-_8EnpbuwC9AKNGpAiAkv77iZNs6YYpGFtPURdSbTGAJvid-kuQZpwLlmEzC4Q%3D%3D&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgHF0vWP4x5RSnXh_PXwe_MbxPM36m4RE3oun6oc8pY9ACIGYanDx0r3zXriC8zrZdnpY1h00tc0tDhw9YVKmY_z-L&cpn=umE5VqsEZFRiSFMf&c=WEB_EMBEDDED_PLAYER&cver=1.20221218.00.00";

export const PlayVideo = () => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    toggleFullscreen,
    toggleVolume,
  } = useVideoPlayer(videoElement);
  return (
    <S.Container>
      <S.VideoWrapper>
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div>
          <S.Progress
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <S.Controls>
            <div>
              <S.Actions>
                <button onClick={togglePlay}>
                  {!playerState.isPlaying ? (
                    <Play size={28} color="#FFFFFF" weight="thin" />
                  ) : (
                    <Pause size={28} color="#FFFFFF" weight="thin" />
                  )}
                </button>
              </S.Actions>
              <S.Volume>
                {!playerState.isMuted ? (
                  <SpeakerHigh
                    onClick={toggleMute}
                    size={28}
                    color="#FFFFFF"
                    weight="thin"
                  />
                ) : (
                  <SpeakerSlash
                    onClick={toggleMute}
                    size={28}
                    color="#FFFFFF"
                    weight="thin"
                  />
                )}
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.1}
                  onChange={(e) => toggleVolume(e.target.value)}
                />
              </S.Volume>
            </div>

            <div>
              <S.Gear>
                <GearSix size={28} color="#FFFFFF" weight="thin" />
                <select
                  value={playerState.speed}
                  onChange={(e) => handleVideoSpeed(e)}
                >
                  <option value="0.50">0.50x</option>
                  <option value="1">1x</option>
                  <option value="1.25">1.25x</option>
                  <option value="2">2x</option>
                  <option value="3">3x</option>
                </select>
              </S.Gear>
              <S.FullScreen onClick={toggleFullscreen}>
                <CornersOut size={28} color="#FFFFFF" weight="thin" />
              </S.FullScreen>
            </div>
          </S.Controls>
        </div>
        <S.Info>
          <S.Title>
            <h2>Avatar 2: O caminho da agua</h2>
          </S.Title>
          <S.Description>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ex
              excepturi debitis quas magnam. Odit, in! Repellendus, minus
              inventore doloribus officia quasi vero expedita optio ut provident
              impedit maiores dolores. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nisi, maiores obcaecati! Praesentium eaque
              numquam sunt nemo error asperiores eveniet laboriosam fugiat a.
              Voluptatum sit nulla consectetur nobis recusandae error expedita!
            </p>
          </S.Description>
        </S.Info>
      </S.VideoWrapper>
    </S.Container>
  );
};
