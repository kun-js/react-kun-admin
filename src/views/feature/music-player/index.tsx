import "./musicplayer.scss";
import React, { useCallback, useRef, useState } from "react";
import { Button, Card, Space, Select } from "antd";
import { useWavesurfer } from "@wavesurfer/react";
import music from "@/assets/audios/zhiyinnitaimei.mp3";

const MusicPlayer: React.FC = () => {
  const containerRef = useRef(null);
  const [speed, setSpeed] = useState<number>();

  const { wavesurfer, isPlaying } = useWavesurfer({
    container: containerRef,
    height: 200,
    waveColor: "rgb(200, 0, 200)",
    progressColor: "rgb(100, 0, 100)",
    url: music,
    audioRate: speed,
  });

  const handleChange = (value: number) => {
    setSpeed(value);
  };

  const onBack = useCallback(() => {
    wavesurfer && wavesurfer.skip(-5);
  }, [wavesurfer]);

  const onForward = useCallback(() => {
    wavesurfer && wavesurfer.skip(5);
  }, [wavesurfer]);

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);

  return (
    <>
      <div className="music-player-container">
        <Card className="card-container" title="音频播放器功能示例">
          <div ref={containerRef} />
          <Space style={{ marginTop: "18px" }}>
            <Button type={isPlaying ? "default" : "primary"} onClick={onPlayPause}>
              {isPlaying ? "暂停" : "播放"}
            </Button>
            <Button type="primary" onClick={onBack}>
              回退5s
            </Button>
            <Button type="primary" onClick={onForward}>
              快进5s
            </Button>
            <Select
              defaultValue={1}
              style={{ width: 150 }}
              onChange={handleChange}
              options={[
                { value: 0.25, label: "0.25x 倍速播放" },
                { value: 0.5, label: "0.5x 倍速播放" },
                { value: 1, label: "1x 倍速播放" },
                { value: 2, label: "2x 倍速播放" },
                { value: 4, label: "4x 倍速播放" },
                { value: 10, label: "10x 倍速播放" },
              ]}
            />
          </Space>
        </Card>
      </div>
    </>
  );
};

export default MusicPlayer;
