export const AudioPlayer = ({ record }: { record: string }) => {
    return (
        <audio controls src={record} style={{ position: 'absolute' }}>
            <track kind='captions' />
        </audio>
    );
};
