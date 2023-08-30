import React from "react";
import "../App.css";
import { ImNext2, ImPrevious2 } from "react-icons/im";
import { FaPlay, FaShareSquare, FaVolumeMute } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";
import { BiRepost, BiShuffle, BiSolidPlaylist } from "react-icons/bi";
import {
  BsArrowRepeat,
  BsFillPeopleFill,
  BsFillVolumeUpFill,
  BsVolumeUp,
} from "react-icons/bs";

const AudioPlayer = () => {
  return (
    <div className="sound_cloud-app_audio_player">
      <div className="sound_cloud-audio_player">
        <div className="sound_cloud-audio_player_left">
          <div className="sound_cloud-audio_player_icons">
            <button
              // onClick={prevSongHandler}
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            >
              <ImPrevious2 />
            </button>
            <button
              //   onClick={playPauseHandler}
              style={{ cursor: "pointer" }}
            >
              {/* {isPlaying ? <GiPauseButton /> : <FaPlay />} */}
              {true ? <GiPauseButton /> : <FaPlay />}
            </button>
            <button
              // onClick={nextSongHandler}
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            >
              <ImNext2 />
            </button>
            <button style={{ fontSize: "1.2rem", cursor: "pointer" }}>
              <BiShuffle
                //   onClick={() => setShuffle((p) => !p)}
                // style={{ color: shuffle ? "orangered" : "black" }}
                style={{ color: true ? "orangered" : "black" }}
              />
            </button>
            <button
              style={{
                fontSize: "1.2rem",
                cursor: "pointer",
              }}
            >
              <BsArrowRepeat
                //   onClick={() => setRepeat((p) => !p)}
                // style={{ color: repeat ? "orangered" : "black" }}
                style={{ color: true ? "orangered" : "black" }}
              />
            </button>
          </div>
          <audio
            //   ref={audioRef}
            // src={songs[currentSongIndex]?.audio_url}
            src="https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf949647ae38c3e33a6c29.mp3"
            //   onTimeUpdate={timeUpdateHandler}
            controls={true}
            // autoPlay={true}
            //   loop={repeat}
            //   onLoadedData={hanldeDataLoad}
            className="sound_cloud-audio_player_audio"
            //   onEnded={handleEnded}
          />
          <div className="sound_cloud-audio_player_time_progress">
            {/* <span>{formatTime(currentDuration)}</span> */}
            <div
              className="sound_cloud-audio_player_cover"
              // ref={clickRef}
              // onClick={handleCurrentDuration}
            >
              <div className="sound_cloud-audio_player_progress">
                <div
                  className="sound_cloud-audio_player_progress_fill"
                  // style={{ width: `${played * 100}%` }}
                ></div>
              </div>
            </div>
            {/* <span>{formatTime(duration)}</span> */}
          </div>
          <button
            className="sound_cloud-audio_player_speaker"
            //   style={{ cursor: "pointer" }}
          >
            {/* {volume > 0 ? (
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
          )} */}
            <div className="sound_cloud-audio_player_speaker_hover">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                //   value={volume}
                className="sound_cloud-audio_player_rotate_spaker"
                //   onChange={handleVolumeChange}
              />
            </div>
          </button>
        </div>
        <div className="sound_cloud-audio_player_right">
          <div className="sound_cloud-audio_player_right_images">
            <img
              // src={songs[currentSongIndex]?.thumbnail}
              alt=""
              // onClick={() => navigate(`/song/${songs[currentSongIndex]._id}`)}
            />
            <div>
              {/* <p
              onClick={() => {
                navigate("/song");
                setActive("all");
              }}
            >
              {songs[currentSongIndex]?.mood}
            </p> */}
              {/* <p onClick={() => navigate(`/song/${songs[currentSongIndex]._id}`)}>
              {songs[currentSongIndex]?.title}
            </p> */}
            </div>
          </div>
          <div className="sound_cloud-audio_player_icons">
            <span>
              {/* {likes.some(
              (item) => item?._id === songs[currentSongIndex]?._id
            ) ? (
              <AiFillHeart
                style={{ color: "orangered", cursor: "pointer" }}
                onClick={() =>
                  dispatch({
                    type: "DISLIKE",
                    payload: songs[currentSongIndex],
                  })
                }
              />
            ) : (
              <AiFillHeart
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (!login) {
                    setLoginPage(true);
                    return;
                  }
                  dispatch({
                    type: "LIKE",
                    payload: songs[currentSongIndex],
                  });
                }}
              />
            )} */}
            </span>
            <span>
              <BiSolidPlaylist
                style={{
                  cursor: "pointer",
                  //   color: showList ? "orangered" : "black",
                  color: true ? "orangered" : "black",
                }}
                //   onClick={() => setShowList((p) => !p)}
              />
              {/* {showList && (
              <div className="sound_cloud-current_list">
                <CurrentList
                  setShowList={setShowList}
                  currentSong={songs[currentSongIndex]}
                />
              </div>
            )} */}
            </span>
            <span>
              <BsFillPeopleFill />
            </span>
          </div>
        </div>
        {/* <ToastContainer
        position="top-right"
        autoClose={1000}
        limit={0}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      </div>
    </div>
  );
};

export default AudioPlayer;
