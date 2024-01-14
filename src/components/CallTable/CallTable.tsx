import { FC } from 'react';
import { useFetchCallsQuery } from '../../store/callApi/callApi';
import { HeaderCallTable } from './HeaderCallTable/HeaderCallTable';
import { CallItemTable } from './CallItemTable/CallItemTable';
import { CallTableWrapper } from './CallTable.styled';
interface ICallTableProps {}

export const CallTable: FC<ICallTableProps> = ({}) => {
    const { data, isLoading, isError } = useFetchCallsQuery(0);
    console.log(data);
    return (
        <CallTableWrapper>
            <HeaderCallTable />
            {isLoading ? (
                <p>Загрузка</p>
            ) : (
                data &&
                data.results.map((el: any) => (
                    <CallItemTable
                        key={el.id}
                        in_out={el.in_out}
                        date={el.date}
                        person_avatar={el.person_avatar}
                        partner_data={el.partner_data}
                        from_number={el.from_number}
                        time={el.time}
                    />
                ))
            )}
        </CallTableWrapper>
    );
};
