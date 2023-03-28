import { StyleSheet, Dimensions } from "react-native"
const screenWidth = Dimensions.get('window').width

const COLORS = {
    primary: '#4c5359',
    secondary: '#23282b',
    tertiary: '#3a3f44'
}

export const styles = StyleSheet.create({
    // APP
    app: {
        width: '100%'
    },

    // HEADER
    header: {
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60
    },
    headerText: {
        color: 'white',
        backgroundColor: COLORS.tertiary,
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },

    // WEEKS CONTAINER
    weeksContainer: {
        backgroundColor: COLORS.secondary,
        height: '100%'
    },
    weeksContainer__cardsContainer: {
        paddingHorizontal: 30,
        paddingVertical: 40
    },
    weeksContainer__card: {
        backgroundColor: COLORS.primary,
        width: screenWidth - 60,
        height: '100%',
        marginRight: 30,
        borderRadius: 10,
    },
    weeksContainer__cardTitle: {
      backgroundColor: 'red', 
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      height: 40,
      backgroundColor: '#5e8aab',
      justifyContent: 'center',
      alignItems: 'center'
    },
    weeksContainer__cardTitleText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16
    },
    weeksContainer__cardMuscles: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        rowGap: 20
    },
    weeksContainer__cardMusclesEmpty: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40
    },
    weeksContainer__noMusclesCardText: {
        color: '#ededed',
        fontSize: 20,
        marginBottom: 4,
        fontWeight: '100'
    },

    // MUSCLE WEEK ROW

    MuscleWeekRow: {
        height: 80,
        borderRadius: 10,
        borderColor: '#82a7c2',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        backgroundColor: '#5b6a75'
    },
    MuscleWeekRow__image: {
        width: 50,
        height: 50,
        marginRight: 20
    },
    MuscleWeekRow__text: {
        color: 'white',
        fontSize: 24
    }
})