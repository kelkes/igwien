import React from 'react';
import {Head} from 'react-static';
import Section from '../atoms/Section';
import Container from '../atoms/Container';
import '../utils/mailchimp';

export default () => (
	<Section className="style1">
		<Container>
			<h1>Anmeldung</h1>
			<Head>
				<script
					src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
					integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
					crossOrigin="anonymous"
				/>
				<script
					type="text/javascript"
					src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
				/>
			</Head>
			<link
				href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
				rel="stylesheet"
				type="text/css"
			/>
			<div id="mc_embed_signup">
				<form
					action="https://igwien.us14.list-manage.com/subscribe/post?u=b4d75948fd825df24346bbac4&amp;id=de717a8a99"
					method="post"
					id="mc-embedded-subscribe-form"
					name="mc-embedded-subscribe-form"
					className="validate"
					target="_blank"
					noValidate>
					<div id="mc_embed_signup_scroll">
						<div className="indicates-required">
							<span className="asterisk">*</span> indicates
							required
						</div>
						<div className="mc-field-group input-group">
							<strong>
								Anmeldung <span className="asterisk">*</span>
							</strong>
							<ul>
								<li>
									<input
										type="radio"
										value="TagungsteilnehmerIn 250 EUR"
										name="MMERGE5"
										id="mce-MMERGE5-0"
									/>
									<label htmlFor="mce-MMERGE5-0">
										TagungsteilnehmerIn 250 EUR
									</label>
								</li>
								<li>
									<input
										type="radio"
										value="AusbildungsteilnehmerIn 210 EUR"
										name="MMERGE5"
										id="mce-MMERGE5-1"
									/>
									<label htmlFor="mce-MMERGE5-1">
										AusbildungsteilnehmerIn 210 EUR
									</label>
								</li>
							</ul>
						</div>
						<div className="mc-field-group">
							<label htmlFor="mce-FNAME">Vorname </label>
							<input
								type="text"
								value=""
								name="FNAME"
								className=""
								id="mce-FNAME"
							/>
						</div>
						<div className="mc-field-group">
							<label htmlFor="mce-LNAME">Nachname </label>
							<input
								type="text"
								value=""
								name="LNAME"
								className=""
								id="mce-LNAME"
							/>
						</div>
						<div className="mc-field-group">
							<label htmlFor="mce-EMAIL">
								Email Adresse{' '}
								<span className="asterisk">*</span>
							</label>
							<input
								type="email"
								value=""
								name="EMAIL"
								className="required email"
								id="mce-EMAIL"
							/>
						</div>
						<div className="mc-field-group">
							<label htmlFor="mce-MMERGE6">
								Postadresse <span className="asterisk">*</span>
							</label>
							<input
								type="text"
								value=""
								name="MMERGE6"
								className="required"
								id="mce-MMERGE6"
							/>
						</div>
						<div className="mc-field-group">
							<label htmlFor="mce-MMERGE3">
								Workshop 1. Wahl{' '}
								<span className="asterisk">*</span>
							</label>
							<select
								name="MMERGE3"
								className="required"
								id="mce-MMERGE3">
								<option value="" />
								<option value="" />
								<option value="WORKSHOP 1 Therapeutische Arbeit mit geflüchteten Frauen (Heide Anger)">
									WORKSHOP 1 Therapeutische Arbeit mit
									geflüchteten Frauen (Heide Anger)
								</option>
								<option value="WORKSHOP 2 Vom Online-Dating bis zur Online- Scheidung: Veränderungen in Paar- und Familienbeziehungen (Christiane Eichenberg)">
									WORKSHOP 2 Vom Online-Dating bis zur Online-
									Scheidung: Veränderungen in Paar- und
									Familienbeziehungen (Christiane Eichenberg)
								</option>
								<option value="WORKSHOP 3 Wie begegnen wir dem Fremden? Antworten der Gestalttherapie (Maria Flaig)">
									WORKSHOP 3 Wie begegnen wir dem Fremden?
									Antworten der Gestalttherapie (Maria Flaig)
								</option>
								<option value="WORKSHOP 4 Draußen im Drinnen (Werner Gill)">
									WORKSHOP 4 Draußen im Drinnen (Werner Gill)
								</option>
								<option value="WORKSHOP 5 Ich bin ein/e GestaltherapeutIn. Eine Gelegenheit zur Begegnung mit dem eigenen Gefühl der Zugehörigkeit und dem beruflichen Identitätsgefühl (Thomas Schön)">
									WORKSHOP 5 Ich bin ein/e GestaltherapeutIn.
									Eine Gelegenheit zur Begegnung mit dem
									eigenen Gefühl der Zugehörigkeit und dem
									beruflichen Identitätsgefühl (Thomas Schön)
								</option>
								<option value="WORKSHOP 6 Ich-Du und der/die Andere - die Bedeutung Bubers und Lévinas für die Gestalttherapie (Hermann Wegscheider)">
									WORKSHOP 6 Ich-Du und der/die Andere - die
									Bedeutung Bubers und Lévinas für die
									Gestalttherapie (Hermann Wegscheider)
								</option>
								<option value="In den Schuhen der/des Anderen (Inci Ardic, Masoud Eshaghi, Dearly Scholz, Elitsa Tilkidzhieva)">
									In den Schuhen der/des Anderen (Inci Ardic,
									Masoud Eshaghi, Dearly Scholz, Elitsa
									Tilkidzhieva)
								</option>
							</select>
						</div>
						<div className="mc-field-group">
							<label htmlFor="mce-MMERGE7">
								Workshop 2. Wahl{' '}
								<span className="asterisk">*</span>
							</label>
							<select
								name="MMERGE7"
								className="required"
								id="mce-MMERGE7">
								<option value="" />
								<option value="" />
								<option value="WORKSHOP 1 Therapeutische Arbeit mit geflüchteten Frauen (Heide Anger)">
									WORKSHOP 1 Therapeutische Arbeit mit
									geflüchteten Frauen (Heide Anger)
								</option>
								<option value="WORKSHOP 2 Vom Online-Dating bis zur Online- Scheidung: Veränderungen in Paar- und Familienbeziehungen (Christiane Eichenberg)">
									WORKSHOP 2 Vom Online-Dating bis zur Online-
									Scheidung: Veränderungen in Paar- und
									Familienbeziehungen (Christiane Eichenberg)
								</option>
								<option value="WORKSHOP 3 Wie begegnen wir dem Fremden? Antworten der Gestalttherapie (Maria Flaig)">
									WORKSHOP 3 Wie begegnen wir dem Fremden?
									Antworten der Gestalttherapie (Maria Flaig)
								</option>
								<option value="WORKSHOP 4 Draußen im Drinnen (Werner Gill)">
									WORKSHOP 4 Draußen im Drinnen (Werner Gill)
								</option>
								<option value="WORKSHOP 5 Ich bin ein/e GestaltherapeutIn. Eine Gelegenheit zur Begegnung mit dem eigenen Gefühl der Zugehörigkeit und dem beruflichen Identitätsgefühl (Thomas Schön)">
									WORKSHOP 5 Ich bin ein/e GestaltherapeutIn.
									Eine Gelegenheit zur Begegnung mit dem
									eigenen Gefühl der Zugehörigkeit und dem
									beruflichen Identitätsgefühl (Thomas Schön)
								</option>
								<option value="WORKSHOP 6 Ich-Du und der/die Andere - die Bedeutung Bubers und Lévinas für die Gestalttherapie (Hermann Wegscheider)">
									WORKSHOP 6 Ich-Du und der/die Andere - die
									Bedeutung Bubers und Lévinas für die
									Gestalttherapie (Hermann Wegscheider)
								</option>
								<option value="In den Schuhen der/des Anderen (Inci Ardic, Masoud Eshaghi, Dearly Scholz, Elitsa Tilkidzhieva)">
									In den Schuhen der/des Anderen (Inci Ardic,
									Masoud Eshaghi, Dearly Scholz, Elitsa
									Tilkidzhieva)
								</option>
							</select>
						</div>
						<div className="mc-field-group input-group">
							<strong>Tagungsdetails </strong>
							<ul>
								<li>
									<input
										type="checkbox"
										value="1"
										name="group[3321][1]"
										id="mce-group[3321]-3321-0"
									/>
									<label htmlFor="mce-group[3321]-3321-0">
										Ich bitte um vegetarische Verpflegung
									</label>
								</li>
								<li>
									<input
										type="checkbox"
										value="2"
										name="group[3321][2]"
										id="mce-group[3321]-3321-1"
									/>
									<label htmlFor="mce-group[3321]-3321-1">
										Ich werde am Fest (05.10. ab 19.00 Uhr)
										teilnehmen
									</label>
								</li>
							</ul>
						</div>
						<div id="mce-responses" className="clear">
							<div
								className="response"
								id="mce-error-response"
								style={{display: 'none'}}
							/>
							<div
								className="response"
								id="mce-success-response"
								style={{display: 'none'}}
							/>
						</div>
						<div
							style={{position: 'absolute', left: '-5000px'}}
							aria-hidden="true">
							<input
								type="text"
								name="b_b4d75948fd825df24346bbac4_de717a8a99"
								tabIndex="-1"
								value=""
							/>
						</div>
						<div className="clear">
							<input
								type="submit"
								value="Subscribe"
								name="subscribe"
								id="mc-embedded-subscribe"
								className="button"
							/>
						</div>
					</div>
				</form>
			</div>
			<br />
			<br />
			<h3>Anmeldung</h3>
			<p>
				Die Anmeldung ist erst mit der Überweisung der Tagungsgebühr auf
				das weiter unten angeführte Konto gültig.
			</p>
			<h3>Anmeldeschluss</h3>
			<p>21. September 2018</p>
			<h3>Begrenzte TeilnehmerInnenanzahl</h3>
			<p>
				Die Anmeldungen werden in der Reihenfolge des Eintreffens
				berücksichtigt. Sind die 1. und 2. Wahl der Workshops bereits
				vergeben, wird ein freier Platz in einem anderen Workshop
				zugewiesen.
			</p>
			<h3>Kontoverbindung</h3>
			<p>
				Institut für Integrative Gestalttherapie Wien<br />
				IBAN: <strong>AT93 2011 1290 5945 5400 </strong>
				<br />
				BIC: <strong>GIBAATWWXXX</strong>
			</p>
			<h3>Storno</h3>
			<p>
				Bis 6 Wochen vor der Tagung: <strong>keine Stornogebühr</strong>
				<br />
				Bis 4 Wochen davor: <strong>50%</strong>
				<br />
				<strong>
					Ab 7. September 2018 kann keine Rückerstattung erfolgen.
				</strong>
			</p>
			<h3>Kontakt für Rückfragen</h3>
			<p>
				IGWien - Eva Welleditsch<br />
				Tel.: +43 1 47 80 925<br />
				E-Mail: <a href="mailto:tagung@igwien.at">tagung@igwien.at</a>
			</p>
			<h3>Organisationsteam</h3>
			<p>Karin Mann, Ernst Mayerl, Birgit Volonte, Judith Wippel</p>
			<h3>Tagungsort</h3>
			<p>
				Kardinal König Haus<br />
				Kardinal-König-Platz 3, 1130 Wien<br />
				<a href="http://kardinal-koenig-haus.at">
					kardinal-koenig-haus.at
				</a>
				<br />
				Aufgrund begrenzter Parkmöglichkeiten empfehlen wir die Anreise
				mit öffentlichen Verkehrsmitteln: von der U4-Station „Hietzing“
				vier Stationen mit der Straßenbahnlinie 60 Richtung Rodaun bis
				„Jagdschloßgasse“. Sie steigen vor dem Eingang aus.
			</p>
			<h3>Zertifizierung</h3>
			<p>
				Die Fachtagung wird vom ÖBVP als Fortbildung für
				PsychotherapeutInnen gemäß der Fort- und
				Weiterbildungsrichtlinie des Bundesministeriums für Gesundheit
				(BMG) im Ausmaß von insgesamt vierzehn Arbeitseinheiten
				anerkannt.
			</p>
			<h3>Büchertisch</h3>
			<p>a.punkt – Buchhandlung Brigitte Salanda</p>
		</Container>
	</Section>
);
