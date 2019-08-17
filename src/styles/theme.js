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
    shadowDark: '0px 0px 10px rgba(0,0,0,0.22)',
    borderRadius: '10px',
    gradients: [
        `linear-gradient(to top, ${colors.secondary}, #B46FBB, ${colors.tertiary})`,
        `linear-gradient(to bottom, ${colors.primary}, ${colors.tertiary})`
    ]
}

export const gradients = {
    largeTaskGradient: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='179' height='181.714' viewBox='0 0 179 181.714'%3E%3Cdefs%3E%3ClinearGradient id='linear-gradient' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%236a82fb'/%3E%3Cstop offset='1' stop-color='%235cf6fc'/%3E%3C/linearGradient%3E%3Cfilter id='Rectangle_15' x='0' y='0' width='179' height='181.714' filterUnits='userSpaceOnUse'%3E%3CfeOffset input='SourceAlpha'/%3E%3CfeGaussianBlur stdDeviation='5' result='blur'/%3E%3CfeFlood flood-opacity='0.204'/%3E%3CfeComposite operator='in' in2='blur'/%3E%3CfeComposite in='SourceGraphic'/%3E%3C/filter%3E%3C/defs%3E%3Cg transform='matrix(1, 0, 0, 1, 0, 0)' filter='url(%23Rectangle_15)'%3E%3Crect id='Rectangle_15-2' data-name='Rectangle 15' width='149' height='151.714' rx='15' transform='translate(15 15)' fill='url(%23linear-gradient)'/%3E%3C/g%3E%3C/svg%3E%0A`,
    smallTaskGradient: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='179' height='105.714' viewBox='0 0 179 105.714'%3E%3Cdefs%3E%3ClinearGradient id='linear-gradient' x1='0.5' y1='-0.205' x2='0.5' y2='1.196' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23fc5c7d'/%3E%3Cstop offset='1' stop-color='%236a82fb'/%3E%3C/linearGradient%3E%3Cfilter id='Rectangle_27' x='0' y='0' width='179' height='105.714' filterUnits='userSpaceOnUse'%3E%3CfeOffset input='SourceAlpha'/%3E%3CfeGaussianBlur stdDeviation='5' result='blur'/%3E%3CfeFlood flood-opacity='0.204'/%3E%3CfeComposite operator='in' in2='blur'/%3E%3CfeComposite in='SourceGraphic'/%3E%3C/filter%3E%3C/defs%3E%3Cg transform='matrix(1, 0, 0, 1, 0, 0)' filter='url(%23Rectangle_27)'%3E%3Crect id='Rectangle_27-2' data-name='Rectangle 27' width='149' height='75.714' rx='15' transform='translate(15 15)' fill='url(%23linear-gradient)'/%3E%3C/g%3E%3C/svg%3E%0A`
}

const breakpoints = [320, 576, 768, 992, 1200];
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);