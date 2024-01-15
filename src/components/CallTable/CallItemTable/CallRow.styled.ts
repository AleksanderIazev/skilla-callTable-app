import styled from 'styled-components';

export const CellItemAvatar = styled.img`
    border-radius: 50%;
    width: 32px;
    height: 32px;
`;

export const CellRow = styled.tr`
    cursor: pointer;
    transition: 150ms ease-in-out;
    color: #122945;

    &:hover {
        background-color: #eaf0fa;
    }
`;

export const CellTableStyled = styled.table`
    border-collapse: collapse;
    width: 90%;
`;
