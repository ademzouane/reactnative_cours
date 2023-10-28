import React from 'react'
import { View, Text ,TouchableOpacity,Image} from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconurl,dimension,hendlerpress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={hendlerpress}>
      <Image source={iconurl} 
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn ; 