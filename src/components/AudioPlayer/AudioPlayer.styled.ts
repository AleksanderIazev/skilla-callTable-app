import styled from 'styled-components';

export const AudioPlayerStyled = styled.div`
    min-width: 352px;
    height: 48px;
    background-color: #eaf0fa;
    border-radius: 48px;
    cursor: default;
    position: absolute;
    right: 0;
    top: 13%;
    z-index: 5;
    display: flex;
    align-items: center;
    padding: 0 18px;
    gap: 12px;
`;

export const AudioPlayerButton = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const AudioProgress = styled.div`
    width: 164px;
    height: 4px;
    border-radius: 50px;
    overflow: hidden;
    background-color: #adbfdf;
`;

export const Progress = styled.div<{ step?: number }>`
    cursor: pointer;
    transition: 200ms ease-in-out;
    width: ${props => props.step + '%'};
    height: 4px;
    background-color: #002cfb;
`;

export const CloseHref = styled.a`
    position: absolute;
    right: 20px;
    top: 12px;
    &:hover {
        cursor: pointer;
        svg {
            path {
                fill: #002cfb;
            }
        }
    }
`;

export const DownloadHref = styled.a`
    position: absolute;
    right: 57px;
    top: 16px;

    &:hover {
        svg {
            path {
                fill: #002cfb;
            }
        }
    }
`;

export const AudioPlayerInner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    span {
        display: inline-block;
        font-size: 15px;
        color: #122945;
        width: 40px;
    }

    img {
        padding-left: 12px;
        padding-right: 8px;
    }
`;
