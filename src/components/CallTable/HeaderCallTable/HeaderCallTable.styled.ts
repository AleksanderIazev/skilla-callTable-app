import styled from 'styled-components';

export const HeaderCallTableWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 65px;
    background-color: bisque;
    color: #5e7793;
    font-size: 14px;
`;

export const HeaderCallTableLink = styled.a<{ marginRight?: string }>`
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    margin-right: ${props => props.marginRight || '0px'};
`;
