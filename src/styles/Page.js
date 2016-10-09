import { stylesVars } from './stylesVars'

let styles = {
    mainSection: {
        display: 'inline-block',
        marginLeft: stylesVars.marginPrimary,
        marginRight: stylesVars.marginPrimary,
        padding: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: stylesVars.borderColorSecondary,
        borderRadius: 3,
        width: 975
    },
    text: {
        display: 'block',
        color: stylesVars.fontColorPrimary,
        fontSize: stylesVars.fontSizeSmall,
        fontStyle: 'normal',
        fontFamily: stylesVars.fontFamily,
        textAlign: 'center'
    },
    error: {
        backgroundColor: stylesVars.backgroundColorError,
        textAlign: 'center',
        padding: 10,
        marginLeft: stylesVars.marginPrimary,
        marginRight: stylesVars.marginPrimary,
        fontSize: stylesVars.fontSizeMedium,
        fontWeight: stylesVars.fontWeightBold,
        fontFamily: stylesVars.fontFamily
    }
}

export {styles}
