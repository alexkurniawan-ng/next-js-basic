import Layout from "../../component/Layout"
import { useRouter } from "next/router"
import styles from '../../styles/Users.module.css'

export default function Users(props) {
    const {dataUsers} = props
    const router = useRouter()
    console.log(dataUsers)
    return (
        <Layout pageTitle="Users Page">
            {dataUsers.map((user) => (
                <div className={styles.card} key={user.id} onClick={()=> router.push(`/users/${user.id}`)}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                </div>
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json()
    return {
        props: {
            dataUsers,
        }
    }
}