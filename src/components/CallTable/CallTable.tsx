import { FC } from 'react';
import { HeaderCallTable } from './HeaderCallTable/HeaderCallTable';
import { CallTableStyled } from './CallTable.styled';
import { BodyCallTable } from './BodyCallTable/BodyCallTable';

export const CallTable: FC = () => {
    return (
        <CallTableStyled>
            <HeaderCallTable />
            <BodyCallTable />
        </CallTableStyled>
    );
};
