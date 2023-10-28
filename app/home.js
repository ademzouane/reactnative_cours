import {useState} from "react";
import { Stack ,useRouter} from 'expo-router';
import { View,Text ,SafeAreaView, ScrollView} from "react-native";
import { COLORS ,icons,images,SIZES} from "../constants";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import {Welcome , Popularjobs,Nearbyjobs} from "../components"
const Home = ()=>{
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");
  
    const hendlerpress = ()=>{
        console.log("you clicked the menu button or the profile whatever ") ;
    }
    return(
        <SafeAreaView style={{flex: 1,bckgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={
                    {
                        headerStyle:{backgroundColor:COLORS.lightWhite  },
                        headerShadowVisible: false ,
                        headerLeft:()=> (
                            <ScreenHeaderBtn iconurl={icons.menu} dimension="100%" hendlerpress={hendlerpress}/>
                        ) ,
                        headerRight : ()=>(
                            <ScreenHeaderBtn iconurl={images.profile} dimension="100%" hendlerpress={hendlerpress}/>
                        ),
                        headerTitle: "" ,
                    }
                }

            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex : 1,padding : SIZES.medium
                }}>
                  <Welcome
                   searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }} />
                 <Popularjobs />
                 <Nearbyjobs/>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
export default Home ; 