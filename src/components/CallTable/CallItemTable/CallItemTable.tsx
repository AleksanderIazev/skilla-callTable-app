import { FC } from 'react';
import { CallItemAvatar, CallItemStyled, CallItemTableStyled } from './CallItemTable.styled';
import { ICallItemTableProps } from './CallItemTable.types';
import { formatTime } from '../../../helpers/formatTime';
import incoming from '../../../assets/icons/Property 1=incoming.svg';
import outgoing from '../../../assets/icons/Property 1=outgoing.svg';

const callsTypeIcons: { [key: string]: string } = {
    1: incoming,
    0: outgoing,
};

export const CallItemTable: FC<Partial<ICallItemTableProps>> = ({
    in_out,
    date,
    person_avatar,
    partner_data,
    to_number,
    from_number,
    time,
}) => {
    return (
        <CallItemTableStyled>
            <CallItemStyled>
                {in_out !== undefined && <img src={callsTypeIcons[in_out]} alt='callTypeIcon' />}
            </CallItemStyled>
            <CallItemStyled>{formatTime(date!)}</CallItemStyled>
            <CallItemAvatar src={person_avatar} alt='avatar' />
            <CallItemStyled>{in_out !== 0 ? from_number : to_number}</CallItemStyled>
            <CallItemStyled>{partner_data?.name}</CallItemStyled>
            <CallItemStyled>Оценка</CallItemStyled>
            <CallItemStyled>{time !== 0 && formatTime(time!)}</CallItemStyled>
        </CallItemTableStyled>
    );
};
