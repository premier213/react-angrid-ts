import { EmptyIcon } from './icons'

export type IsEmptyProps = {
    className?: string
    textEmpty?: string
}

export const IsEmpty: React.FC<IsEmptyProps> = ({ textEmpty }) => (
    <div className='isEmpty'>
        <div className='icon'>
            <EmptyIcon />
        </div>
        <div
            style={{
                color: 'rgb(149 147 147)',
                textAlign: 'center',
            }}
        >
            {textEmpty}
        </div>
    </div>
)
