import "./videoplayer.scss";
import React from "react";
import { Card } from "antd";
import ReactPlayer from "react-player";

const VideoPlayer: React.FC = () => {
  return (
    <>
      <div className="video-player-container">
        <Card className="card-container" title="视频播放器功能示例">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            controls={true}
            loop={false}
            width={"100%"}
            height={"640px"}
            onError={() => console.log("视频加载错误!")}
          />
        </Card>
      </div>
    </>
  );
};

export default VideoPlayer;
