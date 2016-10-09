import { stylesVars } from './stylesVars'

let styles = {
    userColumn: {
        paddingRight: 20,
        float: 'left',
        width: 233
    },
    avatar: {
        borderRadius: 6
    },
    names: {
        position: 'static',
        top: 0,
        display: 'block',
        width: 233,
        paddingTop: 12,
        paddingBottom: 12
    },
    text: {
        display: 'block',
        color: stylesVars.fontColorPrimary,
        fontSize: stylesVars.fontSizeSmall,
        fontFamily: stylesVars.fontFamily,
        marginBottom: 15
    },
    name: {
        display: 'block',
        fontSize: stylesVars.fontSizeExtraLarge,
        fontWeight: stylesVars.fontWeightBold,
        fontFamily: stylesVars.fontFamily
    },
    login: {
        display: 'block',
        fontSize: stylesVars.fontSizeLarge,
        color: stylesVars.fontColorPrimary,
        fontFamily: stylesVars.fontFamily
    }
}

export {styles}
