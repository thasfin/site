import style from "./Button.module.scss"

interface ButtonProps {
	children: string
	tag: `a` | `button`
	href?: string
	onClick?: () => void
}

export default function Button({ children, tag, href, onClick }: ButtonProps) {
	if (tag === `a`) {
		return (
			<a className={style.button} href={href} target="_blank">
				{children}
			</a>
		)
	}

	return (
		<button className={style.button} onClick={() => onClick()}>
			{children}
		</button>
	)
}
