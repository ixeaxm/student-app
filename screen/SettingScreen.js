import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../assets/styles/Settingstyles'

export default function SettingScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.content}>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>การตั่งค่า</Text>
                <View style={styles.card}>
                <Text style={styles.cardText}>
                    ข้อมูลส่วนตัว
                </Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardText}>
                    นโยบายความเป็นส่วนตัว
                </Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardText}>
                    ภาษา
                </Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardText}>
                    ตั่งค่าการแจ้งเตือน
                </Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardText}>
                    คือมือการใช้งาน
                </Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardText}>
                    ติดต่อฝ่ายประชาสัมพันธ์
                </Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardText}>
                    เวอร์ชั่น
                </Text>
                </View>
                <View style={styles.exitcard}>
                <Text style={styles.cardText}>
                    ออกจากระบบ
                </Text>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}