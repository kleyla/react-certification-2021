import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    .title{
        font-size: 3.75rem;
    }
    .mx-0{
        margin-left: 0;
        margin-right: 0;
    }
    .my-0{
        margin-top: 0;
        margin-bottom: 0;
    }
    .mt-1 {
        margin-top: 8px;
    }
    .mb-1 {
        margin-bottom: 8px;
    }
    .mt-2 {
        margin-top: 16px;
    }
    .mb-2 {
        margin-bottom: 16px;
    }
    .px-1{
        padding-left: 8px;
        padding-right: 8px;
    }
    .py-1{
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .mr-1{
        margin-right: 8px;
    }
    .text-error{
        color: red;
    }
`;
