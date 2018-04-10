import React from 'react';
import Section from '../atoms/Section';
import Container from '../atoms/Container';

export default () => (
	<Section className="style1">
		<Container>
			<h1>Anmeldung</h1>
			<form name="registration" method="POST" data-netlify="true">
				<input type="hidden" name="form-name" value="registration" />
				<div className="row 50%">
					<div className="12u">
						<label htmlFor="mc">
							<input
								type="radio"
								id="mc"
								name="anmeldung"
								value="TagungsteilnehmerIn 250 EUR"
								required
							/>
							TagungsteilnehmerIn 250 EUR *
						</label>
					</div>
					<div className="12u">
						<label htmlFor="vi">
							<input
								type="radio"
								id="vi"
								name="anmeldung"
								value="AusbildungsteilnehmerIn 210 EUR"
								required
							/>
							AusbildungsteilnehmerIn 210 EUR *
						</label>
					</div>
					<div className="12u">
						<p>
							* Die Verpflegung ist in der Tagungsgebühr
							inkludiert.
						</p>
					</div>
					<div className="6u 12u(mobilep)">
						<input
							type="text"
							name="Vorname"
							id="Vorname"
							placeholder="Vorname"
							required
						/>
					</div>
					<div className="6u 12u(mobilep)">
						<input
							type="text"
							name="Nachname"
							id="Nachname"
							placeholder="Nachname"
							required
						/>
					</div>
				</div>
				<div className="row 50%">
					<div className="12u">
						<input
							type="email"
							name="Email"
							id="Email"
							placeholder="Email"
							required
						/>
					</div>
				</div>
				<div className="row 50%">
					<div className="12u">
						<input
							type="text"
							name="Telefon"
							id="Telefon"
							placeholder="Telefon"
						/>
					</div>
				</div>
				<div className="row 50%">
					<div className="12u">
						<input
							type="text"
							name="Adresse"
							id="Adresse"
							placeholder="Adresse"
							required
						/>
					</div>
				</div>
				<div className="row 50%">
					<div className="12u">
						<select
							name="workshops-erste-wahl"
							id="workshops-erste-wahl"
							required>
							<option value="">--- Workshop 1. Wahl ---</option>
							<option value="WORKSHOP 1">
								Workshop 1 (Heide Anger)
							</option>
							<option value="WORKSHOP 2">
								Workshop 2 (Christiane Eichenberg)
							</option>
							<option value="WORKSHOP 3">
								Workshop 3 (Maria Flaig)
							</option>
							<option value="WORKSHOP 4">
								Workshop 4 (Werner Gill)
							</option>
							<option value="WORKSHOP 5">
								Workshop 5 (Thomas Schön)
							</option>
							<option value="WORKSHOP 6">
								Workshop 6 (Hermann Wegscheider)
							</option>
							<option value="WORKSHOP 7">
								Workshop 7 (Inci Ardic, Masoud Eshaghi, Dearly
								Scholz, Elitsa Tilkidzhieva)
							</option>
						</select>
					</div>
				</div>
				<div className="row 50%">
					<div className="12u">
						<select
							name="workshops-zweite-wahl"
							id="workshops-zweite-wahl"
							required>
							<option value="">--- Workshop 2. Wahl ---</option>
							<option value="WORKSHOP 1">
								Workshop 1 (Heide Anger)
							</option>
							<option value="WORKSHOP 2">
								Workshop 2 (Christiane Eichenberg)
							</option>
							<option value="WORKSHOP 3">
								Workshop 3 (Maria Flaig)
							</option>
							<option value="WORKSHOP 4">
								Workshop 4 (Werner Gill)
							</option>
							<option value="WORKSHOP 5">
								Workshop 5 (Thomas Schön)
							</option>
							<option value="WORKSHOP 6">
								Workshop 6 (Hermann Wegscheider)
							</option>
							<option value="WORKSHOP 7">
								Workshop 7 (Inci Ardic, Masoud Eshaghi, Dearly
								Scholz, Elitsa Tilkidzhieva)
							</option>
						</select>
					</div>
				</div>
				<div className="row 50%">
					<div className="12u">
						<label htmlFor="vegetarisch">
							Ich bitte um vegetarische Verpflegung
						</label>
						<select name="vegetarisch" id="vegetarisch">
							<option value="true">Ja</option>
							<option selected value="false">
								Nein
							</option>
						</select>
					</div>
				</div>
				<div className="row 50%">
					<div className="12u">
						<label htmlFor="vegetarisch">
							Ich werde am Fest (05.10. ab 19.00 Uhr) teilnehmen
						</label>
						<select name="fest" id="fest">
							<option value="true">Ja</option>
							<option selected value="false">
								Nein
							</option>
						</select>
					</div>
				</div>
				<div className="row 50%">
					<div className="12u">
						<ul className="actions">
							<li>
								<input
									type="submit"
									className="button alt"
									value="Anmeldung abschicken"
								/>
							</li>
						</ul>
					</div>
				</div>
			</form>
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
