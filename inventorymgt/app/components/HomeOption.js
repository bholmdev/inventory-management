import { View, Text } from "react-native";
import { Card, Icon } from "react-native-elements";
import colors from "../config/colors";
import styles from "../config/styles";

const HomeOption = ( {title, icon} ) => {
    return (
        <View style={{justifyContent: 'center'}}>
            <Card containerStyle={styles.homeOptionCard}>     
                <Text style={styles.homeOptionCardText}>
                    <Icon
                        name={icon}
                        type='ionicon'
                        size={25}
                        iconStyle={{ width: 24 }}
                        color={colors.accent}
                    />
                   {title}  
                </Text>
            </Card>
        </View>
    )
}

export default HomeOption;