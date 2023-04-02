import { StyleSheet, Dimensions } from "react-native"
const screenWidth = Dimensions.get('window').width

const COLORS = {
    primary: '#232326',
    secondary: '#0f0f0f',
    tertiary: '#2d85dd'
}

// const COLORS = {
//     primary: '#4c5359',
//     secondary: '#23282b',
//     tertiary: '#8dc4d9'
// }

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
        height: 120,
        justifyContent: 'space-between'
    },
    headerRow: {
        paddingHorizontal: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    headerButton: {
        color: COLORS.tertiary,
        // backgroundColor: COLORS.tertiary,
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    headerIcon: {
        width: 25,
        aspectRatio: 1
    },
    // CALENDAR
    headerCalendar: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    calendarDaysContainer: {
        height: '100%',
        paddingHorizontal: 20
    },
    calendarDay: {
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    }, 
    calendarDayName: {
        fontWeight: 'bold',
        color: '#9e9e9e'
    },
    calendarDayNumber: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 26
    },
    calendarDayNumberActive: {
        backgroundColor: COLORS.tertiary,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 26,
        width: 30,
        textAlign: 'center',
        borderRadius: 10
    },
    headerArrowLeft: {
        width: 12,
        aspectRatio: 1,
        transform: 'rotate(90deg)'
    },
    headerArrowRight: {
        width: 12,
        aspectRatio: 1,
        transform: 'rotate(-90deg)'
    },
    // EXERCISE CONTAINER
    exerciseContainer: {
        backgroundColor: COLORS.secondary,
        height: '100%'
    },

    // EXERCISE CARDS CONTAINER
    exerciseCardsContainer: {
        flexGrow: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        gap: 30
    },

    // EXERCISE CARD
    exerciseCard: {
        justifyContent: 'space-between',
        gap: 16
    },
    exerciseMuscleName: {
        color: '#707070',
        fontSize: 24,
        fontWeight: 'bold'
    },
    exerciseCardSetsManager: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        gap: 10
    },
    exerciseCardAddSetButton: {
        color: '#f78939'
    }
})