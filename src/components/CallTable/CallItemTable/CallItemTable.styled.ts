import styled from 'styled-components';

export const CallItemTableStyled = styled.div`
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(7, auto);
    align-items: center;
    height: 65px;
    color: #5e7793;
    border-bottom: 1px solid #eaf0fa;
    color: #122945;
    padding: 0 40px;
    transition: 150ms ease-in-out;

    &:hover {
        background-color: #EAF0FA;
    }
    @media (max-width: 1440px) {
        grid-template-columns: repeat(6, minmax(75px, 1fr)) minmax(0, 1fr);
    }
`;

export const CallItemAvatar = styled.img`
    border-radius: 50%;
    width: 32px;
    height: 32px;
`;

export const CallItemStyled = styled.p<{ paddingRight?: string }>`
    color: inherit;
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
