import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 20,
        backgroundColor: "#f9e2ffff",
    },
    content: {
        backgroundColor: "#f9e2ffff"

    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,
    },
    Emoji: {
        fontSize: 50,
        textAlign: 'center',
    },
    cardText: {
        fontSize: 15,
        color: '#666',
        lineHeight: 24,
        textAlign: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
})

export default styles