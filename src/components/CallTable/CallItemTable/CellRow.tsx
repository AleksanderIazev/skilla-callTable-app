import { FC } from 'react';
import { CellItemAvatar, CellRow } from './CallRow.styled';
import { ICallItemTableProps } from './CellItemTable.types';
import { CellItem } from '../HeaderCallTable/HeaderCallTable.styled';
import incoming from '../../../assets/icons/Property 1=incoming.svg';
import outgoing from '../../../assets/icons/Property 1=outgoing.svg';
import { formatTime } from '../../../helpers/formatTime';
import { formatPhoneNumber } from '../../../helpers/formatPhoneNumber';

const callsTypeIcons: { [key: string]: string } = {
    1: incoming,
    0: outgoing,
};

export const CellItemRow: FC<Partial<ICallItemTableProps>> = ({
    id,
    in_out,
    date,
    person_avatar,
    source,
    to_number,
    from_number,
    time,
}) => {
    return (
        <CellRow key={id}>
            <CellItem>{in_out !== undefined && <img src={callsTypeIcons[in_out]} alt='callTypeIcon' />}</CellItem>
            <CellItem>{formatTime(date!)}</CellItem>
            <CellItem>
                <CellItemAvatar src={person_avatar} alt='avatar' />
            </CellItem>
            <CellItem>{in_out !== 0 ? formatPhoneNumber(from_number!) : formatPhoneNumber(to_number!)}</CellItem>
            <CellItem>{source}</CellItem>
            <CellItem>Оценка</CellItem>
            <CellItem>{time !== 0 && formatTime(time!)}</CellItem>
        </CellRow>
    );
};
