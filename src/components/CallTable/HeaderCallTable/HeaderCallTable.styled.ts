import styled from 'styled-components';

export const CellItem = styled.th<{ paddingRight?: string }>`
    text-align: start;
    padding-right: ${props => props.paddingRight || '0'};
    width: 0;
    font-weight: 400;
    height: 65px;
    border-bottom: 1px solid #eaf0fa;

    &:nth-child(5) {
        color: #5e7793;
    }

    &:nth-child(7) {
        text-align: end;
    }
`;
