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
    position: relative;
    z-index: 1;

    &:hover {
        background-color: #F8FAFD;
    }
`;

export const CellTableStyled = styled.table`
    border-collapse: collapse;
    width: 90%;
`;
