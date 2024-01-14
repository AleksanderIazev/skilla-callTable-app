import styled from 'styled-components';

export const CallItemTableStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(7, auto);
    align-items: center;
    height: 65px;
    background-color: bisque;
    color: #5e7793;
    border-bottom: 1px solid #eaf0fa;
    @media (max-width: 1440px) {
        grid-template-columns: repeat(6, minmax(75px, 1fr)) minmax(0, 1fr);
    }
`;

export const CallItemStyled = styled.p<{ paddingRight?: string }>`
    color: inherit;
    cursor: pointer;
    padding-right: ${props => props.paddingRight || '0'};
    &:last-child {
        @media (max-width: 1440px) {
            justify-self: flex-end;
        }
    }

    @media (max-width: 1440px) {
        padding-right: 2%;
    }
`;
