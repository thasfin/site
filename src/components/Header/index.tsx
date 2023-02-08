import Button from "../Button"
import style from "./Header.module.scss"

export default function Header() {
	return (
		<header className={style.header}>
			<h1 className="thasfin-logo" lang="en">
				Thasfin Community
			</h1>
			<nav className={style.menu}>
				<Button tag="a" href="https://discord.com/invite/XQHh3yCN3C">
					Discord
				</Button>
			</nav>
		</header>
	)
}
