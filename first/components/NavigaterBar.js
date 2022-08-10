import { useRouter } from "next/router"
import Link from "next/link"
import styles from"../styles/main/NavigaterBars.module.css"

export default function NavigaterBar() {
    const router = useRouter()
    return(
        <div className={`${styles.menu}`}>
        <Link href="/champions/">
            <div className={`${styles.btn} ${router.pathname === "/champions" ? styles.active : ""}`}>챔피언 분석</div>
        </Link>
        <Link href="/gamemode/">
            <div className={`${styles.btn} ${router.pathname === "/gamemode" ? styles.active : ""}`}>게임 모드</div>
        </Link>
        <Link href="/lanking/">
            <div className={`${styles.minibtn} ${router.pathname === "/lanking" ? styles.active : ""}`}>랭킹</div>
        </Link>
        <Link href="/multisearch/">
            <div className={`${styles.btn} ${router.pathname === "/multisearch" ? styles.active : ""}`}>멀티 서치</div>
        </Link>
        <Link href="/replay/">
            <div className={`${styles.btn} ${router.pathname === "/replay" ? styles.active : ""}`}>천상계 관전</div>
        </Link>
        <Link href="/notableplayer/">
            <div className={`${styles.bigbtn} ${router.pathname === "/notableplayer" ? styles.active : ""}`}>주목할만한 플레이어</div>
        </Link>
        <Link href="/patchnote/">
            <div className={`${styles.btn} ${router.pathname === "/patchnote" ? styles.active : ""}`}>패치 노트</div>
        </Link>
        <Link href="/lab/">
            <div className={`${styles.btn} ${router.pathname === "/lab" ? styles.active : ""}`}>연구실</div>
        </Link>
        </div>
        
    )
}