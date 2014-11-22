<section id="contact">
	<div class="viewport">
		<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29265.489882584425!2d-46.63090188834615!3d-23.525803194484016!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1416181801682" frameborder="0" style="border:0"></iframe>
		<div class="contact-container">

			<?php include "menu.php"; ?>

			<div class="contact-content">
				<div class="contact-social">
					<ul>
						<li style="margin: 0 10px 0 0;"><a class="facebook" href="www.facebook.com/joaovitta" title="Facebook" target="new"></a></li>
						<li><a class="linkedin" href="http://br.linkedin.com/in/joaovitta" title="LinkedIn" target="new"></a></li>
					</ul>
				</div>
				<div class="contact-form">
					<form action="" name="form" id="" method="post">
						<input type="text" name="name" id="name" validate="not_empty" placeholder="Nome:" onfocus="if (this.placeholder=='Nome:') this.placeholder='';" onblur="if (this.placeholder=='') this.placeholder='Nome:'" title="Informe o seu nome.">
						<input type="text" name="email" id="email" validate="not_empty" placeholder="E-mail:" onfocus="if (this.placeholder=='E-mail:') this.placeholder='';" onblur="if (this.placeholder=='') this.placeholder='E-mail:'" title="Informe o seu e-mail.">
						<input type="text" name="phone" id="phone" validate="not_empty" placeholder="Telefone:" onfocus="if (this.placeholder=='Telefone:') this.placeholder='';" onblur="if (this.placeholder=='') this.placeholder='Telefone:'" title="Informe um telefone de contato.">
						<input type="text" name="subject" id="subject" validate="not_empty" placeholder="Assunto:" onfocus="if (this.placeholder=='Assunto:') this.placeholder='';" onblur="if (this.placeholder=='') this.placeholder='Assunto:'" title="Dê um assunto para a sua mensagem.">
						<textarea placeholder="Escreva a sua mensagem..." onfocus="if (this.placeholder=='Escreva a sua mensagem...') this.placeholder='';" onblur="if (this.placeholder=='') this.placeholder='Escreva a sua mensagem...'"></textarea>
						<input type="submit" name="send" id="send" value="submit">
					</form>
				</div>
			</div>
		</div>
	</div>
</section>