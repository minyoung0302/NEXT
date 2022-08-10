import { useRouter } from "next/router"
import Link from "next/link"
import styles from "../../styles/champions/NavigaterBar.module.css"

export default function NavigaterBar() {
    const router = useRouter()
    return(
        <>
        <Link href="/champions/top">
                <div className={`${styles.btn} ${router.pathname === "/champions/top" ? styles.active : ""}`}>탑</div>
        </Link>
        <Link href="/champions/jug">
				<div className={`${styles.btn} ${router.pathname === "/champions/jug" ? styles.active : ""}`}>정글</div>
		</Link>
        <Link href="/champions/mid">
				<div className={`${styles.btn} ${router.pathname === "/champions/mid" ? styles.active : ""}`}>미드</div>
		</Link>
        <Link href="/champions/adc">
				<div className={`${styles.btn} ${router.pathname === "/champions/adc" ? styles.active : ""}`}>원딜</div>
		</Link>
        <Link href="/champions/sup">
				<div className={`${styles.btn} ${router.pathname === "/champions/sup" ? styles.active : ""}`}>서폿</div>
		</Link>
        </>
    )
}