import * as React from "react"
import { fontSize, spacing } from "@bit/test54.test54.theme"
import PropTypes from "prop-types";

/** @flow */

/**
 * A semantic button element for executing call to actions or a clickable action like "download", "sign up" or to trigger any other JavaScript functionality
 */

export default function Button(props) {
    const {
        text,
        color,
        fontSizeStep,
        horizontalPaddingStep,
        verticalPaddingStep,
        state,
        ...rest
    } = props

    const style = {
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        border: `1px solid ${color}`,
        color,
        backgroundColor: "transparent",
        fontSize: fontSize[fontSizeStep],
        padding: `${spacing[verticalPaddingStep]}px ${spacing[horizontalPaddingStep]}px`,
        width: rest.width,
        overflow: "hidden",
        textOverflow: "ellipsis",
    }
    if (state === "FILLED") {
        style.backgroundColor = color
        style.color = "white"
    }
    return (
        <button {...rest} style={style}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: "Get started!",
    color: "#005d9a",
    fontSizeStep: 1,
    horizontalPaddingStep: 5,
    verticalPaddingStep: 2,
    state: "FILLED",
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    fontSizeStep: PropTypes.number.isRequired,
    horizontalPaddingStep: PropTypes.number.isRequired,
    verticalPaddingStep: PropTypes.number.isRequired,
    state: PropTypes.oneOf(['FILLED', 'OUTLINED']),
}