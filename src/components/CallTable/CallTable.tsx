import { FC, useEffect } from 'react';
import { useFetchCallsQuery } from '../../store/callApi/callApi';
import { HeaderCallTable } from './HeaderCallTable/HeaderCallTable';
import { CallItemTable } from './CallItemTable/CallItemTable';
import { CallTableWrapper } from './CallTable.styled';
import { type ICallItemTableProps } from './CallItemTable/CallItemTable.types';
import incoming from '../../assets/icons/Property 1=incoming.svg';
import outgoing from '../../assets/icons/Property 1=outgoing.svg';
import styled from 'styled-components';
import { formatTime } from '../../helpers/formatTime';
import { CallItemAvatar } from './CallItemTable/CallItemTable.styled';
interface ICallTableProps {}

const CellItem = styled.th<{ paddingRight?: string }>`
    text-align: start;
    padding-right: ${props => props.paddingRight || '0'};
    width: 0;
    font-weight: 400;
    height: 65px;
    border-bottom: 1px solid #eaf0fa;
    
    &:nth-child(5) {
        color: #5E7793;
    }

    &:nth-child(7) {
        text-align: end;
    }
`;

const CellRow = styled.tr`
    cursor: pointer;
    transition: 150ms ease-in-out;
    color: #122945;

    &:hover {
        background-color: #eaf0fa;
    }
`;

const CallTableStyled = styled.table`
    border-collapse: collapse;
    width: 90%;
`

const callsTypeIcons: { [key: string]: string } = {
    1: incoming,
    0: outgoing,
};

export const CallTable: FC<ICallTableProps> = ({}) => {
    const { data: calls, isLoading } = useFetchCallsQuery({status: "fail"});

    console.log(calls)

    return (
        <CallTableStyled >
            <thead>
                <tr>
                    <CellItem paddingRight='31px'>Тип</CellItem>
                    <CellItem paddingRight='41px'>Время</CellItem>
                    <CellItem paddingRight='61px'>Сотрудник</CellItem>
                    <CellItem paddingRight='280px'>Звонок</CellItem>
                    <CellItem paddingRight='154px'>Источник</CellItem>
                    <CellItem paddingRight='414px'>Оценка</CellItem>
                    <CellItem>Длительность</CellItem>
                </tr>
            </thead>
            <tbody>
                {calls &&
                    calls.results.map(
                        ({
                            id,
                            in_out,
                            date,
                            person_avatar,
                            source,
                            to_number,
                            from_number,
                            time,
                        }: ICallItemTableProps) => (
                            <CellRow key={id}>
                                <CellItem>
                                    {in_out !== undefined && <img src={callsTypeIcons[in_out]} alt='callTypeIcon' />}
                                </CellItem>
                                <CellItem>{formatTime(date!)}</CellItem>
                                <CellItem >
                                    <CallItemAvatar src={person_avatar} alt='avatar' />
                                </CellItem>
                                <CellItem >
                                    {in_out !== 0 ? from_number : to_number}
                                </CellItem>
                                <CellItem>{source}</CellItem>
                                <CellItem >Оценка</CellItem>
                                <CellItem >{time !== 0 && formatTime(time!)}</CellItem>
                            </CellRow>
                        )
                    )}
            </tbody>
            {/* <HeaderCallTable /> */}
            {/* {isLoading ? (
                <p>Загрузка</p>
            ) : (
                calls &&
                calls.results.map(({ id, ...call }: ICallItemTableProps) => <CallItemTable key={id} {...call} />)
            )} */}
        </CallTableStyled>
    );
};
