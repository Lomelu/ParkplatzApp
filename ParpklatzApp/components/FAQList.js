import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Accordion from './Accordion'

export default class FAQList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    key: '1',
                    title: 'Wie beginne ich eine Fahrt?',
                    data: 'Nachdem Sie eine Region ausgewöhlt haben, klicken sie oben auf Fahrt beginnen danach startet die Fahrt automatisch',
                },
                {
                    key: '2',
                    title: 'Wie wähle ich eine Region aus?',
                    data: 'Drücken Sie auf die gewüsnchte Region auf der Karte, die ausgewählte Region wird anschließend Rot markiert.',
                },
            
                {
                    key: '3',
                    title: 'Wie kann ich den aktuelen Zustand der einzelen Parkplätze sehen?',
                    data: 'Wählen Sie dazu einfach den gewünschen Standort aus und es öffnet sich ein Fenster das die Detailansicht der einzelen Parkplätze bereithält ',
                },      
                {
                    key: '4',
                    title: 'Was sind die grünen Kreise oder die schwarzen Flächen auf der Detailansicht?',
                    data: 'Die grünen Kreise stellen Bäume dar, die schwarzen Flächen Gebäude.',
                },
                {
                    key: '5',
                    title: 'Wie kome ich zurück zur Regionsauswahl?',
                    data: 'Klicken Sie oben auf fahrt beenden um wieder zum Ausgangszustand zurück zu kehren.',
                },
                {
                    key: '6',
                    title: 'Was zeigt das Balkendiagramm an?',
                    data: 'Das Balkendiagramm zeigt die prozentuale Belgeung der Parkplätze zum jeweiligen Wochentag an. 100% bedeutet dabei, dass der Parkplatz den ganzen Tag belegt ist.'
                },
                {
                    key: '7',
                    title: 'Was zeigt der Zeitstrahl an?',
                    data: 'Durch den roten (belegt) oder grünen (frei) Balken wird die tatsächliche Belegung in der letzten Woche angegeben.'
                },
                {
                    key: '8',
                    title: 'Warum braucht die App so lange zum laden?',
                    data: 'Beim allerersten Starten, muss der gesamte Code und alle Bilder heruntergeladen werden. Außerdem wird bei jedem Start der Standort festgestellt und die Parkplatzdaten vom Server abgerufen. Dies benötigt etwas Zeit',
                },
                {
                    key: '9',
                    title: 'Zeigt die App meinen Standort an?',
                    data: 'Um alle Funktionien der App benutzen zu können, benötigt diese Berechtigungen um den Standort Anzuzeigen.',
                },
                {
                    key: '10',
                    title: 'Werden persönliche Daten über mich gespeichert?',
                    data: 'Es werden keine Daten über die Benutzer abgespeichert ',
                },
            ]
        }

        if(props.filterKeys){
            this.state.menu = this.state.menu.filter(el => {
                if(props.filterKeys.indexOf(el.key) !== -1){
                    return true;
                }else{
                    return false;
                }
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderAccordions()}
            </View>
        );
    }

    renderAccordions = () => {
        const items = [];

        for (item of this.state.menu) {
            items.push(
                <Accordion
                    key={item.key}
                    title={item.title}
                    data={item.data} />
            );

        }
        return items;
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 1,
        backgroundColor: 'white',
        width: '100%',

    }
});