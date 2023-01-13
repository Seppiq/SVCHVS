import styles from './ContactUs.module.css'

const ContactUs = () => {
    return (
        <div className="wrapper">
            <div className={styles.content}>
                <div className={styles.text__content}>
                    <div className={styles.title}>
                    Contacts
                </div>
                <div className={styles.text}>
                    <ul>
                        <li>bookshop@bookshop.com</li>
                        <li>+111 11 111 11 11</li>
                    </ul>
                </div>
                </div>
                <div className={styles.img}>
                    <img src="https://yt3.ggpht.com/ytc/AMLnZu-vFUUkpHaYMAgNOk72EcajmioQVHjuQzbOo9twjw=s900-c-k-c0x00ffffff-no-rj" alt="" />
                </div>                
            </div>
        </div>
    )
}

export default ContactUs;