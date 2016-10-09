import { stylesVars } from './stylesVars'

let styles = {
    repoColumn: {
        width: 720,
        float: 'left'
    },
    repository: {
        display: 'block',
        overflow: 'auto',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: stylesVars.borderColorSecondary
    },
    titleColumn: {
        float: 'left',
        verticalAlign: 'top',
        paddingTop: 24,
        paddingBottom: 24,
        width: 500
    },
    languageColumn: {
        display: 'inline-block',
        verticalAlign: 'top',
        textAlign: 'right',
        width: 100,
        paddingTop: 24,
        paddingBottom: 24
    },
    starColumn: {
        float: 'right',
        verticalAlign: 'top',
        textAlign: 'right',
        width: 100,
        paddingTop: 24,
        paddingBottom: 24
    },
    text: {
        display: 'block',
        color: stylesVars.fontColorPrimary,
        fontSize: stylesVars.fontSizeSmall,
        fontWeight: stylesVars.fontWeightNormal,
        fontFamily: stylesVars.fontFamily,
        marginBottom: 10,
        marginTop: 3
    },
    title: {
        display: 'block',
        fontSize: stylesVars.fontSizeMedium,
        fontWeight: stylesVars.fontWeightBold,
        fontFamily: stylesVars.fontFamily
    },
    link: {
        color: stylesVars.fontColorLink,
        textDecoration: 'none',
        cursor: 'auto'
    },
    paginateContainer: {
        display: 'block',
        margin: 'auto',
        marginTop: 30,
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 3,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: stylesVars.fontSizeSmall,
        fontWeight: stylesVars.fontWeightBold,
        color: stylesVars.fontColorLink,
        verticalAlign: 'middle',
        cursor: 'pointer',
        background: stylesVars.backgroundColorPrimary,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: stylesVars.borderColorSecondary
    },
    noRepos: {
        textAlign: 'center',
        marginTop: stylesVars.marginPrimary
    }
}

export {styles}
