import style from "./Header.module.scss"

export default function Header() {
	return (
		<header className={style.header}>
			<h1 className="thasfin-logo" lang="en">
				Thasfin Community
			</h1>
			<nav className={style.menu}>
				<a
					className="button"
					href="https://discord.com/invite/XQHh3yCN3C"
					target="_blank"
				>
					Discord
				</a>
			</nav>
		</header>
	)
}
