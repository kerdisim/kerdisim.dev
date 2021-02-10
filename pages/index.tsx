import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Šimon Kerdík - Web developer</title>
        <meta name="description" content="Web developer." />
      </Head>
      <div className="flex flex-col space-y-4 justify-center items-center min-h-full">
        <h1 className="text-4xl">Šimon Kerdík</h1>
        <p className="text-xl">Web developer</p>
      </div>
    </>
  )
}
