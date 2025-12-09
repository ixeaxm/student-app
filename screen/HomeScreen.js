import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../assets/styles/HomeStyles'

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.content}>

            <View style={styles.welcomeCard}>
                <Text style={styles.Emoji}>🧑‍🦱</Text>
                <Text style={styles.cardTitle}>ข้อมูลของนักเรียน</Text>
                <Text style={styles.cardText}>
                    นายออมสิน เกิดสุข{'\n'}
                    รหัสนักเรียน : 66209010010{'\n'}
                    สาขาวิชา : เทคโนโลยีสารสนเทศ
                </Text>
            </View>
        </View>
    </ScrollView>
  )
}