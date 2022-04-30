import Head from "next/head";

const MetaData = ({ title }) => {
    return(
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/images/company logo/BUSINESS LOGO-1.png" />
        </Head>
    )
}

export default MetaData;