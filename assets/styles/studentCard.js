import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    avatar: {
        fontSize: 20,
    },
    studentName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 8,
    },
    studentClass: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 4,
    },
    studentAge: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 4,
    },
    studentHobby: {
        fontSize: 16,
        color: '#4CAF50',
        textAlign: 'center',
        fontWeight: '500',
    },
});

export default styles;