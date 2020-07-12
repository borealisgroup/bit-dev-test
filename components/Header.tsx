import * as React from "react"
import { fontSize, spacing } from "@bit/test54.test54.theme"
import PropTypes from "prop-types";

// Learn more: https://framer.com/api
const icons = {
    Arrow: ({ color, ...props }) => <svg {...props} viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><path d="M.134 5.983l.243-.24 4.8-4.69.69.478L1.31 5.983l4.556 4.452-.689.479-4.8-4.692z" fill={color} fill-rule="nonzero" stroke={color}/></svg>,
    Cross: ({ color, ...props }) => <svg {...props}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill={color} fill-rule="evenodd"><path d="M2.558 23L0 20.5 21.153 0 23.5 2.318z"/><path d="M20.942 23l2.558-2.5L2.347 0 0 2.318z"/></g></svg>
}

/** @flow */

/**
 * A basic header element to make clear where you are in the app
 */

export default function Header(props) {
    const { text, fontSizeStep, verticalPaddingStep, horizontalPaddingStep, color, icon, iconSize, ...rest } = props
    const Icon = icons[icon];
    return (
      <header
          style={{
              minWidth: '300px',
              width: "100%",
              borderBottom: `1px solid ${color}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: `${spacing[verticalPaddingStep]}px ${spacing[horizontalPaddingStep]}px`,
          }}
      >
          <Icon
              color={color}
              style={{
                  height: iconSize,
              }}
          />
          <div
              style={{
                  color,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: fontSize[fontSizeStep],
              }}
          >
              {text}
          </div>
          <svg 
              data-name="Layer 1"
              viewBox="0 0 13 13"  
              style={{
                  height: iconSize,
              }}
          >
              <path
                  d="M12.73 11.43s-1.18-1.2-2.47-2.47a5.28 5.28 0 01-1.21 1.4l2.38 2.37a.91.91 0 00.65.27.91.91 0 00.65-.27.93.93 0 00.27-.65.91.91 0 00-.27-.65zm-2.47-6.3a5.16 5.16 0 10-2.22 4.21 5.27 5.27 0 002.22-4.21zM8.4 5.07A3.45 3.45 0 015 8.57a3.46 3.46 0 01-3.4-3.5A3.46 3.46 0 015 1.57a3.45 3.45 0 013.4 3.5z"
                  fill={color}
              />
              </svg>
      </header>
    )
}

Header.defaultProps = {
    text: "Get started!",
    color: "#005d9a",
    verticalPaddingStep: 3,
    horizontalPaddingStep: 3,
    fontSizeStep: 3,
    icon: 'Arrow',
    iconSize: 30,
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontSizeStep: PropTypes.number.isRequired,
  horizontalPaddingStep: PropTypes.number.isRequired,
  verticalPaddingStep: PropTypes.number.isRequired,
  icon: PropTypes.oneOf(['Arrow', 'Cross']),
  iconSize: PropTypes.number.isRequired,
}