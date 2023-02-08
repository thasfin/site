import Button from "../src/components/Button"
import Footer from "../src/components/Footer"
import Header from "../src/components/Header"

function HomePage() {
	return (
		<>
			<Header />

			<main className="welcome">
				<div className="welcome-wrapper">
					<div className="welcome-intro">
						<p className="welcome-salut">Olá, seja bem vinde! 👋🏽</p>
						<h2 className="welcome-title">
							A comunidade para entusiastas da tecnologia
						</h2>

						<Button
							tag="a"
							href="https://discord.com/invite/XQHh3yCN3C"
						>
							Participe Já!
						</Button>
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

			<Footer />
		</>
	)
}

export default HomePage
