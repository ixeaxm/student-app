import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './assets/styles/HeaderStyles'
import Header from './components/Header'
import appinfo from './data/appinfo'
import StudentData from './data/StudentData'
import StudentCrad from './components/StudentCard'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header title={appinfo.title} subtitle={appinfo.subtitle}
      schoolName={appinfo.schoolName} version={appinfo.verion}/>

      <View style={styles.content}>
        {StudentData.map((s) => (
          <StudentCrad
            key={s.id}
            emoji={s.emoji}
            name={s.name}
            class={s.class}
            age={s.age}
            hobby={s.hobby}
          />
        ))}
      </View>
    </ScrollView>
  )
}