import Head from 'next/head'

export default function MetaHead({ title, description }) {
    if (title === undefined) title = "appending";
    else title = "appending | " + title;
    if (description === undefined) description = "Powered by appending.";

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="favicon.ico" />
        </Head>
    )
}