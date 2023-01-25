import colors from "./colors"

export default {
    addInventoryScreenText: {
        textAlign: 'center',
        marginTop: 40,
        backgroundColor: colors.darkGrey,
        padding: 20
    },
    buttons: {
        paddingTop: 15,
        paddingHorizontal: 90
    },
    homeScreenText: {
        textAlign: 'center',
        marginTop: 40,
        backgroundColor: colors.blue,
        padding: 10,
        color: 'white',
        fontSize: 44
    },
    screenContainer: {
        marginTop: 10
    },
    settingsScreenMainText: {
        textAlign: 'center',
        marginTop: 40,
        backgroundColor: colors.green,
        padding: 20
    },
    settingsScreenSubText: {
        paddingLeft: 10
    },
    homeOptionCard: {
        padding: 30,
        margin: 40,
        borderRadius: 6,
        backgroundColor: colors.green,
        color: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: .5,
        shadowRadius: 9.51,

        elevation: 24,
    },
    homeOptionCardText: {
        color: colors.lightGrey,
        textAlign: 'center',
        fontSize: 20
    }
}