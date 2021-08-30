import Layout from "../component/Layout"
import styles from '../styles/Blog.module.css'

// ### SERVER SIDE RENDERING
export default function blog(props) {
    const {dataBlog} = props;
    return (
        <Layout pageTitle="Blog Page">
            {dataBlog.map(blog => {
                return (
                    <div className={styles.card} key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </div>
                )
            })}
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dataBlog = await res.json()
    return {
        props: {
            dataBlog
        }
    }
}