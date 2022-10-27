import Router from 'next/router';
interface Url {
    url?: String;
}
export const redirect = ({ url }: Url | any) => {
    Router.push(url);
};
