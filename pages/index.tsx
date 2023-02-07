function HomePage() {
	return (
		<>
			<header>
				<h1 className="thasfin-logo" lang="en">
					Thasfin Community
				</h1>
				<nav className="menu">
					<a
						className="button"
						href="https://discord.com/invite/XQHh3yCN3C"
						target="_blank"
					>
						Discord
					</a>
				</nav>
			</header>

			<main className="welcome">
				<div className="welcome-wrapper">
					<div className="welcome-intro">
						<p className="welcome-salut">Olá, seja bem vinde! 👋🏽</p>
						<h2 className="welcome-title">
							A comunidade para entusiastas da tecnologia
						</h2>
						<a
							className="button"
							href="https://discord.com/invite/XQHh3yCN3C"
						>
							Participe Já!
						</a>
					</div>
					<img
						className="astronaut-icon"
						src="/imgs/astronaut-icon.svg"
					/>
				</div>
				<p className="welcome-text">
					Somos uma comunidade de tecnologia brasileira focada em
					desenvolvimento web, mobile, IOT, etc... Promovemos eventos
					online e presenciais com foco em que está começando e para
					quem está rampando sua carreira à senioridade. Desenvolvemos
					em conjunto projetos Open Source que estão alocados no
					GitHub para qualquer um no mundo contribuir.
				</p>
			</main>

			<footer>
				<p className="thasfin-logo">Thasfin Community</p>
				<article className="copyright">
					Comunidade de Tecnologia <br />© Thasfin Community. Todos os
					direitos reservados.
				</article>
			</footer>
		</>
	)
}

export default HomePage
