import React from 'react'
import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'

import styles from './tabs.style'

const TabButton =({name,activeTab,onHandleSearchType})=>{
  return(
    <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
  )
}

const Tabs = ({tabs,activeaTab,setActiveTab}) => {
  return (
    <View style={styles.container}>
     <FlatList
      data={tabs}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <TabButton
          name={item}
          activeTab={activeaTab}
          onHandleSearchType={()=>setActiveTab(item)}
        />
      )}
      keyExtractor={(item)=>item}
     />
    </View>
  )
}

export default Tabs