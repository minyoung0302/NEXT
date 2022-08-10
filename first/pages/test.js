import styles from "../styles/main/test.module.css"

export default function test() {
  return (
    <>
        <div className={`${styles.header}`}>
            <h1>test header</h1>
        </div>
        <div className={`${styles.body}`}>
            <h1>test body</h1>
        </div>
        <div className={`${styles.search}`}>
            <h2>test search</h2>
        </div>
        <div className={`${styles.logo}`}>
            <h2>test logo</h2>
        </div>
        <div className={`${styles.left}`}>
            <h2>test left</h2>
        </div>
        <div className={`${styles.right}`}>
            <h2>test right</h2>
        </div>
    </>

  )
}