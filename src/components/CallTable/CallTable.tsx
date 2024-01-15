import { FC } from 'react';
import { useFetchCallsQuery } from '../../store/callApi/callApi';
import { type ICallItemTableProps } from './CallItemTable/CellItemTable.types';
import { HeaderCallTable } from './HeaderCallTable/HeaderCallTable';
import { CellItemRow } from './CallItemTable/CellRow';
import { CallTableStyled } from './CallTable.styled';

export const CallTable: FC = () => {
    const { data: calls, isLoading } = useFetchCallsQuery({});

    console.log(calls);

    return (
        <CallTableStyled>
            <HeaderCallTable />
            <tbody>{calls && calls.results.map((props: ICallItemTableProps) => <CellItemRow {...props} />)}</tbody>
        </CallTableStyled>
    );
};
