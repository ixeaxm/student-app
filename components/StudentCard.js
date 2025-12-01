import { View, Text } from 'react-native'
import React from 'react'
import styles from '../assets/styles/studentCard'

const StudentCrad = (props) => {
  return (
    <View style={styles.crad}>
        <View style={styles.avatarContainer}> 
            <Text style={styles.avatar}>{props.emoji}</Text>

        </View>
        <Text style={styles.studentName}> {props.name}</Text>
        <Text style={styles.studentClass}> {props.class} </Text>
        <Text style={styles.studentAge}>{props.age}</Text>
        <Text style={styles.studentHobby}>{props.hobby} </Text>

    </View>
  )
}

export default StudentCrad