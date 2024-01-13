/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { HeaderCallTableLink, HeaderCallTableWrapper } from './HeaderCallTable.styled';

interface IHeaderCallTableProps {}

export const HeaderCallTable: FC<IHeaderCallTableProps> = ({}) => {
    return (
        <HeaderCallTableWrapper>
            <HeaderCallTableLink href='#' marginRight='31px'>
                Тип
            </HeaderCallTableLink>
            <HeaderCallTableLink href='#' marginRight='47px'>
                Время
            </HeaderCallTableLink>
            <HeaderCallTableLink href='#' marginRight='61px'>
                Сотрудник
            </HeaderCallTableLink>
            <HeaderCallTableLink href='#' marginRight='280px'>
                Звонок
            </HeaderCallTableLink>
            <HeaderCallTableLink href='#' marginRight='154px'>
                Источник
            </HeaderCallTableLink>
            <HeaderCallTableLink href='#' marginRight='154px'>
                Оценка
            </HeaderCallTableLink>
            <HeaderCallTableLink href='#'>Длительность</HeaderCallTableLink>
        </HeaderCallTableWrapper>
    );
};
