import { FC, useEffect } from 'react';
import { useFetchCallsQuery } from '../../store/callApi/callApi';
import { HeaderCallTable } from './HeaderCallTable/HeaderCallTable';
import { CallItemTable } from './CallItemTable/CallItemTable';
import { CallTableWrapper } from './CallTable.styled';
interface ICallTableProps {}

export const CallTable: FC<ICallTableProps> = ({}) => {
    const { data, isLoading, isError } = useFetchCallsQuery(0);

    useEffect(() => {
        console.log(data);
    }, [isLoading]);

    return (
        <CallTableWrapper>
            <HeaderCallTable />
            <CallItemTable />
        </CallTableWrapper>
    );
};
