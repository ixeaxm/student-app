import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../assets/styles/Menustyles'

export default function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.content}>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>เมนูข้อมูล</Text>
                <View style={styles.card}>
                <Text style={styles.cardText}>
                    สรุปการมาเรียน
                </Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardText}>
                    ผลการเรียน
                </Text>
                </View>
                 <View style={styles.card}>
                <Text style={styles.cardText}>
                    ความประพฤติ
                </Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>เมนูบันทึก</Text>
                <View style={styles.card}>
                <Text style={styles.cardText}>
                    การบ้าน
                </Text>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}