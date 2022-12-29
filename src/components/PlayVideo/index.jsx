import React, { useEffect, useRef, useState } from "react";

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

export const PlayVideo = ({ title, videoUrl, description, active }) => {
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
    setPlayerState,
  } = useVideoPlayer(videoElement);

  useEffect(() => {
    setPlayerState({
      isPlaying: false,
      progress: 0,
      speed: 1,
      isMuted: false,
    });
  }, [videoUrl, title, description]);

  return (
    <S.Container>
      <S.VideoWrapper>
        <video
          src={videoUrl}
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
                <S.Speed>
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
                </S.Speed>
              </S.Gear>
              <S.FullScreen onClick={toggleFullscreen}>
                <CornersOut size={28} color="#FFFFFF" weight="thin" />
              </S.FullScreen>
            </div>
          </S.Controls>
        </div>
        <S.Info>
          <S.Title>
            <h2>{title}</h2>
          </S.Title>
          <S.Description>
            <p>{description}</p>
          </S.Description>
        </S.Info>
      </S.VideoWrapper>
    </S.Container>
  );
};
