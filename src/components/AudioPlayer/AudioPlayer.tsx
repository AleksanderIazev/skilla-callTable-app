import { FC, useEffect, useRef, useState } from 'react';
import { AudioPlayerCloseButton } from './AudioPlayerCloseButton';
import { AudioPlayerDownloadButton } from './AudioPlayerDownloadButton';
import { AudioPlayerProps } from './AudioPlayer.types';
import { formatTime } from '../../helpers/formatTime';
import playIcon from '../../assets/icons/play.svg';
import pauseIcon from '../../assets/icons/pause.svg';
import { AudioPlayerButton, AudioPlayerInner, AudioPlayerStyled, AudioProgress, Progress } from './AudioPlayer.styled';

export const AudioPlayer: FC<AudioPlayerProps> = ({ record, recordTime, setSelectedRecord }) => {
    const [showClose, setShowClose] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);
    const [time, setTime] = useState(recordTime);
    const recordRef = useRef<undefined | HTMLAudioElement>();

    useEffect(() => {
        recordRef.current = new Audio(record);
    }, [record]);

    useEffect(() => {
        const timer = () => {
            if (recordRef.current?.ended) {
                handlePause();
                recordRef.current?.removeEventListener('timeupdate', timer);
            } else {
                setTime(Math.floor(recordRef.current?.currentTime!));
            }
        };

        recordRef.current?.addEventListener('timeupdate', timer);

        return () => {
            recordRef.current?.removeEventListener('timeupdate', timer);
        };
    }, [isPlayed, time]);

    useEffect(() => {
        return () => {
            recordRef.current?.pause();
        };
    }, []);

    const handlePlay = () => {
        setIsPlayed(true);
        recordRef.current?.play();
    };

    const handlePause = () => {
        setIsPlayed(false);
        recordRef.current?.pause();
    };

    const handlePlayStop = () => {
        if (!isPlayed) {
            handlePlay();
        } else {
            handlePause();
        }
    };

    const handleMouseEnter = () => {
        setShowClose(true);
    };

    const handleMouseLeave = () => {
        setShowClose(false);
    };

    const renderCloseButton = () => {
        setSelectedRecord(null);
    };

    const currentTime = recordRef.current?.currentTime || 0;
    const progressPercentage = (100 * currentTime) / recordTime;

    return (
        <AudioPlayerStyled
            onClick={e => e.stopPropagation()}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <AudioPlayerInner>
                <span>{formatTime(time)}</span>
                <AudioPlayerButton onClick={handlePlayStop}>
                    <img src={isPlayed ? pauseIcon : playIcon} alt='icon' />
                </AudioPlayerButton>
                <AudioProgress>{isPlayed && <Progress step={progressPercentage} />}</AudioProgress>
                <AudioPlayerDownloadButton record={record} />
                {showClose && <AudioPlayerCloseButton onClick={renderCloseButton} />}
            </AudioPlayerInner>
        </AudioPlayerStyled>
    );
};
