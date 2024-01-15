import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import playIcon from "../../assets/icons/play.svg"
import pauseIcon from "../../assets/icons/pause.svg"
import downloadIcon from "../../assets/icons/download.svg"
import { formatTime } from "../../helpers/formatTime";


interface AudioPlayerProps  {
      record: string,
      recordTime: number
}

const AudioPlayerStyled = styled.div`
      min-width: 352px;
      height: 48px;
      background-color: #EAF0FA;
      border-radius: 48px;

      cursor: default;
      position: absolute;
      right: 0;
      top: 10%;
      z-index: 5;

      display: flex;
      align-items: center;
      padding: 0 18px;
      gap: 12px;
`

const AudioPlayerButton = styled.button`
      background-color: transparent;
      border: none;
      cursor: pointer;
`

const AudioProgres = styled.div`
      width: 164px;
      height: 4px;

      background-color: #ADBFDF;
`


export const AudioPlayer:FC<AudioPlayerProps> = ({record, recordTime}) => {
      const [isPlayed, setIsPlayed] = useState(false)
      const [time, setTime] = useState(recordTime)
      const recordRef = useRef<undefined | HTMLAudioElement>()
      const timerRef = useRef<any>(null)


      useEffect(() => {
            recordRef.current = new Audio(record)
      }, [record])

      useEffect(() => {
            if(isPlayed) {
                  timerRef.current = window.setInterval(() => {
                        setTime(prevTime => prevTime - 1)
                  }, 1000)
            } else {
                  clearInterval(timerRef.current)
            }

            if(time === 0) {
                  clearInterval(timerRef.current)
                  recordRef.current?.pause()
                  setTime(recordTime)
                  setIsPlayed(false)
            }

            return () => {
                  clearInterval(timerRef.current)
            }
      }, [isPlayed, time])

      return (
            <AudioPlayerStyled onClick={(e) => e.stopPropagation()}>
                  <span>{formatTime(time)}</span>
                  <AudioPlayerButton onClick={() => {
                        setIsPlayed(prev => !prev)

                        if(!isPlayed) {
                              recordRef.current?.play()
                        } else {
                              recordRef.current?.pause()
                        }
                        
                  }}><img src={isPlayed ? pauseIcon: playIcon} alt="icon"/></AudioPlayerButton>
                  <AudioProgres></AudioProgres>
                  <AudioPlayerButton><img src={downloadIcon} alt="play icon"/></AudioPlayerButton>
            </AudioPlayerStyled>
      );
};
