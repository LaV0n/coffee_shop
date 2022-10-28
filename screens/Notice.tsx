import {StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';

type MessagesType = {
    id: number
    text: string
}

export function Notice() {

    const messages: MessagesType[] = []

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notice</Text>
            <View style={styles.messages}>
                {messages.length === 0
                    ? <Text>no messages</Text>
                    : messages.map(m => <Text key={m.id}>{m.text}</Text>)
                }
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    messages: {
        marginTop:20
    },
});
