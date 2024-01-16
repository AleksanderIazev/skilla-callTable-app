import { FC, useState } from 'react';
import { useFetchCallsQuery, useFetchRecordMutation } from '../../store/callApi/callApi';
import { type ICallItemTableProps } from './CallItemTable/CellItemTable.types';
import { HeaderCallTable } from './HeaderCallTable/HeaderCallTable';
import { CellItemRow } from './CallItemTable/CellRow';
import { CallTableStyled } from './CallTable.styled';

export const CallTable: FC = () => {
    const { data: calls, isLoading } = useFetchCallsQuery({});
    const [getRecord, { data: recordData, isLoading: recordLoading }] = useFetchRecordMutation();
    const [selectedRecord, setSelectedRecord] = useState<string | null>(null);

    return (
        <CallTableStyled>
            <HeaderCallTable />
            <tbody>
                {calls &&
                    calls.results.map((props: ICallItemTableProps) => (
                        <CellItemRow
                            selectedRecord={selectedRecord}
                            setSelectedRecord={setSelectedRecord}
                            getRecord={getRecord}
                            recordData={recordData}
                            recordLoading={recordLoading}
                            {...props}
                        />
                    ))}
            </tbody>
        </CallTableStyled>
    );
};
