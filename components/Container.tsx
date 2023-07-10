import classNames from 'classnames'
import { ReactNode } from "react"

type Props = {
    children: ReactNode
    as?: 'div' | 'section' | 'article'
    className?: string
}

const Container = ({children, as = 'div', className}: Props) => {

    const Component = as

    return (
        <Component className={classNames('flex pb-5', className)}>
            {children}
        </Component>
    )

}
export default Container