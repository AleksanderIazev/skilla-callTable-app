/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { HeaderCallTableLink, HeaderCallTableWrapper } from './HeaderCallTable.styled';

interface IHeaderCallTableProps {}

export const HeaderCallTable: FC<IHeaderCallTableProps> = ({}) => {
    return (
        <HeaderCallTableWrapper>
            <HeaderCallTableLink href='#' paddingRight='31px'>
                Тип
            </HeaderCallTableLink>
            <HeaderCallTableLink href='#' paddingRight='47px'>
                Время
            </HeaderCallTableLink>
            <HeaderCallTableLink href='#' paddingRight='61px'>
                Сотрудник
            </HeaderCallTableLink>
            <HeaderCallTableLink href='#' paddingRight='280px'>
                Звонок
            </HeaderCallTableLink>
            <HeaderCallTableLink href='#' paddingRight='154px'>
                Источник
            </HeaderCallTableLink>
            <HeaderCallTableLink href='#' paddingRight='414px'>
                Оценка
            </HeaderCallTableLink>
            <HeaderCallTableLink href='#'>Длительность</HeaderCallTableLink>
        </HeaderCallTableWrapper>
    );
};
