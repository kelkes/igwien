import React from 'react';
import {Link} from 'react-static';
import Section from '../atoms/Section';
import SpeakerLink from '../atoms/SpeakerLink';
import TalkLink from '../atoms/TalkLink';
import Container from '../atoms/Container';

export default () => (
	<Section className="style1">
		<Container>
			<table>
				<tbody>
					<tr>
						<td colSpan={2}>
							<h1>Freitag 5. Oktober</h1>
						</td>
					</tr>
					<tr>
						<td>13:00</td>
						<td>Registrierung</td>
					</tr>
					<tr>
						<td>14:00</td>
						<td>
							Eröffnung
							<br />Ursula Grillmeier, Hermann Wegscheider, Karin
							Mann, Ernst Mayerl
						</td>
					</tr>
					<tr>
						<td>14:30</td>
						<td>
							<TalkLink title="Ich und die Anderen - Philosophische Betrachtungen über das Leben in einer pluralistischen Gesellschaft" />
							<br />
							<SpeakerLink speaker="Isolde Charim" />
						</td>
					</tr>
					<tr>
						<td>15:45</td>
						<td>Pause</td>
					</tr>
					<tr>
						<td>16:00</td>
						<td>
							<TalkLink title="Was meinen GestaltherapeutInnen, wenn sie von Zugehörigkeit sprechen? Ein persönlicher Bericht" />
							<br />
							<SpeakerLink speaker="Peter Toebe" />
						</td>
					</tr>
					<tr>
						<td>17:15</td>
						<td>Pause</td>
					</tr>
					<tr>
						<td>17:30</td>
						<td>
							Vollklang - taktvoll <br />Gemeinsames Singen & mehr
							<br />
							<SpeakerLink speaker="Reinhard Bayer" />
						</td>
					</tr>
					<tr>
						<td>19:00</td>
						<td>Fest und Graduierungsfeier</td>
					</tr>
					<tr>
						<td colSpan={2}>
							<br />
							<br />
							<h1>Samstag 6. Oktober</h1>
						</td>
					</tr>
					<tr>
						<td>09:00</td>
						<td>
							<TalkLink title="Autonomie und Zugehörigkeit im kulturellen Kontext - Wie bedeutsam sind kulturbedingte Unterschiede für die gestalttherapeutische Arbeit?" />
							<br />
							<SpeakerLink speaker="Peter Philippson" />
						</td>
					</tr>
					<tr>
						<td>10:15</td>
						<td>Pause</td>
					</tr>
					<tr>
						<td>10:30</td>
						<td>
							<TalkLink title="Drinnen und draußen - Identität als Falle und als sinnvolles Konzept" />
							<br />
							<SpeakerLink speaker="Klaus Ottomeyer" />
						</td>
					</tr>
					<tr>
						<td>11:45</td>
						<td>Pause</td>
					</tr>
					<tr>
						<td>12:00</td>
						<td>
							<TalkLink title="Uns verbindet ein Glasfaserkabel Moderne Kommunikationstechnologien: Chancen und Probleme für die Psychotherapie" />
							<br />
							<SpeakerLink
								speaker="Christiane
							Eichenberg"
							/>
						</td>
					</tr>
					<tr>
						<td>13:15</td>
						<td>Mittagspause</td>
					</tr>
					<tr>
						<td>14:30</td>
						<td>
							<Link to="/workshops">Workshops</Link>
						</td>
					</tr>
					<tr>
						<td>17:00</td>
						<td>Resonanzen zum 20 Jahre Jubiläum des IGWien</td>
					</tr>
					<tr>
						<td>18:00</td>
						<td>Abschluss <br />anschließend gemütlicher Ausklang</td>
					</tr>
				</tbody>
			</table>
		</Container>
	</Section>
);
