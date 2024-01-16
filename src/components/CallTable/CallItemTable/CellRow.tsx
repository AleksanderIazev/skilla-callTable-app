import { FC } from 'react';
import { CellItemRowProps } from './CellItemTable.types';
import { formatTime } from '../../../helpers/formatTime';
import { formatPhoneNumber } from '../../../helpers/formatPhoneNumber';
import { AudioPlayer } from '../../AudioPlayer/AudioPlayer';
import { CellItem } from '../HeaderCallTable/HeaderCallTable.styled';
import { CellItemAvatar, CellRow } from './CellRow.styled';
import incoming from '../../../assets/icons/Property 1=incoming.svg';
import outgoing from '../../../assets/icons/Property 1=outgoing.svg';

const callsTypeIcons: { [key: string]: string } = {
    1: incoming,
    0: outgoing,
};

export const CellItemRow: FC<Partial<CellItemRowProps>> = ({
    id,
    in_out,
    date,
    person_avatar,
    source,
    to_number,
    from_number,
    time,
    record,
    getRecord,
    selectedRecord,
    setSelectedRecord,
    recordLoading,
    recordData,
}) => {
    function handleSelectRecord() {
        if (record !== '') {
            setSelectedRecord(record);
            getRecord(record);
        }
    }

    return (
        <CellRow key={id} onClick={handleSelectRecord}>
            <CellItem>{in_out !== undefined && <img src={callsTypeIcons[in_out]} alt='callTypeIcon' />}</CellItem>
            <CellItem>{formatTime(date!)}</CellItem>
            <CellItem>
                <CellItemAvatar src={person_avatar} alt='avatar' />
            </CellItem>
            <CellItem>{in_out !== 0 ? formatPhoneNumber(from_number!) : formatPhoneNumber(to_number!)}</CellItem>
            <CellItem>{source}</CellItem>
            <CellItem>Оценка</CellItem>
            {/* <CellItem>{time !== 0 && formatTime(time!)}</CellItem> */}
            <CellItem>
                {time === 0
                    ? null
                    : record === selectedRecord
                    ? !recordLoading && (
                          <AudioPlayer record={recordData!} recordTime={time!} setSelectedRecord={setSelectedRecord} />
                      )
                    : formatTime(time!)}
            </CellItem>
        </CellRow>
    );
};
