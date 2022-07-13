import style from "./Footer.module.css"

function Footer() {
    return (
        <>
            <footer className={style.FooterContainer}>
                <div className={style.Container}>
                    <div className={style.Terms}>
                        <p>"You can't have great software without a great team"</p>
                        {/* <p>&copy;{new Date().getFullYear()} Rodrigo Ribes</p> */}
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;