import React, { useState, useRef, useContext, useEffect } from "react";
import "../App.css";
import { ImNext2, ImPrevious2 } from "react-icons/im";
import { FaPlay } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";

import { FiVolume1, FiVolume2, FiVolumeX } from "react-icons/fi";
import { BsVolumeUp } from "react-icons/bs";
import { MyContext } from "../MyContext";

const AudioPlayer = ({ playlist }) => {
  // console.log(playlist);
  const {
    currentTrackIndex,
    setCurrentTrackIndex,
    isPlaying,
    setIsPlaying,
    audioRef,
    playHistory,
    setPlayHistory,
  } = useContext(MyContext);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [played, setPlayed] = useState(0);
  const [volume, setVolume] = useState(1);
  const clickRef = useRef();

  const playPauseToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextTrack = () => {
    const newIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(newIndex);
    setPlayed(0);
    setIsPlaying(true);
  };

  const playPreviousTrack = () => {
    const newIndex =
      (currentTrackIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrackIndex(newIndex);
    setIsPlaying(true);
    setPlayed(0);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
    setPlayed(0);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleEnded = () => {
    playNextTrack();
  };

  const selectedTrack = playlist[currentTrackIndex].audio_url;
  // console.log(playlist[currentTrackIndex]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleCurrentDuration = (e) => {
    const width = clickRef.current.clientWidth;
    const offSet = e.nativeEvent.offsetX;
    // console.log(width, offSet);
    const progress = offSet / width;
    audioRef.current.currentTime = progress * duration;
  };

  const hanldeDataLoad = () => {
    setDuration(audioRef.current.duration);
    // setSongId(songs[currentSongIndex]._id);
    // setRepeat(false);
  };
  useEffect(() => {
    // console.log(playHistory);
    localStorage.setItem(
      "historySong",
      JSON.stringify([
        {
          thumbnail: playlist[currentTrackIndex].thumbnail,
          title: playlist[currentTrackIndex].title,
          mood: playlist[currentTrackIndex].mood,
        },
        ...playHistory,
      ])
    );
    setPlayHistory(JSON.parse(localStorage.getItem("historySong")));
  }, [isPlaying, currentTrackIndex]);

  //
  // if (isPlaying) {
  //   localStorage.setItem(
  //     "historySong",
  //     JSON.stringify([
  //       {
  //         thumbnail: playlist[currentTrackIndex].thumbnail,
  //         title: playlist[currentTrackIndex].title,
  //         mood: playlist[currentTrackIndex].mood,
  //       },
  //       ...playHistory,
  //     ])
  //   );
  //   setPlayHistory(JSON.parse(localStorage.getItem("historySong")));
  // }

  return (
    <div className="sound_cloud-app_audio_player">
      <div className="sound_cloud-audio_player">
        <div className="sound_cloud-audio_player_left">
          <div className="sound_cloud-audio_player_icons">
            <button
              onClick={playPreviousTrack}
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            >
              <ImPrevious2 />
            </button>
            <button onClick={playPauseToggle} style={{ cursor: "pointer" }}>
              {isPlaying ? <GiPauseButton /> : <FaPlay />}
            </button>
            <button
              onClick={playNextTrack}
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            >
              <ImNext2 />
            </button>
          </div>

          <audio
            ref={audioRef}
            src={selectedTrack}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            preload="auto"
            // loop={true}
            volume={volume}
            autoPlay={true}
            // controls={true}
            onLoadedData={hanldeDataLoad}
          />
          <div className="sound_cloud-audio_player_time_progress">
            <span>{formatTime(currentTime)}</span>
            <div
              className="sound_cloud-audio_player_cover"
              ref={clickRef}
              onClick={handleCurrentDuration}
            >
              <div className="sound_cloud-audio_player_progress">
                <div
                  className="sound_cloud-audio_player_progress_fill"
                  style={{ width: `${played * 100}%` }}
                ></div>
              </div>
            </div>
            <span>{formatTime(duration)}</span>
          </div>

          <button
            className="sound_cloud-audio_player_speaker"
            style={{ cursor: "pointer" }}
          >
            {volume > 0 ? (
              volume > 0.2 ? (
                volume > 0.8 ? (
                  <BsVolumeUp style={{ fontSize: "1.2rem" }} />
                ) : (
                  <FiVolume2 style={{ fontSize: "1.2rem" }} />
                )
              ) : (
                <FiVolume1
                  style={{ fontSize: "1.2rem" }}
                  className="sound_cloud-audio_player_speaker_icon"
                />
              )
            ) : (
              <FiVolumeX style={{ fontSize: "1.2rem" }} />
            )}
            <div className="sound_cloud-audio_player_speaker_hover">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                className="sound_cloud-audio_player_rotate_spaker"
                onChange={handleVolumeChange}
              />
            </div>
          </button>
        </div>
        <div className="sound_cloud-audio_player_right">
          <div className="sound_cloud-audio_player_right_images">
            <img
              src={playlist[currentTrackIndex]?.thumbnail}
              alt=""
              // onClick={() => navigate(`/song/${songs[currentSongIndex]._id}`)}
            />
            <div>
              <p
                // onClick={() => {
                //   navigate("/song");
                //   setActive("all");
                // }}
                style={{ textTransform: "capitalize" }}
              >
                {playlist[currentTrackIndex]?.mood}
              </p>
              <p
              // onClick={() => navigate(`/song/${songs[currentSongIndex]._id}`)}
              >
                {playlist[currentTrackIndex]?.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
