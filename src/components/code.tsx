export function Highlight(s){
    return (<span className={"java"}>{s}</span>)
}
export function Comment(s){
    return (<span className={"comment"}>{s}</span>)
}
export function Literal(s){
    return (<span className={"literal"}>{s}</span>)
}
export const Tab = (<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>);
export const Animate = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    }
};
