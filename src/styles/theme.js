export const colors = {
    primary: '#5CF6FC',
    secondary: '#6A82FB',
    tertiary: '#FC5C7D',
    textLight: '#FFFFFF',
    textDark: '#4D4D4D',
    bgDark: '#4D4D4D',
    menu: '#FC5C7D',
    button: '#000',
    bg: '#005AA7',
}

export const styles = {
    shadow: '0px 0px 15px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    gradients: [
        `linear-gradient(to top, ${colors.secondary}, #B46FBB, ${colors.tertiary})`,
        `linear-gradient(to bottom, ${colors.primary}, ${colors.tertiary})`
    ]
}

const breakpoints = [320, 576, 768, 992, 1200];
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);