import { FC, useState } from 'react';
import { ICallItemTableProps } from '../CallItemTable/CellItemTable.types';
import { CellItemRow } from '../CallItemTable/CellRow';
import { useFetchCallsQuery, useFetchRecordMutation } from '../../../store/callApi/callApi';

export const BodyCallTable: FC = () => {
    const { data: calls } = useFetchCallsQuery({});
    const [getRecord, { data: recordData, isLoading: recordLoading }] = useFetchRecordMutation();
    const [selectedRecord, setSelectedRecord] = useState<string | null>(null);

    return (
        <tbody>
            {calls &&
                calls.results.map((props: ICallItemTableProps) => (
                    <CellItemRow
                        key={props.id}
                        selectedRecord={selectedRecord}
                        setSelectedRecord={setSelectedRecord}
                        getRecord={getRecord}
                        recordData={recordData}
                        recordLoading={recordLoading}
                        {...props}
                    />
                ))}
        </tbody>
    );
};
