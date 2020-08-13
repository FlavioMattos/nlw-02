import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#04D361',
    },

    imageBlock: {
        flex: 0.40,
        marginVertical: 40,
        alignItems: "center",
        justifyContent: "center"
    },

    image: {
        width: 96,
        height: 96,
    },

    contentBlock: {
        flex: 0.60,
        paddingHorizontal: 40,
        paddingTop: 40,
        backgroundColor: "#FFF",
    },

    contentNumber: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 40,
        lineHeight: 44,
        color: "#6A6180",
        opacity: 0.16,
    },

    contentText: {
        marginTop: 16,
        fontFamily: 'Archivo_400Regular',
        fontSize: 24,
        lineHeight: 34,
        color: "#6A6180"
    },

    contentFooterGroup: {
        marginTop: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    contentFooterDotGroup: {
        marginTop: -18,
        flexDirection: "row",
        alignItems: "center"
    },

    contentFooterFirstDot: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 40,
        lineHeight: 40,
        color: "#6A6180",
        opacity: 0.16,
    },

    contentFooterSecondDot: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 40,
        lineHeight: 40,
        color: "#6A6180",
    },

});

export default styles;