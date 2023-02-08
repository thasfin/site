import style from "./Footer.module.scss"

export default function Footer() {
	return (
		<footer className={style.footer}>
			<p className="thasfin-logo">Thasfin Community</p>
			<article className={style.copyright}>
				Comunidade de Tecnologia <br />© Thasfin Community. Todos os
				direitos reservados.
			</article>
		</footer>
	)
}
