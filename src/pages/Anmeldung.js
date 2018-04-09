import React from 'react';
import Section from '../atoms/Section';
import Container from '../atoms/Container';

export default () => (
	<Section className="style1">
		<Container>
			<h3>Tagungsgebühr</h3>
			<p>
				Eingetragene PsychotherapeutInnen: <strong>250 EUR</strong>
				<br />
				AusbildungsteilnehmerInnen: <strong>210 EUR</strong>
				<br />
				Die Verpflegung ist in der Tagungsgebühr inkludiert.
			</p>
			<h3>Anmeldung</h3>{' '}
			<p>
				Die Anmeldung ist erst mit der Überweisung der Tagungsgebühr auf
				das weiter unten angeführte Konto gültig.
			</p>
			<h3>Anmeldeschluss</h3>
			<p>
				<strong>21. September 2018</strong>
			</p>
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
				Kardinal-König-Platz 3<br />
				1130 Wien<br />
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
