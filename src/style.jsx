import { StyleSheet, Dimensions } from "react-native"
const screenWidth = Dimensions.get('window').width

const COLORS = {
    // primary: '#4c5359',
    // secondary: '#23282b',
    // tertiary: '#8dc4d9',

    primary: '#232326',
    secondary: '#0f0f0f',
    tertiary: '#2d85dd'
}

export const styles = StyleSheet.create({
    // APP
    app: {
        width: '100%'
    },

    // GENERAL HEADERS
    headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    headerButton: {
        color: COLORS.tertiary,
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

    // EXERCISE HEADER
    exerciseHeader: {
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        justifyContent: 'space-between'
    },
    exerciseHeaderRow: {
        paddingHorizontal: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
    },

    // CALENDAR
    exerciseHeaderCalendar: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    exerciseCalendarDaysContainer: {
        height: '100%',
        paddingHorizontal: 20
    },
    exerciseCalendarDay: {
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    }, 
    exerciseCalendarDayName: {
        fontWeight: 'bold',
        color: '#9e9e9e'
    },
    exerciseCalendarDayNumber: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 26
    },
    exerciseCalendarDayNumberActive: {
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
        gap: 10
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
    },

    // SET ROW
    setRow: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    setRowIndex: {
        color: '#c9c9c9',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderColor: '#4a4a4a',
        borderWidth: 1,
        borderRadius: 6,
        verticalAlign: 'middle'
    },
    setRowWeight: {
        color: 'white',
        fontSize: 16,
    },
    setRowReps: {
        color: 'white',
        fontSize: 16,
    },
    setRowOptions: {
        width: 14,
        height: 14
    },
    
    // RESUME CONTAINER
    resumeContainer: {
        backgroundColor: COLORS.secondary,
        height: '100%',
    },
    resumeTitle: {
        color: '#9c9c9c',
        fontSize: 16,
    },

    // RESUME HEADER
    resumeHeader: {
        backgroundColor: COLORS.primary,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
