import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import playIcon from '../../assets/icons/play.svg';
import pauseIcon from '../../assets/icons/pause.svg';
import downloadIcon from '../../assets/icons/download.svg';
import { formatTime } from '../../helpers/formatTime';

interface AudioPlayerProps {
    record: string;
    recordTime: number;
    setSelectedRecord: any;
}

const AudioPlayerStyled = styled.div`
    min-width: 352px;
    height: 48px;
    background-color: #eaf0fa;
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
`;

const AudioPlayerButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const AudioProgres = styled.div`
    width: 164px;
    height: 4px;
    border-radius: 50px;
    overflow: hidden;
    background-color: #adbfdf;
`;

const Progress = styled.div<{ step?: number }>`
    transition: 200ms ease-in-out;
    width: ${props => props.step + '%'};
    height: 4px;
    background-color: #002cfb;
`;

const DownloadHref = styled.a`
    &:hover {
        svg {
            path {
                fill: #002cfb;
            }
        }
    }
`;

export const AudioPlayer: FC<AudioPlayerProps> = ({ record, recordTime , setSelectedRecord}) => {
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

    function handlePlay() {
        setIsPlayed(true);
        recordRef.current?.play();
    }

    function handlePause() {
        setIsPlayed(false);
        recordRef.current?.pause();
    }

    return (
        <AudioPlayerStyled onClick={e => e.stopPropagation()} onMouseEnter={() => {setShowClose(true)}} onMouseLeave={() => setShowClose(false)}>
            <span>{formatTime(time)}</span>
            <AudioPlayerButton
                onClick={() => {
                    if (!isPlayed) {
                        handlePlay();
                    } else {
                        handlePause();
                    }
                }}
            >
                <img src={isPlayed ? pauseIcon : playIcon} alt='icon' />
            </AudioPlayerButton>
            <AudioProgres>
                {isPlayed && <Progress step={(100 * recordRef.current?.currentTime!) / recordTime}></Progress>}
            </AudioProgres>
            <DownloadHref href={record}>
                <svg width='13' height='16' viewBox='0 0 13 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M0 16H13V14.1176H0V16ZM13 5.64706H9.28571V0H3.71429V5.64706H0L6.5 12.2353L13 5.64706Z'
                        fill='#ADBFDF'
                    />
                </svg>
            </DownloadHref>
            {showClose && (
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' onClick={() => setSelectedRecord(null)}>
                    <g clip-path='url(#clip0_20502_11570)'>
                        <path
                            d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
                            fill='#ADBFDF'
                        />
                    </g>
                    <defs>
                        <clipPath id='clip0_20502_11570'>
                            <rect width='24' height='24' fill='white' />
                        </clipPath>
                    </defs>
                </svg>
            )}
        </AudioPlayerStyled>
    );
};
