import { FC } from 'react';
import { useFetchCallsQuery } from '../../store/callApi/callApi';
import { HeaderCallTable } from './HeaderCallTable/HeaderCallTable';
import { CallItemTable } from './CallItemTable/CallItemTable';
import { CallTableWrapper } from './CallTable.styled';
import { type ICallItemTableProps } from './CallItemTable/CallItemTable.types';
interface ICallTableProps {}

export const CallTable: FC<ICallTableProps> = ({}) => {
    const { data: calls, isLoading, isError } = useFetchCallsQuery({in_out: 1});
    return (
        <CallTableWrapper>
            <HeaderCallTable />
            {isLoading ? (
                <p>Загрузка</p>
            ) : (
                calls &&
                calls.results.map(({id, ...call}: ICallItemTableProps) => (
                    <CallItemTable
                        key={id}
                        {...call}
                    />
                ))
            )}
        </CallTableWrapper>
    );
};
