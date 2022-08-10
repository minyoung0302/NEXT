import Head from "next/Head"

export default function HeadTitle({title}) {
	return 	(
		<Head>
			<title>{title} | lol.zr</title>
		</Head>
	)
}