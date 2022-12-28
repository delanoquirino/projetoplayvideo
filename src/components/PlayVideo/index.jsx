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
  "https://rr1---sn-4voux-uixl.googlevideo.com/videoplayback?expire=1672262784&ei=AESsY7aXIISa0_wPtMaHiAM&ip=2804:28c8:c330:4601:f16a:8f31:41fb:6173&id=6af20c4ad2149c86&itag=18&source=blogger&mh=3c&mm=31&mn=sn-4voux-uixl&ms=au&mv=m&mvi=1&pl=43&susc=bl&eaua=bF5a0V42SMY&mime=video/mp4&vprv=1&dur=1430.790&lmt=1671936675830896&mt=1672233439&txp=1311224&sparams=expire,ei,ip,id,itag,source,susc,eaua,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIhAMykCNF2vw_MtPIQG9lfGy_8bv2FbBdKANzNGERDGpUhAiBn8DF3k04zCuQYNDfTxDCkzkdMMie1t7Y-cIz1vvOb2w%3D%3D&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAMj7KKqCFXL0mIET4WgOjfUMTLb7I63pn_XL2_VA8Dm_AiEAipECufWnmHnTxagjaBatqCBCBXxuvB3W38_dSsK_bYo%3D&cpn=thx6fKj4koTg9JFt&c=WEB_EMBEDDED_PLAYER&cver=1.20221218.00.00";

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
