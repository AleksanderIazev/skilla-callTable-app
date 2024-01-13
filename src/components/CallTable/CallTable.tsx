import { FC, useEffect } from 'react';
import { useFetchCallsQuery } from '../../store/callApi/callApi';
import { HeaderCallTable } from './HeaderCallTable/HeaderCallTable';
interface ICallTableProps {}

export const CallTable: FC<ICallTableProps> = ({}) => {
    const { data, isLoading, isError } = useFetchCallsQuery(0);

    useEffect(() => {
        console.log(data);
    }, [isLoading]);

    return (
        <div>
            <HeaderCallTable />
        </div>
    );
};
