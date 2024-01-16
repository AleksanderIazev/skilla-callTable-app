export interface AudioPlayerProps {
    record: string;
    recordTime: number;
    setSelectedRecord: any;
}

export interface AudioPlayerCloseButtonProps {
    onClick: React.MouseEventHandler<SVGSVGElement>;
}

export interface AudioPlayerDownloadButtonProps {
    record: string;
}
