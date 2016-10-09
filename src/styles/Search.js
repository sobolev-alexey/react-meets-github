import { stylesVars } from './stylesVars'

let styles = {
    searchSection: {
        display: 'inline-block',
        marginLeft: stylesVars.marginPrimary,
        marginRight: stylesVars.marginPrimary,
        width: 975,
        padding: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: stylesVars.borderColorPrimary,
        borderRadius: 3,
        background: stylesVars.backgroundColorSecondary
    },
    search: {
        display: 'table',
        margin: 'auto'
    },
    input: {
        float: 'left',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: stylesVars.borderColorPrimary,
        borderRadius: 5,
        color: stylesVars.fontColorSecondary,
        fontSize: stylesVars.fontSizeSmall,
        display: 'block',
        height: 15,
        margin: 0,
        padding: 9,
    },
    button: {
        float: 'left',
        color: stylesVars.fontColorInverted,
        backgroundColor: stylesVars.backgroundColorButton,
        borderColor: stylesVars.borderColorAdditional,
        display: 'inline-block',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 7,
        paddingBottom: 7,
        marginLeft: 30,
        height: 34,
        fontSize: stylesVars.fontSizeSmall,
        fontWeight: stylesVars.fontWeightNormal,
        textAlign: 'center',
        verticalAlign: 'middle',
        cursor: 'pointer',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4
    }
}

export {styles}
