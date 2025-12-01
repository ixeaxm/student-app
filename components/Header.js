import { View, Text } from 'react-native'
import React from 'react'
import styles from '../assets/styles/HeaderStyles'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
      <Text style={styles.subHeaderText}>{props.subtitle}</Text>
      <Text style={styles.subHeaderText}>{props.schoolName}</Text>
      <Text style={styles.subHeaderText}>Version :{props.version}</Text>
    </View>
  )
}

export default Header