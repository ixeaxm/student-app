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
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 5,
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
        color: '#000000ff',
        lineHeight: 24,
        textAlign: 'center',
        fontWeight:'bold',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    exitcard: {
        backgroundColor: '#ff0000ff',
        borderRadius: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 5,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,
    },
})

export default styles