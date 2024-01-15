import { FC } from 'react';
import { CellItem } from './HeaderCallTable.styled';

export const HeaderCallTable: FC = () => {
    return (
        <thead>
            <tr style={{ color: '#5e7793' }}>
                <CellItem paddingRight='31px'>Тип</CellItem>
                <CellItem paddingRight='41px'>Время</CellItem>
                <CellItem paddingRight='61px'>Сотрудник</CellItem>
                <CellItem paddingRight='280px'>Звонок</CellItem>
                <CellItem paddingRight='154px'>Источник</CellItem>
                <CellItem paddingRight='414px'>Оценка</CellItem>
                <CellItem>Длительность</CellItem>
            </tr>
        </thead>
    );
};
